import React from "react";

const VehiclesCard = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={"https://starwars-visualguide.com/assets/img/vehicles/16.jpg"}
        className="card-img-top"
        alt="Should be a StarShip Image"
      />
      <div className="card-body">
        <h5 className="card-title">Name: {props.vehicle.name}</h5>
        <p className="card-text">
          Cargo Capacity: {props.vehicle.cargo_capacity}
        </p>
        <p className="card-text">Length: {props.vehicle.length}</p>
        <p className="card-text">Manufacturer: {props.vehicle.manufacturer}</p>
        <a href="#" className="btn btn-primary">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default VehiclesCard;
