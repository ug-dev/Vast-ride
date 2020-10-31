import React, { useState, useCallback } from "react";
import Logo from "../image/logo_1.svg";

import MenuIcon from "./MenuIcon";
export default function NavBar() {
  const [menuclass, setmenuclass] = useState("");
  const [menuclass2, setmenuclass2] = useState("");

  const menuToggle = useCallback(() => {
    if (menuclass === "open") {
      setmenuclass("");
      setmenuclass2("");
    } else {
      setmenuclass("open");
      setmenuclass2("open1");
    }
  }, [menuclass]);

  return (
    <nav>
      <div className="nav-bar-items">
        <div className="nav-bar-logo">
          <img src={Logo} alt="Vastride Logo" />
        </div>

        <div className="nav-bar-links">
          <ul>
            <li>Ride</li>
            <li>Drive</li>
            <li>Fleet</li>
            <li>Buisness</li>
          </ul>
        </div>

        {/* Mobile Site */}

        <div className="nav-bar-mobile-menu">
          <MenuIcon menuclass={menuclass2} toggleMenu={menuToggle} />
        </div>
        <div className={`mobile-menu-items ${menuclass}`}>
          <ul>
            <li>Drive</li>
            <li>Ride</li>
            <li>Fleet</li>
            <li>Buisness</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
