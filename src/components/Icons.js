import React from "react";
import "./Icons.css";

function Icons() {
  return (
    <>
      <div className="icons">
        <h1>Technologies I use</h1>
        <div className="icons__container">
          <div className="icons__items">
            <img className="icon" alt="" src="../images/html-svart.png" />
            <img className="icon" alt="" src="../images/css-svart.png" />
            <img className="icon" alt="" src="../images/js-svart.png" />
            <img className="icon" alt="" src="../images/react-svart.png" />
            <img className="icon" alt="" src="../images/git-svart.png" />
            <img className="icon" alt="" src="../images/npm.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Icons;
