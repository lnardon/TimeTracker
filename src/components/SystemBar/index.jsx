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
  const setBtnLabel = (name) => {
    document.getElementsByClassName("systemBtnLabel")[0].innerText = name;
  };

  return (
    <div onMouseLeave={() => setBtnLabel("")} className="systemBtns">
      <div
        onMouseOver={() => setBtnLabel("Close")}
        onClick={closeApp}
        className="btn close"
      ></div>
      <div
        onMouseOver={() => setBtnLabel("Minimize")}
        onClick={hideApp}
        className="btn minimize"
      ></div>
      <div
        onMouseOver={() => setBtnLabel("Menu")}
        onClick={toggleMenu}
        className="btn settings"
      ></div>
      <span className="systemBtnLabel"></span>
    </div>
  );
}

export default SystemBar;
