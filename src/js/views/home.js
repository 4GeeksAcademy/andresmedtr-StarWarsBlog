import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import CharacterCard from "../component/Cards/CharacterCard";
import PlanetsCard from "../component/Cards/PlanetsCard";
import VehiclesCard from "../component/Cards/VehiclesCard";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="mt-5">
      <h1>Characters</h1>
      <div className="w-100">
        <div className="overflow-x-scroll overflow-x d-flex">
          {store.people.map((item, index) => {
            return <CharacterCard item={item} key={index} id={index} />;
          })}
        </div>
      </div>
      <h1>Planets</h1>
      <div className="d-flex w-100">
        {store.planets.map((planet, index) => {
          return <PlanetsCard planet={planet} key={index} id={index} />;
        })}
      </div>
      <h1>Vehicles</h1>
      <div className="d-flex w-100">
        {store.vehicles.map((vehicle, index) => {
          return <VehiclesCard vehicle={vehicle} key={index} id={index} />;
        })}
      </div>
      ;
    </div>
  );
};
