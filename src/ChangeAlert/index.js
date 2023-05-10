import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css"

function ChangeAlert({sincronize}){
    const {show, toggleShow}=useStorageListener(sincronize)
    if (show){
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>HParece que cambiaste tus TODOs en otra pestaña.</p>
                    <p>Quieres sincronizarlos?</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={()=>toggleShow(false)}
                    >
                        Yes!
                    </button>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export {ChangeAlert}