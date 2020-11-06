import React from "react";
import { DetallePokemon } from "../components/DetallePokemon";

export const VistaPokemonDetalle = (props) => {
  //console.log(props);
  const { match } = props;
  const { id } = match.params;

  return (
    <div className="container my-5 bg-dark py-5 text-light">
      <div className="row text-center justify-content-center">
        <h2>Detalle de Pokemon</h2>
      </div>
      <div className="row justify-content-center">
        <DetallePokemon id={1} />
      </div>
    </div>
  );
};
