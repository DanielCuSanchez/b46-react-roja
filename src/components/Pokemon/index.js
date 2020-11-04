import React from 'react';


export const Pokemon = ( props )=>{
    const { name, url} = props;
    //console.log(props);
    return(
        <div className="col-6 col-md-4">
            <div className="card mt-4" >
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <p className="card-text"> { url }   </p>
                    <a href={url} className="btn btn-primary"> Mas info</a>
                </div>
            </div>
        </div>
    )
}

//export default Pokemon;

