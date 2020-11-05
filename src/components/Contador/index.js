import React, { useState, useEffect } from 'react'

export const Contador = () => {

    useEffect(()=>{
        console.log('Hola soy el useEffect SIN DEPENDECIAS')
    })

    useEffect(()=>{
        console.log('Hola soy el useEffect con el ARREGLO VACIO')
    },[])

    const [contador, setContador ] = useState(0);

    useEffect(()=>{
        console.log('Hola soy el useEffect con DEPENCIA CONTADOR ')
    },[contador]);

    
    const handleIncrement = ()=>{
        setContador( contador + 1);
    }

    const handleDecrement = ()=>{

        if( contador > 0){
            setContador(contador - 1);
        }
        
    }

    const handleReset = ()=>{
        setContador(0);
    }

    const handleDrag = ( event )=>{
        console.log(event)
    }

    return (
        <div className="container text-center">
            <p onDrag={handleDrag} className="display-3">Contador = {contador}</p>
            <div className="row justify-content-center">
                <button onClick={handleIncrement} className="btn btn-primary">+1</button>  
                <button onClick={handleDecrement} className="btn btn-danger">-1</button> 
                <button onClick={handleReset} className="btn btn-warning">Reset</button> 
            </div>            
        </div>
    )
}
