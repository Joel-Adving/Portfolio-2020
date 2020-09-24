import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Cards from "../Cards";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="portfolio-container">
        <Cards />
      </div>
      <Footer />
    </div>
  );
}
