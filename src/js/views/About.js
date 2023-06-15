import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/about.css";

export const PeopleView = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const info = store.people.find((person, idx) => idx == params.id);
  console.log("Info:", info);
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-5 text-center">
          <img
            className="displayedImage border border-warning border-4 border-opacity-50"
            src={`https://starwars-visualguide.com/assets/img/characters/${
              parseInt(params.id) + 1
            }.jpg`}
          />
        </div>
        <div className="col text-white">
          <h1 className="text-center">{info.name}</h1>
          <p>
            Veniam irure veniam sit incididunt excepteur magna excepteur non
            aute ut. Nisi irure consectetur enim ullamco irure ad. Tempor eu
            pariatur incididunt id minim in mollit exercitation irure est. Anim
            ex ut est ea exercitation labore aliqua culpa non ut. Ullamco
            pariatur ad adipisicing est minim sunt laborum aliqua amet laboris
            velit anim.
          </p>
        </div>
      </div>
      <div className="row text-white justify-content-center mt-4 border-top border-secondary pt-4">
        <div className="col">
          <h4>Name</h4>
          {info.name}
        </div>
        <div className="col">
          <h4>Birth Year</h4>
          {info.birth_year}
        </div>
        <div className="col">
          <h4>Gender</h4>
        </div>
        <div className="col">
          <h4>Height</h4>
        </div>
        <div className="col">
          <h4>Skin Color</h4>
        </div>
        <div className="col">
          <h4>Eye Color</h4>
        </div>
      </div>
    </div>
  );
};

// {name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', …}
// birth_year
// :
// "19BBY"
// created
// :
// "2014-12-09T13:50:51.644000Z"
// edited
// :
// "2014-12-20T21:17:56.891000Z"
// eye_color
// :
// "blue"
// films
// :
// (4) ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/6/']
// gender
// :
// "male"
// hair_color
// :
// "blond"
// height
// :
// "172"
// homeworld
// :
// "https://swapi.dev/api/planets/1/"
// mass
// :
// "77"
// name
// :
// "Luke Skywalker"
// skin_color
// :
// "fair"
// species
// :
// []
// starships
// :
// (2) ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/']
// url
// :
// "https://swapi.dev/api/people/1/"
// vehicles
// :
// (2) ['https://swapi.dev/api/vehicles/14/', 'https://swapi
