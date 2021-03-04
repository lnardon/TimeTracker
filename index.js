const startTimer = (time) => {
  let timerId;
  let globalTimer = time * 60;
  timerId = setInterval(() => {
    if (globalTimer > 0) {
      console.log(globalTimer);
      globalTimer--;
    } else {
      clearInterval(timerId);
      console.error("your err");
    }
  }, 1000);
};
