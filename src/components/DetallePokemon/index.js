import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export const DetallePokemon = ({ id }) => {
  const [pokemon, setPokemon] = useState({});
  const [cargando, setCargando] = useState(true);

  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setPokemon(data);
        setTimeout(() => {
          setCargando(false);
        }, 500);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="container bg-light text-dark my-5">
      <div className="row justify-content-center text-center py-3">
        {cargando ? (
          <p className="alert alert-danger">Cargando.....</p>
        ) : (
          <Pokemon {...pokemon} />
        )}
      </div>
    </div>
  );
};

const Pokemon = (pokemon) => {
  const { abilities, forms, name, height, sprites } = pokemon;
  return (
    <>
      <div className="col-md-4">
        <img
          src={sprites.front_default}
          style={{ width: "250px" }}
          alt={name}
        />
      </div>
      <div className="col-md-6">
        <h5>{name}</h5>
        <p>
          Habilidades:
          {abilities.map((ability) => (
            <small> {ability.name} </small>
          ))}
        </p>
        <p>
          Formas :{" "}
          {forms.map((form) => (
            <small> {form.name} </small>
          ))}
        </p>
        <p>
          <small className="text-muted">Altura: {height} cm</small>
        </p>
        <Link className="btn btn-primary" to="/">
          Inicio
        </Link>
      </div>
    </>
  );
};
