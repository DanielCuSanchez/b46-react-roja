import React from "react";

import { Link } from "react-router-dom";

export const DetallePokemon = () => {
  return (
    <div className="card mt-5">
      <div className="row no-gutters text-dark">
        <div className="col-4">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            className="card-img"
            style={{
              minWidth: "300px",
            }}
          />
        </div>
        <div
          className="col-8"
          style={{
            minWidth: "600px",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">Nombre</h5>
            <p className="card-text">Types</p>
            <p className="card-text">Forms</p>
            <p className="card-text">
              <small className="text-muted">Peso pokemon</small>
            </p>
            <Link className="btn btn-primary" to="/">
              Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
