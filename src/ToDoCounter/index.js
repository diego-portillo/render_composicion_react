import React from "react";
import './ToDoCounter.css';


function ToDoCounter({totalTodos, completedTodos, loading}){
    return(
        <h2 
            className={`ToDoCounter ${!!loading && "ToDoCounter--loading"}`}
        >
            Has completado {completedTodos} de {totalTodos} ToDos
        </h2>
    );
}

export { ToDoCounter };