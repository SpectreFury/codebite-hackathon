import React, { useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./App.css";

import Hero from "./Components/Hero/Hero";
import Awards from "./Components/Awards/Awards";
import Reviews from "./Components/Reviews/Reviews";
import Footer from "./Components/Footer/Footer";
import Marketplace from "./Components/Marketplace/Marketplace";

function App() {
  const location = useLocation();

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
    <AnimatePresence>
      <div id="trailer"></div>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              exit={{ x: -window.innerWidth, transition: { duration: 0.1 } }}
            >
              <Hero />
              <Awards />
              <Reviews />
              <Footer />
            </motion.div>
          }
        />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
