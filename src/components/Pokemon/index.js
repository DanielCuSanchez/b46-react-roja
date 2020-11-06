import React from "react";
import { Link } from "react-router-dom";

export const Pokemon = (props) => {
  const { name, url } = props;
  //console.log(props);
  return (
    <div className="col-6 col-md-4">
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"> {url} </p>
          <Link to={`/pokemon/${name}`} className="btn btn-primary">
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

//export default Pokemon;
