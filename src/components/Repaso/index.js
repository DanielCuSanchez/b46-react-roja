import React, { useState, useEffect } from "react";

export const Repaso = () => {
  const [estadoInput, setEstadoInput] = useState("Hola mundo");

  //0 = estado
  //1 = setEstado
  //const { nombre, edad } = objeto
  return (
    <div className="container">
      <div className="row">
        <h3>Repaso</h3>
        <input type="text" className="form-control" value={estadoInput} />
      </div>
    </div>
  );
};

// function useState(estadoInicial) {
//   let estado = estadoInicial;
//   function setEstado(parametro) {
//     estado = parametro;
//   }
//   return [estado, setEstado]; //[0, 1]
// }

// const objeto = {
//     nombre: '',
//     edad: ''
// }
