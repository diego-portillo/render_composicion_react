import React from "react";
import './ToDoSearcher.css';

function ToDoSearcher({searchValue, setSearchValue, loading}){
    const onSearchValueChange = (event)=>{
        setSearchValue(event.target.value)
    }
    return(
        <input 
        className="TodoSearch" 
        placeholder="Cebolla"
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
        />
        );
}

export { ToDoSearcher };