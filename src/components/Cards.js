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
              src="images/movie-app2.png"
              text="React app with a movie database API"
              label="Movies App"
              path="http://movies.joeladving.com/"
            />
            <CardItem
              src="images/quire-better.png"
              text="A note taking app with local storage"
              label="Note Taking"
              path="http://quire.joeladving.com/"
            />
            <CardItem
              src="images/todolist.png"
              text="Todo list app wth local strorage"
              label="Todo List"
              path="http://todolist.joeladving.com/"
            />
            <CardItem
              src="images/portfolio.png"
              text="Portfolio website made with react"
              label="Portfolio"
              path="https://joeladving.com/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
