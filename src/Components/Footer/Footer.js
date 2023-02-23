import React from "react";

import AppStore from "../../assets/app-store.png";
import GooglePlay from "../../assets/google-play.png";
import Logo from "../../assets/gem-regular.svg";
import Twitter from "../../assets/twitter.svg";
import LinkedIn from "../../assets/linkedin.svg";
import GitHub from "../../assets/github.svg";
import Instagram from "../../assets/instagram.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-card">
        <div className="footer-links">
          <div className="footer-link">
            <div className="footer-heading">Categories</div>
            <div className="footer-anchors">
              <a href="#">Graphic & Design</a>
              <a href="#">Digital Marketing</a>
              <a href="#">Writing & Translation</a>
              <a href="#">Video & Animation</a>
              <a href="#">Music & Audio</a>
              <a href="#">Programming & Tech</a>
              <a href="#">Data</a>
              <a href="#">Business</a>
              <a href="#">Lifestyle</a>
              <a href="#">Photography</a>
            </div>
          </div>
          <div className="footer-link">
            <div className="footer-heading">About</div>
            <div className="footer-anchors">
              <a href="#">About us</a>
              <a href="#">How it works</a>
              <a href="#">Careers</a>
              <a href="#">Stories</a>
              <a href="#">News</a>
              <a href="#">Team</a>
              <a href="#">Awards</a>
            </div>
          </div>
          <div className="footer-link">
            <div className="footer-heading">Terms</div>
            <div className="footer-anchors">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Copyright Policy</a>
              <a href="#">Code of Conduct</a>
              <a href="#">Fees and Charges</a>
            </div>
          </div>
          <div className="footer-link">
            <div className="footer-heading">Support</div>
            <div className="footer-anchors">
              <a href="#">Help & Support</a>
              <a href="#">Trust & Safety</a>
            </div>
          </div>
          <div className="footer-link">
            <div className="footer-heading">Apps</div>
            <div className="footer-images">
              <a href="#">
                <img src={AppStore} width={200} />
              </a>
              <a href="#">
                <img src={GooglePlay} width={200} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-socials">
          <div className="footer-trademark">
            <img src={Logo} width={40} />
            <div className="legal-text">GLIQO International Ltd 2023</div>
          </div>
          <div className="footer-icons">
            <a href="https://twitter.com">
              <img src={Twitter} width={40} className="social-images" />
            </a>
            <a href="https://linkedin.com">
              <img src={LinkedIn} width={40} className="social-images" />
            </a>
            <a href="https://github.com">
              <img src={GitHub} width={40} className="social-images" />
            </a>
            <a href="https://instagram.com">
              <img src={Instagram} width={40} className="social-images" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
