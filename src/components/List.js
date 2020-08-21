import React, { useContext } from 'react';
import todoContext from "../context/todo/todoContext";
import ListItem from "./ListItem";

const List = () => {

    const todoCont = useContext(todoContext);
    const { todos, clearAll } = todoCont;

    return (
        <div className="row justify-content-center mt-3">
            <div className="col-md-6">
                {todos.length > 0 ? (
                    <button className="btn btn-danger mb-2" onClick={e => clearAll()}>Clear All</button>
                ) : ''}
                {todos.map(todo => (
                    <ListItem todo={todo} key={todo.id} />
                ))}
            </div>
        </div>
    );
}

export default List;
