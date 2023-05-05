import React from "react";
import './ToDoCounter.css';


function ToDoCounter({totalTodos, completedTodos}){
    return(
        <h2 className="ToDoCounter">Has completado {completedTodos} de {totalTodos} ToDos</h2>
    );
}

export { ToDoCounter };