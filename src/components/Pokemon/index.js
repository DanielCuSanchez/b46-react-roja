import React from 'react';


export const Pokemon = ( props )=>{
    //console.log(props);
    return(
        <div className="col-6 col-md-4">
            <div className="card mt-4" >
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">{props.nivelPoder}</a>
                </div>
            </div>
        </div>
    )
}

//export default Pokemon;

