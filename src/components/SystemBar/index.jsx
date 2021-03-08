import React from "react";

function SystemBar() {
  const closeApp = () => {
    window.ipc.send("closeApp");
  };
  const hideApp = () => {
    window.ipc.send("hideApp");
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

  return (
    <div className="systemBtns">
      <div onClick={closeApp} className="btn close"></div>
      <div onClick={hideApp} className="btn minimize"></div>
      <div onClick={toggleMenu} className="btn settings"></div>
    </div>
  );
}

export default SystemBar;
