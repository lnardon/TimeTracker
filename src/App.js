import React from "react";
import "./app.css";
import play from "./play.svg";

const App = () => {
  const startTimer = (time) => {
    let timerId;
    let globalTimer = time * 60;
    timerId = setInterval(() => {
      if (globalTimer >= 0) {
        updateDisplay(globalTimer);
        globalTimer--;
      } else {
        clearInterval(timerId);
        fireNotification("YEEEEE HAAAAAAAAA", "Time is up");
      }
    }, 1000);
  };

  const toggleMenu = () => {
    if (
      document.getElementsByClassName("central")[0].style.display === "flex"
    ) {
      document.getElementsByClassName("menu")[0].style.display = "flex";
      document.getElementsByClassName("central")[0].style.display = "none";
    } else {
      document.getElementsByClassName("menu")[0].style.display = "none";
      document.getElementsByClassName("central")[0].style.display = "flex";
    }
  };

  const closeApp = () => {
    window.ipc.send("closeApp");
  };
  const hideApp = () => {
    window.ipc.send("hideApp");
  };

  const fireNotification = (title, body) => new Notification(title, { body });

  const updateDisplay = (time) => {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    if (sec < 10) {
      document.getElementsByClassName("time")[0].innerText = `${min}:0${sec}`;
    } else {
      document.getElementsByClassName("time")[0].innerText = `${min}:${sec}`;
    }
  };

  return (
    <div class="container">
      <div class="systemBtns">
        <div onClick={closeApp} class="btn close"></div>
        <div onClick={hideApp} class="btn minimize"></div>
      </div>

      {/* HOME */}
      <div class="central">
        <h1 class="time">45:00</h1>
        <img
          src={play}
          alt="play"
          class="playBtn"
          onClick={() => startTimer(45)}
        />
      </div>

      {/* MENU */}
      <div class="menu">
        <div class="configDiv">
          <label for="theme">Theme:</label>
          <select name="theme" id="theme">
            <option select value="0">
              White
            </option>
            <option value="1">Black</option>
            <option value="2">Neon</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default App;
