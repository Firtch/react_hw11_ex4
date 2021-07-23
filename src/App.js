import logo from "./logo.svg";
import "./App.css";
import React, { useRef } from "react";

export default function App() {

const ref = useRef(null);

const handleFocus = () => {
  ref.current.style.color = "red";
}

  return (
    <div className="container">
      <input ref={ref} />
      <button onClick={handleFocus}>FOCUS</button>
     
    </div>
  );
}
