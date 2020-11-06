import React from "react";
import { DetallePokemon } from "../components/DetallePokemon";

export const VistaPokemonDetalle = () => {
  return (
    <div className="container my-5 bg-dark py-5 text-light">
      <div className="row text-center justify-content-center">
        <h2>Detalle de Pokemon</h2>
      </div>
      <div className="row justify-content-center">
        <DetallePokemon />
      </div>
    </div>
  );
};
