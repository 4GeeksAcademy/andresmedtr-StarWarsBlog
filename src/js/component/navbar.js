import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  console.log();
  return (
    <nav className="navbar navbar-light bg-secondary mb-3">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"
          className="navbar-brand mb-0 h1 starwars"
        />
      </Link>
      <div className="dropdown ml-auto">
        <button
          className="btn btn-warning dropdown-toggle me-5"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <span className="me-3">Favorites</span>
          <div className="bg bg-secondary rounded rounded-5 me-2">
            <span className="">{store.favorites.length}</span>
          </div>
        </button>
        <ul className="dropdown-menu">
          {store.favorites.length > 0
            ? store.favorites.map((item, index) => {
                return (
                  <div>
                    <li className="dropdown-item" key={index}>
                      {item}
                      <button onClick={() => actions.deleteItem(index)}>
                        Trash
                      </button>
                    </li>
                  </div>
                );
              })
            : "No favorites yet"}
        </ul>
      </div>
    </nav>
  );
};
