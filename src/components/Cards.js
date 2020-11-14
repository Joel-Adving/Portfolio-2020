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
              src="images/netflix-clone.png"
              text="Netflix-clone made with react"
              label="Netflix"
              path="http://netflix-clone.joeladving.com/"
            />
            <CardItem
              src="images/movie-app2.png"
              text="App with a movie database API"
              label="Movies app"
              path="http://movies.joeladving.com/"
            />
            <CardItem
              src="images/chat3.png"
              text="Chat room app made with react and firebase"
              label="Chat room"
              path="https://chatroom-app-3f006.web.app/"
            />
            <CardItem
              src="images/quire-better.png"
              text="A text editor app with local storage"
              label="Text editor"
              path="http://quire.joeladving.com/"
            />
            <CardItem
              src="images/todolist.png"
              text="Todo list app wth local strorage"
              label="Todo list"
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
