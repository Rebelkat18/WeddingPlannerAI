import React, { useState, useEffect } from "react";

import Message from "./components/Message";
import Input from "./components/Input";
import History from "./components/History";
import Clear from "./components/Clear";
import OpenAI from "openai";

import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([]);

  // const openai = new OpenAI();

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessages(data.message));
  }, []);


  // const handleSubmit = async () => {
  //   const prompt = {
  //     role: "user",
  //     content: input,
  //   };

  //   setMessages([...messages, prompt]);

  //   const completion = await openai.chat.completions.create({
  //     messages: [{ role: "system", content: "You are a helpful assistant." }],
  //     model: "gpt-3.5-turbo",
  //   });
  
  //   console.log(completion.choices[0]);

  //   await fetch("https://api.openai.com/v1/chat/completions", {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       model: "gpt-3.5-turbo",
  //       messages: [...messages, prompt],
  //     }),
  //   })
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(data);
  //       const res = data.choices[0].message.content;
  //       setMessages((messages) => [
  //         ...messages,
  //         {
  //           role: "assistant",
  //           content: res,
  //         },
  //       ]);
  //       setHistory((history) => [...history, { question: input, answer: res }]);
  //       setInput("");
  //     });
  // };

  const clear = () => {
    setMessages([]);
    setHistory([]);
  };

  return (
    <div className="App">
      <div className="Column">
        <h3 className="Title">Chat Messages</h3>
        <h1>{messages}</h1>

        <div className="Content">
          {/* {messages.map((el, i) => {
            return <Message key={i} role={el.role} content={el.content} />;
          })} */}
        </div>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          // onClick={input ? handleSubmit : undefined}
        />
      </div>
      <div className="Column">
        <h3 className="Title">History</h3>
        <div className="Content">
          {history.map((el, i) => {
            return (
              <History
                key={i}
                question={el.question}
                onClick={() =>
                  setMessages([
                    { role: "user", content: history[i].question },
                    { role: "assistant", content: history[i].answer },
                  ])
                }
              />
            );
          })}
        </div>
        <Clear onClick={clear} />
      </div>
    </div>
  );
}
