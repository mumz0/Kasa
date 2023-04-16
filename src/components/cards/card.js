import React from "react";
import { Link } from "react-router-dom";

function Card({ obj }) {
  const url = `housing/${obj.id}`;
  return (
    <article className="card">
      <Link to={url}>
        <img className="card_img" src={obj.cover} alt={obj.title} />
        <div className="card_title">
          <h2>{obj.title}</h2>
        </div>
      </Link>
    </article>
  );
}

export default Card;
