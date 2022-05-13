import React from "react";

import "./App.css";
import Counter from "./components/Counter";
import Events from "./components/Events";

const App = () => {
  return (
    <div>
      <h1 className="app">Let's Get Alex A Job!</h1>
      <Counter />
      <Events />
    </div>
  );
};

export default App;
