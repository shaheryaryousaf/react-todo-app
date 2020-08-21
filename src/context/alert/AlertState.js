import React, { useReducer } from "react";
import { SET_ALERT, REMOVE_ALERT } from "../types";

import alertContext from "./alertContext";
import alertReducer from "./alertReducer";

const AlertState = props => {

    const initialState = {
        msg: null
    };

    const [state, dispatch] = useReducer(alertReducer, initialState);

    const setAlert = msg => {
        dispatch({
            type: SET_ALERT,
            payload: msg
        })

        setTimeout(() => dispatch({
            type: REMOVE_ALERT
        }), 5000)
    }

    return (<alertContext.Provider value={{ alert: state.msg, setAlert }}>{props.children}</alertContext.Provider>)

}

export default AlertState;