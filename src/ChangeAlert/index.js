import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert(show, toggleShow){
    if (show){
        return <p>Hubo cambioooos</p>
    }
}
const ChangeAlertWithStorageListener = withStorageAlert(ChangeAlert)

export {ChangeAlertWithStorageListener}