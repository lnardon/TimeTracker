import React from "react";
import play from "../../play.svg";

function Home() {
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
    <div class="central">
      <h1 class="time">45:00</h1>
      <img
        src={play}
        alt="play"
        class="playBtn"
        onClick={() => startTimer(45)}
      />
    </div>
  );
}

export default Home;