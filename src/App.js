import React from "react";
import "./app.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import SystemBar from "./components/SystemBar";

const App = () => {
  return (
    <div class="container">
      <SystemBar />
      <Home />
      <Menu />
    </div>
  );
};

export default App;
