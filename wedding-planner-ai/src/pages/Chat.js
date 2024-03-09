import React, { useState } from "react";
import Message from "../components/Message";
import Input from "../components/Input";
import axios from "axios";

import "./Chat.css";

function Chat() {
  const [input, setInput] = useState(""); //prompt
  const [messages, setMessages] = useState([]); //res

  const handleSubmit = async (e) => {
    e.preventDefault();

    const prompt = {
      role: "user",
      content: input,
    };

    setMessages([...messages, prompt]);

    axios.post("http://localhost:8000/chat", { messages, prompt })
      .then((res) => {
        setMessages((messages) => [
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

  // const handleSubmit = async () => {
  //   const prompt = {
  //     role: "user",
  //     content: input,
  //   };

  //   setMessages([...messages, prompt]);

  //   await fetch("https://api.openai.com/v1/chat/completions", {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       model: "gpt-3.5-turbo",
  //       messages: [
  //         {
  //           role: "system",
  //           content: "Your name is Jill. You are a wedding planner. You do your best to get to know the couple and help them plan the wedding of their dreams.",
  //         },
  //         ...messages,
  //         {
  //           role: "user",
  //           content: input,
  //         },
  //       ],
  //     }),
  //   })
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(data);
  //       const res = data.choices[0].message.content;
  // setMessages((messages) => [
  //   ...messages,
  //   {
  //     role: "assistant",
  //     content: res,
  //   },
  // ]);
  // setInput("");
  //     });
  // };

  return (
    <div className="chat-grid">
      <div className="Column">
        <h3 className="Title">Chat Messages</h3>
        <div className="Content">
          {messages.map((el, i) => {
            return <Message key={i} role={el.role} content={el.content} />;
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