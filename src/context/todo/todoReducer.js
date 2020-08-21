import { ADD_TODO, REMOVE_TODO, CLEAR_ALL } from "../types";

export default function (state, action) {

    const { type, payload } = action;

    switch (type) {

        case ADD_TODO:
            return {
                ...state,
                todos: [payload, ...state.todos]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            }
        case CLEAR_ALL:
            return {
                ...state,
                todos: []
            }
        default:
            return state
    }

} 