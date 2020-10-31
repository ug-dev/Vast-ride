import React from "react";
import Image from "../image/third-compo-background.png";

export default function ThirdCompo() {
  return (
    <div className="third-compo">
      <div className="third-compo-content">
        <div className="third-compo-info">
          <div className="third-compo-text">
            <h3>Get a ride in few Clicks!</h3>
            <p>
              Pick your destination, request a ride, meet your driver, enjoy the
              journey.
            </p>
          </div>
          <div className="third-compo-button">
            <button>Take a ride</button>
          </div>
        </div>
        <div className="third-compo-image">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
}
