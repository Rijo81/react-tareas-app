import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../css/ListaTareas.css';
import Tareas from "./Tareas";

function ListaTareas() {

    //HOOK
    const [ tareas, setTareas ] = useState([ ]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }   
        //console.log("Tarea agregada");
        //console.log(tarea);
    };

    const eliminarTarea = id =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    };

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    };

    return(
        <>
        <TareaFormulario onSubmit={ agregarTarea } />
        <div className="tarea-lista-contenedor">
            {
                tareas.map((tarea) =>
                    <Tareas 
                    key={ tarea.id }
                    id={ tarea.id }
                    texto={ tarea.texto} 
                    completada={ tarea.completada } 
                    completarTarea={ completarTarea }
                    eliminarTarea={ eliminarTarea } />
                )
            }
        </div>
        </>
    );
}

export default ListaTareas;