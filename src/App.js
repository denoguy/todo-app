import React from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <img
        className="todo__logo"
        src="https://lh3.googleusercontent.com/proxy/4P1nHzTeuz3vWqkGXdSk-7xfS3Vxy2L2uCDR1GcNrwOHFKSG5QSUCG3w_a1wJDs7r11AQmZF1rA8FF9RcvTDyeByn7y04atR"
        alt=""
      />
      <div className="app__body">
        <Todo />
      </div>
    </div>
  );
}

export default App;
