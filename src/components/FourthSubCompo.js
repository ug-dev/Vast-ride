import React from "react";

export default function FourthSubCompo({ id, image, title, subtitle }) {
  return (
    <div id={id} className="fourth-sub-compo">
      <div className="fourth-sub-compo-image">
        <img src={image} alt="" />
      </div>
      <div className="fourth-sub-compo-text">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
