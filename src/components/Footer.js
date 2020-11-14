import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <section className="footer-section">
        <p className="footer-section-heading"></p>
      </section>
      <div className="footer-link">
        <div className="footer-link-wraper">
          <div className="footer-link-items">
            <h2>&copy; Joel Adving 2020</h2>
            <a
              className="footer-link-icons"
              title="My linked in"
              href="https://www.linkedin.com/in/joel-adving-3385571a0/"
            >
              <i class="fab fa-linkedin-in" alt="My linked in"></i>
            </a>
            <a
              title="My git hub"
              className="footer-link-icons"
              href="https://github.com/Joel-Adving"
            >
              <i class="fab fa-github" alt="My git hub"></i>
            </a>
            <a
              title="Send me an email "
              className="footer-link-icons"
              href="mailto: joel.adving@gmail.com"
            >
              <i class="fas fa-envelope" alt="Send me an email"></i>
            </a>
            <Link to="contact" className="footer-link-icons">
              <i
                class="fas fa-phone"
                title="My phone number"
                alt="My phone number"
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
