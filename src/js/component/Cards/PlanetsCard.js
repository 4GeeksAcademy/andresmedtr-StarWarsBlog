import React from "react";
import "../../../styles/cards.css";
import { useContext } from "react";
import { Context } from "../../store/appContext";

const PlanetsCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card bg bg-secondary" style={{ width: "18rem" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${
          props.id + 1
        }.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Name: {props.planet.name}</h5>
        <p className="card-text">Population: {props.planet.population}</p>
        <p className="card-text">Terrain: {props.planet.terrain}</p>
        <p className="card-text">Climate: {props.planet.climate}</p>
        <div className="buttonContainer">
          <button href="#" className="btn btn-danger">
            Learn More
          </button>
          <button
            className="favorites"
            onClick={() => actions.addFavorites(props.planet.name)}>
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanetsCard;
