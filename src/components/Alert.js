import React, { useContext } from 'react';
import alertContext from "../context/alert/alertContext";

const Alert = () => {

    const alertCont = useContext(alertContext);
    const { alert } = alertCont;

    return (
        alert !== null && (
            <div className="alert alert-danger  " role="alert">
                {alert}
            </div>
        )
    );
}

export default Alert;
