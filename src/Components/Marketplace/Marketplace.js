import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import "./Marketplace.css";

const Marketplace = () => {
  return (
    <section className="marketplace">
      <div className="marketplace-nav">
        <div className="input-container">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input
            type="text"
            className="marketplace-search"
            placeholder="Search"
          />
          <button className="search-button">Search</button>
        </div>
        <div className="marketplace-links">
          <a href="#">Categories</a>
          <a href="#">Favorites</a>
          <a href="#">Ask AI</a>
        </div>
        <FontAwesomeIcon icon={faUser} className="user-icon" />
      </div>

      <div className="marketplace-hero">
        <div className="marketplace-heading">Your most recent matches.</div>
        <div className="marketplace-description">Based on the ML results.</div>

        <div className="marketplace-suggestions">
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -4 }}
            className="marketplace-card"
          >
            <div className="marketplace-image"></div>
            <div className="marketplace-text">
              <div className="marketplace-title">Saul Goodman</div>
              <div className="marketplace-designation">Photographer</div>
              <div className="marketplace-buttons">
                <button className="marketplace-favorites">
                  Add To Favorites+
                </button>
                <button className="marketplace-heart">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
            whileHover={{ y: -4 }}
            className="marketplace-card"
          >
            <div className="marketplace-image"></div>
            <div className="marketplace-text">
              <div className="marketplace-title">Saul Goodman</div>
              <div className="marketplace-designation">Photographer</div>
              <div className="marketplace-buttons">
                <button className="marketplace-favorites">
                  Add To Favorites+
                </button>
                <button className="marketplace-heart">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
            whileHover={{ y: -4 }}
            className="marketplace-card"
          >
            <div className="marketplace-image"></div>
            <div className="marketplace-text">
              <div className="marketplace-title">Saul Goodman</div>
              <div className="marketplace-designation">Photographer</div>
              <div className="marketplace-buttons">
                <button className="marketplace-favorites">
                  Add To Favorites+
                </button>
                <button className="marketplace-heart">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.6 } }}
            whileHover={{ y: -4 }}
            className="marketplace-card"
          >
            <div className="marketplace-image"></div>
            <div className="marketplace-text">
              <div className="marketplace-title">Saul Goodman</div>
              <div className="marketplace-designation">Photographer</div>
              <div className="marketplace-buttons">
                <button className="marketplace-favorites">
                  Add To Favorites+
                </button>
                <button className="marketplace-heart">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
