import React, { useState } from "react";
import Message from "../components/Message";
import Input from "../components/Input";
import axios from "axios";

import "./Chat.scss";

function Chat(props) {
  const [input, setInput] = useState("");
  const messages = props.messages;

  const handleSubmit = async (e) => {
    if (props.topic === "theme") {
      handleTheme();
      props.setTopic("wedding planning");
    }
    else if (props.topic === "schedule") {
      handleSchedule();
      props.setTopic("wedding planning");
    }
    else{
      props.setTopic("wedding planning");
    }

    const prompt = {
      role: "user",
      content: input,
    };

    const name1 = props.name1;
    const name2 = props.name2;
    const date = props.date;
    const page = props.page;

    props.setMessages([...messages, prompt]);

    axios.post("http://localhost:8000/chat", { messages, prompt, name1, name2, date, page })
      .then((res) => {
        props.setMessages((messages) => [
          ...messages,
          {
            role: "assistant",
            content: res.data,
          },
        ]);
        setInput("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleTheme = async (e) => {
    // get image from server
    const prompt = input + " wedding theme";
    axios.post("http://localhost:8000/image", { prompt: prompt })
      .then((res) => {
        document.querySelector(".Theme #generated").src = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

      // show spinner
      spinnerTimer();
  }

  const spinnerTimer = () => {
    document.querySelector(".Theme #spinner").style.display = "block";
    document.querySelector(".Theme #placeholder").style.display = "none";

    setTimeout(() => {
      document.querySelector(".Theme #generated").style.display = "block";
      document.querySelector(".Theme .spinner-border").style.display = "none";
    }, 15000);
  }

  const handleSchedule = async (e) => {
    // get text from server
    const prompt = {
      role: "user",
      content: "Generate a day schedule for my wedding. Keep the descriptions short and include the time. 9am to 11pm. Don't add a greeting or closing.",
    };

    props.setMessages([...messages, prompt]);

    axios.post("http://localhost:8000/chat", { messages, prompt })
      .then((res) => {
        props.setSchedule(res.data);
        setInput("");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="chat-grid">
      <div className="Column">
        <h3 className="Title">Chat Messages</h3>
        <div className="Content">
          {messages.map((el, i) => {
            if (el.role !== "system") {
              return <Message key={i} role={el.role} content={el.content} />;
            }
          })}
        </div>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onClick={input ? handleSubmit : undefined}
          onKeyDown={(e) => (
            e.keyCode === 13 ? handleSubmit() : null
          )}
        />
      </div>
    </div>
  );
}
export default Chat;