import React, { useState, useEffect } from "react";
import { Pokemon } from "../Pokemon";

export const ListaPokemones = () => {
  //const data = [ {id: 1, nombre: 'Pokemon 1', nivelPoder: 10 }, {id: 2, nombre: 'Pokemon 2', nivelPoder: 8}, {id: 3, nombre: 'Pokemon 3', nivelPoder: 6},{id: 4, nombre: 'Pokemon 4', nivelPoder: 5}];

  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;
        //console.log(results)
        setPokemones(results);
      })
      .catch((e) => console.log(e));
  }, []);
  //console.log(pokemones)

  // setTimeout(()=>{
  //     setPokemones([1,2,3,4,5,6])
  // },2000)

  return (
    <div className="container">
      <h1>Lista de pokemones</h1>

      <div className="row">
        {pokemones.map((pokemon, index) => (
          <Pokemon key={index} {...pokemon} />
        ))}
      </div>
    </div>
  );
};
