import "../Menu.css";

import React from "react";

function MenuIcon({ toggleMenu, menuclass }) {
  return (
    <div
      className={`icon ${menuclass}`}
      onClick={() => {
        toggleMenu();
      }}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default MenuIcon;
