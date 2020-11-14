import React from "react";
import "../../App.css";
import "./Contact.css";
import Footer from "../Footer";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="Navbar"></div>
      <div className="contact-container">
        <h1>Contact me</h1>
        <div className="contact-item-wrapper">
          <a
            title="My linked in"
            className="contact-item"
            href="https://se.linkedin.com/in/joel-adving-3385571a0"
          >
            Linked <i class="fab fa-linkedin-in fa-fw" alt="My linked in"></i>
          </a>
          <a
            title="My github"
            className="contact-item"
            href="https://github.com/Joel-Adving"
          >
            Git Hub <i class="fab fa-github fa-fw" alt="My github"></i>
          </a>
          <a
            title="Send me an email"
            className="contact-item"
            href="mailto: joel.adving@gmail.com"
          >
            Mail <i class="fas fa-envelope fa-fw" alt="Send me an email"></i>
          </a>
          <p className="contact-item-phone">
            +46 70-208-26-95
            <i
              class="fas fa-phone fa-fw"
              title="My phone number"
              alt="My phone number"
            ></i>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
