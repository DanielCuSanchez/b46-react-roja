import React, { useEffect, useState } from "react";
import axios from "axios";

export const Axios = () => {
  const estadoInicial = {
    name: "",
    last_name: "",
    nacionalidad: "",
    biography: "",
    gender: "",
    age: "",
  };
  const [formState, setFormState] = useState({ ...estadoInicial });
  const [envioDeFormulario, setEnvioDeFormulario] = useState(false);
  const [autores, setAutores] = useState({});

  useEffect(() => {
    axios
      .get("https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/")
      .then((resp) => {
        console.log(resp.data);
        setAutores(resp.data);
      })
      .catch((e) => console.log(e));
  }, [envioDeFormulario]);

  //Estado actual
  console.log("😀", formState);

  const handleOnChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
    //console.log(formState);
    // console.log(event.target.name);
    // console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const URL_BASE =
      "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/";

    axios
      .post(URL_BASE, formState)
      .then((resp) => {
        console.log(resp.data);
        setFormState({ ...estadoInicial });
        setEnvioDeFormulario(true);
        //console.log(formState);
      })
      .catch((err) => console.log(err));

    //console.log("Estoy fuera!!!");
  };

  return (
    <div className="container my-4 text-center">
      <h1>Axios</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Ingresa nombre"
          onChange={handleOnChange}
          value={formState.name}
        />
        <input
          type="text"
          className="form-control"
          name="last_name"
          placeholder="Ingresa apellido"
          onChange={handleOnChange}
          value={formState.last_name}
        />
        <input
          type="text"
          className="form-control"
          name="nacionalidad"
          placeholder="Ingresa nacionalidad"
          onChange={handleOnChange}
          value={formState.nacionalidad}
        />
        <input
          type="text"
          className="form-control"
          name="biography"
          placeholder="Ingresa una descripcion"
          onChange={handleOnChange}
          value={formState.biography}
        />
        <input
          type="text"
          className="form-control"
          name="gender"
          placeholder="Ingresa genero"
          onChange={handleOnChange}
          value={formState.gender}
        />
        <input
          type="text"
          className="form-control"
          name="age"
          placeholder="Ingresa edad"
          onChange={handleOnChange}
          value={formState.age}
        />
        <button type="submit" className="btn btn-primary btn-block">
          Enviar post
        </button>
      </form>
      {envioDeFormulario && (
        <div>
          <p className="alert alert-success"> Se envio la informacion </p>
          {JSON.stringify(autores)}
        </div>
      )}
    </div>
  );
};
