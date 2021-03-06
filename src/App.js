import React from "react";
import "./app.css";
import play from "./play.svg";

const themes = [
  {
    title: "CLASSIC BLACK",
    appBg: "#131313",
    timeDisplay: "#e9e9e9",
    closeBtn: "rgb(255, 92, 92)",
    minimizeBtn: "rgb(255, 223, 81)",
    menuLabels: "#e9e9e9",
    menuSelectBorder: "#e9e9e9",
  },
  {
    title: "CLASSIC WHITE",
    appBg: "#e9e9e9",
    timeDisplay: "#131313",
    closeBtn: "rgb(255, 92, 92)",
    minimizeBtn: "rgb(255, 223, 81)",
    menuLabels: "#131313",
    menuSelectBorder: "#131313",
  },
];
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
        fireNotification(
          "End of period.",
          "Take a short break and prepare for the next one."
        );
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

  const themeSwitcher = (e) => {
    const selected = e.target.value;
    const root = document.documentElement;
    root.style.setProperty("--appBg", themes[selected]["appBg"]);
    root.style.setProperty("--timeDisplay", themes[selected]["timeDisplay"]);
    root.style.setProperty("--closeBtn", themes[selected]["closeBtn"]);
    root.style.setProperty("--minimizeBtn", themes[selected]["minimizeBtn"]);
    root.style.setProperty("--menuLabels", themes[selected]["menuLabels"]);
    root.style.setProperty(
      "--menuSelectBorder",
      themes[selected]["menuSelectBorder"]
    );
  };

  return (
    <div class="container">
      <div class="systemBtns">
        <div onClick={closeApp} class="btn close"></div>
        <div onClick={toggleMenu} class="btn minimize"></div>
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
          <label className="label" for="theme">
            Theme:
          </label>
          <select name="theme" id="theme" onChange={(e) => themeSwitcher(e)}>
            <option selected value="0">
              Black
            </option>
            <option value="1">White</option>
            {/* <option value="2">Neon</option> */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default App;
