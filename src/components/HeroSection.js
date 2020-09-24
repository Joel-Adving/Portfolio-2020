import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="../videos/video.mp4" autoPlay loop muted />
      <img className="profile-image" src="../images/profilbild.jpg" alt="" />
      <h1>Front End Developer</h1>
      <p>
        Hi! My name is Joel, I'm an front end developer who loves to code
        beautiful and functional websites. I'm currently studying at KYH in
        Stockholm Sweden, and in search for an internship.
      </p>
      <div className="button-container">
        <div className="hero-btn">
          <Link to="/portfolio">
            <button className="btns btn--large btn--outline">Portfolio</button>
          </Link>
          <Link to="/contact">
            <button className="btns btn--large btn--outline">Contact</button>
          </Link>

          {/* <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Portfolio
          </Button>
        </div>
        <div className="hero-btn">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Contact
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
