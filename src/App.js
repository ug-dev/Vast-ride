import React from "react";
//Importing components...
import NavBar from "./components/NavBar";
import MainBanner from "./components/MainBanner";
import SecondCompo from "./components/SecondCompo";
import ThirdCompo from "./components/ThirdCompo";
import FourthCompo from "./components/FourthCompo";
import FifthCompo from "./components/FifthCompo";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <main>
        <MainBanner />
        <SecondCompo />
        <ThirdCompo />
        <FourthCompo />
        <FifthCompo />
      </main>
      <Footer />
    </div>
  );
}
