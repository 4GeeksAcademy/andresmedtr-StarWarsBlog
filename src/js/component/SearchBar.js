import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
  const { store, actions } = useContext(Context);
  const [textInput, setTextInput] = useState("");
  const navigate = useNavigate();
  const peopleArray = store.people.map((person) => person.name);
  const vehiclesArray = store.vehicles.map((vehicle) => vehicle.name);
  const planetsArray = store.planets.map((planet) => planet.name);

  const combinedArray = [...peopleArray, ...vehiclesArray, ...planetsArray];
  // Filter the peopleArray based on the current text input
  const filteredArray = combinedArray.filter(
    (item) =>
      item.toLowerCase().includes(textInput.toLowerCase()) && item !== textInput
  );

  return (
    <div>
      <form className="d-flex" role="search">
        <input
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          list="people-list"
        />
        <datalist id="people-list">
          {filteredArray.length > 0 &&
            filteredArray.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
        </datalist>
        <button
          className="btn btn-success"
          type="submit"
          onClick={() => navigate(`/people/${props.id}`)}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
