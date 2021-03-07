import React from "react";
import "./app.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import SystemBar from "./components/SystemBar";

const App = () => {
  const [time, setTime] = React.useState(45);
  return (
    <div className="container">
      <SystemBar />
      <Home time={time} />
      <Menu setTime={setTime} />
    </div>
  );
};

export default App;
