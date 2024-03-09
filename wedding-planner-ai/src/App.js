import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat.js";
import Dashboard from "./pages/Dashboard.js";
import { useState } from "react";
import Welcome from "./pages/Welcome";

function App() {
  //create use state for name1, name2, date
  const [name1, setName1] = useState("John");
  const [name2, setName2] = useState("Jane");
  const [date, setDate] = useState("01/01/2023");

  return (
    <Router>
      <Routes>
        <Route path="/chat" element={<Chat 
        name1={name1}
        setName1={setName1}
        name2={name2}
        setName2={setName2}
        date={date}
        setDate={setDate}/>} />
        <Route path="/" element={<Welcome
          name1={name1}
          setName1={setName1}
          name2={name2}
          setName2={setName2}
          date={date}
          setDate={setDate}
        />} />
        <Route path="/dashboard" element={<Dashboard
          name1={name1}
          setName1={setName1}
          name2={name2}
          setName2={setName2}
          date={date}
          setDate={setDate} />} />
      </Routes>
    </Router>
  );
}

export default App;
