const startTimer = (time) => {
  let timerId;
  let globalTimer = time * 60;
  timerId = setInterval(() => {
    if (globalTimer > 0) {
      updateDisplay(globalTimer);
      globalTimer--;
    } else {
      clearInterval(timerId);
      console.error("your err");
    }
  }, 1000);
};

const updateDisplay = (currentTime) => {
  document.getElementsByClassName("time")[0].innerText = currentTime;
};
