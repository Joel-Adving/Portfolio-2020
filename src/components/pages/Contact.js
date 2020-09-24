import React from "react";
import "../../App.css";
import "./Contact.css";
// import Navbar from "../Navbar.js";
import Footer from "../Footer";
// import Portfolio from "./Portfolio.css";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="Navbar"></div>
      <div className="contact-container">
        <h1>Contact me</h1>
        <div className="contact-item-wrapper">
          <a
            className="contact-item"
            href="https://www.linkedin.com/in/joel-adving-3385571a0/"
          >
            Linked <i class="fab fa-linkedin-in fa-fw"></i>
          </a>
          <a className="contact-item" href="https://github.com/Joel-Adving">
            Git Hub <i class="fab fa-github fa-fw"></i>
          </a>
          <a className="contact-item" href="mailto: joel.adving@gmail.com">
            Mail <i class="fas fa-envelope fa-fw"></i>
          </a>
          <p className="contact-item-phone">
            +46 70-208-26-95 <i class="fas fa-phone fa-fw"></i>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
