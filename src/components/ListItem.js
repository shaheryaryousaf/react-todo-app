import React, { useContext, useState, Fragment } from 'react';
import todoContext from "../context/todo/todoContext";
import Moment from 'react-moment';

const ListItem = ({ todo }) => {

    const todoCont = useContext(todoContext);
    const { removeTodo } = todoCont;

    const [done, setDone] = useState(false)

    const doneTask = {
        backgroundColor: '#f7f7f7'
    }

    const notDone = {
        backgroundColor: '#ffffff'
    }

    return (
        <div>
            <div className="card" style={done ? doneTask : notDone}>
                <div className="card-body">

                    <div className="card-title mb-0">
                        <span className="task-title">{todo.title}</span>
                        <span className="task-time"><small><Moment format="HH:mm:ss a">{todo.date}</Moment></small></span>
                    </div>

                    <p className="card-text">{todo.task}</p>

                    {done ? (<button className="btn btn-info" onClick={e => setDone(!done)}>Undo</button>) :
                        (<Fragment>
                            <button className="btn btn-success" onClick={e => setDone(!done)}>Complete</button> &nbsp;
                            <button className="btn btn-danger" onClick={e => removeTodo(todo.id)}>Remove</button>
                        </Fragment>)
                    }

                </div>
            </div>
        </div>
    );
}

export default ListItem;
