import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Pokemon = (props) => {
  const { name, url } = props;
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((err) => console.log(err));
  }, []);
  //console.log(props);
  const { id, sprites } = !!pokemon && pokemon;

  const { front_default } = !!sprites && sprites;

  return (
    <div className="col-6 col-md-4">
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <img src={front_default} alt="" />
          <p className="card-text"> {url} </p>
          <Link to={`/pokemon/${id}`} className="btn btn-primary">
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

//export default Pokemon;
