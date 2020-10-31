import React from "react";
//Importing Icons
import Logo from "../image/logo_2.svg";
import AppStore from "../image/app-store.svg";
import PlayStore from "../image/google-play.svg";
import Instagram from "../image/instagram.svg";
import LinkedIn from "../image/linkedin.svg";
import Twitter from "../image/twitter.svg";
import Facebook from "../image/facebook.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-download-links">
          <img id="footer-logo" src={Logo} alt="" />
          <div className="footer-app-download">
            <img src={AppStore} alt="" />
            <img src={PlayStore} alt="" />
          </div>
          <p>Visit help centre</p>
          <p>English</p>
        </div>
        <div className="footer-menu-links">
          <div className="footer-menu-one">
            <h4>Menu Links</h4>
            <ul>
              <li>Ride</li>
              <li>Drive</li>
              <li>Fleet</li>
              <li>Buisness</li>
              <li>Fleet</li>
              <li>Buisness</li>
            </ul>
          </div>
          <div className="footer-menu-two">
            <h4>Menu Links</h4>
            <ul>
              <li>Ride</li>
              <li>Drive</li>
              <li>Fleet</li>
              <li>Buisness</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-social-links">
        <p>&#169; Vastride Technology Inc.</p>
        <div className="footer-social-icons">
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Twitter} alt="" />
          <img src={Facebook} alt="" />
        </div>
      </div>
    </footer>
  );
}
