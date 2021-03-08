import React from "react";

function Menu({ setTime }) {
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
    <div className="menu">
      <div className="configDiv">
        <label className="label" htmlFor="theme">
          Focus Period:
        </label>
        <select
          name="time"
          id="theme"
          onChange={(e) => {
            setTime(e.target.value);
            document.getElementsByClassName(
              "time"
            )[0].innerText = `${e.target.value}:00`;
          }}
          defaultValue={45}
        >
          <option value={10}>10min</option>
          <option value={15}>15min</option>
          <option value={30}>30min</option>
          <option value={45}>45min</option>
          <option value={50}>50min</option>
          <option value={60}>60min</option>
        </select>

        <label className="label" htmlFor="theme">
          Theme:
        </label>
        <select
          defaultValue={"0"}
          name="theme"
          id="theme"
          onChange={(e) => themeSwitcher(e)}
        >
          <option value="0">Black</option>
          <option value="1">White</option>
        </select>
      </div>
    </div>
  );
}

export default Menu;
