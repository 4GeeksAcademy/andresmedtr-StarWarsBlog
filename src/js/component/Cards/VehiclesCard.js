import React from "react";
import "../../../styles/cards.css";
import { useContext } from "react";
import { Context } from "../../store/appContext";

const VehiclesCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card bg bg-secondary">
      <img
        src={"https://starwars-visualguide.com/assets/img/vehicles/16.jpg"}
        className="card-img-top"
        alt="Should be a StarShip Image"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="card-body" style={{ width: "200px" }}>
        <h5 className="card-title">Name: {props.vehicle.name}</h5>
        <p className="card-text">
          Cargo Capacity: {props.vehicle.cargo_capacity}
        </p>
        <p className="card-text">Length: {props.vehicle.length}</p>
        <p className="card-text">Manufacturer: {props.vehicle.manufacturer}</p>
        <div className="buttonContainer">
          <button href="#" className="btn btn-danger">
            Learn More
          </button>
          <button className="favorites" style={{ fontSize: "20px" }}>
            <a
              onClick={() => actions.addFavorites(props.vehicle.name)}
              className="far fa-heart"></a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehiclesCard;
