import React from "react";

const PlanetsCard = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${
          props.id + 1
        }.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Name: {props.planet.name}</h5>
        <p className="card-text">population: {props.planet.population}</p>
        <p className="card-text">terrain: {props.planet.terrain}</p>
        <p className="card-text">climate: {props.planet.climate}</p>
        <a href="#" className="btn btn-primary">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default PlanetsCard;
