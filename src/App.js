import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";

import Hero from "./Components/Hero/Hero";
import Awards from "./Components/Awards/Awards";
import Reviews from "./Components/Reviews/Reviews";
import Footer from "./Components/Footer/Footer";
import Marketplace from "./Components/Marketplace/Marketplace";

function App() {
  useEffect(() => {
    const trailer = document.querySelector("#trailer");

    document.body.onpointermove = (e) => {
      const { clientX, clientY } = e;

      const x = clientX - trailer.offsetWidth / 2;
      const y = clientY - trailer.offsetHeight / 2;

      trailer.animate(
        {
          transform: `translate(${x}px, ${y}px)`,
        },
        { duration: 4000, fill: "forwards" }
      );
    };
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Hero />
              <Awards />
              <Reviews />
              <Footer />
            </React.Fragment>
          }
        />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
      <div id="trailer"></div>
    </React.Fragment>
  );
}

export default App;
