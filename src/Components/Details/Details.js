import React, { useEffect } from "react";

import { motion } from "framer-motion";

import Video from "../../assets/abstract-71292.mp4";

import "./Details.css";

const Details = () => {
  return (
    <section className="details">
      <video
        className="details-background"
        src={Video}
        autoPlay
        loop
        muted
      ></video>
      <div className="text-container">
        <div className="text-height">
          <motion.div initial={{ opacity: 0.4 }} whileHover={{ opacity: 1 }} className="details-text">
            We know how hard it is to find professionals in the industry and
            we're dedicated to end this problem.
          </motion.div>
          <motion.span initial={{ opacity: 0.4 }} whileHover={{ opacity: 1 }}>
            We at GLIQO have created a platform to find experts in a multitude
            of fields whether it be the artisan space or software development.
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default Details;
