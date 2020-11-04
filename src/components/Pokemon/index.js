import React from 'react';

export const Pokemon = ( props )=>{
    console.log(props);
    return(
        <div className="col-6 col-md-4">
            <div class="card mt-4" >
                <div class="card-body">
                    <h5 class="card-title">{props.nombre}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">{props.nivelPoder}</a>
                </div>
            </div>
        </div>
    )
}

//export default Pokemon;

