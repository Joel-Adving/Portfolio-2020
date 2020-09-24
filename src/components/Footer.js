import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-section">
        <p className="footer-section-heading"></p>
      </section>
      <div className="footer-link">
        <div className="footer-link-wraper">
          <div className="footer-link-items">
            <a
              className="footer-link-icons"
              href="https://www.linkedin.com/in/joel-adving-3385571a0/"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              className="footer-link-icons"
              href="https://github.com/Joel-Adving"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              className="footer-link-icons"
              href="mailto: joel.adving@gmail.com"
            >
              <i class="fas fa-envelope"></i>
            </a>
            <Link to="contact" className="footer-link-icons">
              <i class="fas fa-phone"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
