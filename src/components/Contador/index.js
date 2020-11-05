import React, { useState } from 'react'

export const Contador = () => {

    const [contador, setContador ] = useState({
        quatity: 0,
        position: 'initial'
    });
    const { quatity, position } = contador;

    const handleIncrement = ()=>{
        setContador( {
            ...contador,
            quatity: quatity + 1
        });
    }

    const handleDecrement = ()=>{

        if( quatity > 0){
            setContador({
                ...contador,
                quatity: quatity - 1
            });
        }
        
    }

    const handleReset = ()=>{
        setContador({
            ...contador,
            quatity: 0
        });
    }

    const handleDrag = ( event, nombre )=>{
        console.log(event.dataTransfer)
        event.dataTransfer.setData("text/plain",nombre)
        
    }

    const handleOnDragOver = (event) =>{
        event.preventDefault();
    } 
    const handleOnDrop = (event, type)=>{
        console.log(event.dataTransfer.getData("text"))
        setContador({
            ...contador,
            position: type
        })
        event.dataTransfer.getData("text")
    }

    return (
        <div className="container">
            <div className="container text-center" style={{height:'150px'}} onDrop={(e)=>handleOnDrop(e,'initial')} onDragOver={handleOnDragOver}>
                Initial position
                {
                    position  === 'initial' && SeeCount(quatity, handleDrag)
                }    
            
            </div> 
            
            <div className="row justify-content-center">
                <button onClick={handleIncrement} className="btn btn-primary">+1</button>  
                <button onClick={handleDecrement} className="btn btn-danger">-1</button> 
                <button onClick={handleReset} className="btn btn-warning">Reset</button> 
            </div>     
            <div className="container bg-primary text-light text-center mt-5" style={{height:'150px'}} onDrop={(e)=>handleOnDrop(e,'newArea')} onDragOver={handleOnDragOver}>
                Drop here
                {
                    position  === 'newArea' && SeeCount(quatity, handleDrag)   
                }    
            
            </div>       
        </div>
    )
}

const SeeCount = (contador, handleDrag) =>{
    return (<h2 className="display-2" draggable onDragStart={(e)=>handleDrag(e,'titulo')}>Counter = {contador}</h2>
    )
}