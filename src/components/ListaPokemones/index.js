import React, { useState, useEffect } from 'react';
import { Pokemon } from '../Pokemon';

export const ListaPokemones = ()=>{
    const data = [ {id: 1, nombre: 'Pokemon 1', nivelPoder: 10 }, {id: 2, nombre: 'Pokemon 2', nivelPoder: 8}, {id: 3, nombre: 'Pokemon 3', nivelPoder: 6},{id: 4, nombre: 'Pokemon 4', nivelPoder: 5}];

    const [ pokemones, setPokemones] = useState(data);

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(resp =>  resp.json())
            .then( data => console.log(data.results))
    },[])
    //console.log(pokemones)

    // setTimeout(()=>{
    //     setPokemones([1,2,3,4,5,6])
    // },2000)
    
    return(
        <div className="container">
            <h1>Lista de pokemones</h1>
    
            <div className="row">
                {
                    pokemones.map(pokemon => <Pokemon key={pokemon.id} nombre={pokemon.nombre} nivelPoder={ pokemon.nivelPoder} />)
                }
            </div>
        </div>
    )
}