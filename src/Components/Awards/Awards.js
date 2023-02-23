import React from "react";

import { motion } from "framer-motion";

import Screen from "../../assets/screen-updated.png";
import ShowcaseVideo from "../../assets/showcase-video.mp4";

import "./Awards.css";

const Awards = () => {
  return (
    <section className="awards">
      <div className="awards-heading">Connecting isn't hard anymore.</div>
      <div className="cards">
        <motion.div
          className="ai-card"
          initial={{ x: -400, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}>
          <h2 className="card-heading">Powered by AI</h2>
          <p className="card-paragraph">
            Our experts have developed machine learning models that can help you
            find the team you need, within a few clicks. Compare teams and
            professionals side by side using hundreds of parameters.
          </p>
        </motion.div>
        <div className="award-cards">
          <motion.div
            className="award-card"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}>
            <div className="award-text">200+</div>
            <div className="award-subtext">Awards</div>
          </motion.div>
          <motion.div
            className="award-card"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}>
            <div className="position-text">2nd place</div>
            <div className="award-subtext">Best startups of the year</div>
          </motion.div>
          <motion.div
            className="award-card"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}>
            <div className="freelancer-text">10,000+</div>
            <div className="award-subtext">Freelancers</div>
          </motion.div>
          <motion.div
            className="award-card"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}>
            <div className="percent-text">100%</div>
            <div className="award-subtext">Commitment</div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="showcase"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}>
        <div className="showcase-text">
          <div className="showcase-heading">A little insight into our work</div>
          <div className="showcase-paragraph">
            Take a look at how you can access the most prized features of our
            company.
          </div>
        </div>
        <div className="screen-container">
          <img src={Screen} className="screen" />
          <video
            className="showcase-background"
            src={ShowcaseVideo}
            autoPlay
            loop
            muted></video>
        </div>
      </motion.div>
    </section>
  );
};

export default Awards;
