import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Technologies I use</h1>
      <div className="cards__container">
        <div className="cards__items">
          <CardItem src="../images/html-svart.png" />
          <CardItem src="../images/css-svart.png" />
          <CardItem src="../images/js-svart.png" />
          <CardItem src="../images/react-svart.png" />
          <CardItem src="../images/git-svart.png" />
          <CardItem src="../images/npm.png" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
