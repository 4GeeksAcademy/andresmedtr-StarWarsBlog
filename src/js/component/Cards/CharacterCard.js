import React from "react";
import { Link, useParams } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${
          props.id + 1
        }.jpg`}
        className="card-img-top w-100"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Name: {props.item.name}</h5>
        <p className="card-text">Height: {props.item.height}</p>
        <p className="card-text">Mass: {props.item.mass}</p>
        <p className="card-text">Gender: {props.item.gender}</p>
        <Link to={{ pathname: `About/${props.item.id}`, state: props.item }}>
          <button href="#" className="btn btn-primary">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CharacterCard;
