import React from "react";
import FourthSubCompo from "./FourthSubCompo";
import Map from "../image/map.svg";
import Car from "../image/car.svg";
import Wallet from "../image/wallet.svg";

export default function FourthCompo() {
  return (
    <div className="fourth-compo">
      <div className="fourth-compo-line">
        <div className="fourth-compo-container">
          <FourthSubCompo
            id={"one"}
            image={Car}
            title={"Affordable price"}
            subtitle={
              "Vastride offers you a ride in minutes. See for yourself!"
            }
          />
          <FourthSubCompo
            id={"two"}
            image={Wallet}
            title={"Easy to use"}
            subtitle={"We aim to offer the best ride prices."}
          />
          <FourthSubCompo
            id={"three"}
            image={Map}
            title={"Get a ride"}
            subtitle={"Just few clicks and boom ride is there for you."}
          />
        </div>
      </div>
    </div>
  );
}
