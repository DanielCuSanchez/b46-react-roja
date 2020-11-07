import React, { useState } from "react";

const setToken = (token) => {
  //Actualizar el estado GLOBAL de la APP
};

export const Hooks = () => {
  const [formState, setFormState] = useState({
    usuario: "",
    password: "",
  });

  const { usuario, password } = formState;

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
      //  propiedad : valor
    });
  };
  console.log(formState);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const URL_BACKEND = "";
    // fetch(URL_BACKEND, { method: "POST", formState })
    //   .then((token) => {
    //     setToken(token);
    //   })
    //   .catch((e) => console.log(e));
    //console.log(formState, "LISTO PARA ENVIAR AL BACKEND ");
  };

  return (
    <div className="container text-center my-4">
      <h2>Hooks</h2>
      <div className="row justify-content-center">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <h4>Form</h4>
            <input
              className="form-control"
              type="text"
              placeholder="Usuario"
              name="usuario"
              onChange={handleInputChange}
              value={usuario}
            />
            <input
              className="form-control mt-2"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-primary btn-block mt-2">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
