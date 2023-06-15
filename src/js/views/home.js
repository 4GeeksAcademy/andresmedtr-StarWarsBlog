import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import CharacterCard from "../component/Cards/CharacterCard";
import PlanetsCard from "../component/Cards/PlanetsCard";
import VehiclesCard from "../component/Cards/VehiclesCard";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="mt-5 bg bg-dark">
      <div className="cardsTitleHolder" style={{ border: "5px red" }}>
        <h1 className="descriptionTitle" style={{ marginTop: "5px red" }}>
          Characters
        </h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex cardDisplay bg-black">
          {store.people.map((item, index) => {
            return (
              <span style={{ width: "2000px" }}>
                <CharacterCard
                  item={item}
                  key={index}
                  id={index}
                  favorite={actions.addFavorites}
                />
              </span>
            );
          })}
        </div>
      </div>
      <div className="cardsTitleHolder">
        <h1 className="descriptionTitle">Planets</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex cardDisplay bg-black">
          {store.planets.map((planet, index) => {
            return (
              <span style={{ width: "1000px" }}>
                <PlanetsCard
                  planet={planet}
                  key={index}
                  id={index}
                  favorite={actions.addFavorites}
                />
              </span>
            );
          })}
          ;
        </div>
      </div>
      <div className="cardsTitleHolder">
        <h1 className="descriptionTitle">Vehicles</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex cardDisplay bg-black">
          {store.vehicles.map((vehicle, index) => {
            return (
              <span style={{ width: "1000px" }}>
                <VehiclesCard
                  vehicle={vehicle}
                  key={index}
                  id={index}
                  favorite={actions.addFavorites}
                />
              </span>
            );
          })}
          ;
        </div>
      </div>
      ;
    </div>
  );
};
