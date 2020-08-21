import React, { useReducer } from "react";
import { ADD_TODO, REMOVE_TODO, CLEAR_ALL } from "../types";

import todoContext from "./todoContext";
import todoReducer from "./todoReducer";

const TodoState = props => {

    const initialState = {
        todos: [],
        alert: null
    }

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = (todo) => {
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
    }

    const removeTodo = (id) => {
        dispatch({
            type: REMOVE_TODO,
            payload: id
        })
    }

    const clearAll = () => {
        dispatch({
            type: CLEAR_ALL
        })
    }

    return (<todoContext.Provider value={{ todos: state.todos, addTodo, removeTodo, clearAll }}>{props.children}</todoContext.Provider>)

}

export default TodoState;