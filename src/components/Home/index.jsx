import React from "react";

function Home({ time }) {
  const startTimer = (time) => {
    let timerId;
    let globalTimer = time * 60;
    updateDisplay(globalTimer);
    globalTimer--;
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
    <div className="central">
      <h1 className="time">45:00</h1>
      <svg
        viewBox="0 0 30.065 30.065"
        alt="play"
        className="playBtn"
        onClick={() => startTimer(time)}
      >
        <path
          id="playStoke"
          d="M26.511,12.004L6.233,0.463c-2.151-1.228-4.344,0.115-4.344,2.53v24.093
             c0,2.046,1.332,2.979,2.57,2.979c0.583,0,1.177-0.184,1.767-0.543l20.369-12.468c1.024-0.629,1.599-1.56,1.581-2.555
             C28.159,13.503,27.553,12.593,26.511,12.004z M25.23,14.827L4.862,27.292c-0.137,0.084-0.245,0.126-0.319,0.147
             c-0.02-0.074-0.04-0.188-0.04-0.353V2.994c0-0.248,0.045-0.373,0.045-0.404c0.08,0.005,0.22,0.046,0.396,0.146l20.275,11.541
             c0.25,0.143,0.324,0.267,0.348,0.24C25.554,14.551,25.469,14.678,25.23,14.827z"
        />
      </svg>
    </div>
  );
}

export default Home;
