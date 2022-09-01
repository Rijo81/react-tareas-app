import React from 'react'
import Tarea from '../css/Tarea.css';
//React Icons componente instalabla....
//https://react-icons.github.io/react-icons/
import { AiOutlineCloseCircle } from "react-icons/ai";


const Tareas = ( { id, texto, completada, completarTarea, eliminarTarea }) => {
  return (
    <div className= { completada ? 'tarea-contenedor completada' : 'tarea-contenedor' }>
        <div 
        className='tarea-texto'
        onClick={ () => completarTarea(id) } >
            { texto }
        </div>
        <div 
            className='tarea-icono'
            onClick={ () => eliminarTarea(id) } >
                
            <AiOutlineCloseCircle className='tarea-icono'  />
        </div>
    </div>
  );
}

export default Tareas;