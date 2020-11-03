import React from 'react';
import { Pokemon } from '../Pokemon';

export const ListaPokemones = ()=>{
    const pokemones = [ {id: 1, nombre: 'Pokemon 1'}, {id: 2, nombre: 'Pokemon 2'}, {id: 3, nombre: 'Pokemon 3'},{id: 4, nombre: 'Pokemon 4'}];
    return(
        <>
            <h1>Lista de pokemones</h1>
            {
                pokemones.map(pokemon => <Pokemon key={pokemon.id} nombre={pokemon.nombre} />)
            }
        </>
    )
}