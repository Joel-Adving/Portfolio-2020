import React from "react";

function IconItem(props) {
  return (
    <>
      <li className="icons">
        <a className="icons__item__link" to={props.path}>
          <figure className="icons__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="" className="icons__item__img" />
          </figure>
          <div className="icons__item_info">
            <h5 className="icon__item__text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default IconItem;
