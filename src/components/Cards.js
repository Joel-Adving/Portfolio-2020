import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out some of my projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/quire-better.png"
              text="A note taking app with local storage"
              label="Quire.se"
              path="http://quire.se/"
            />
            <CardItem
              src="images/todolist.png"
              text="Todo list app wth local strorage and current date"
              label="Todo List"
              path="https://github.com/Joel-Adving/todo-list-app"
            />
            <CardItem
              src="images/portfolio.png"
              text="Portfolio website made with react"
              label="Portfolio"
              path="https://github.com/Joel-Adving/portfolio-2020"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
