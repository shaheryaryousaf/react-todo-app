import React, { useContext, useState } from 'react';
import todoContext from "../context/todo/todoContext";
import alertContext from "../context/alert/alertContext";
import Alert from "./Alert";

const Form = () => {

    const [title, setTitle] = useState('');
    const [task, setTask] = useState('');

    const todoCon = useContext(todoContext);
    const { addTodo } = todoCon;

    const alertCont = useContext(alertContext);

    const onSubmit = e => {
        e.preventDefault();

        if (title === "" || task === "") {
            alertCont.setAlert("Please All something")
        } else {
            const newTodo = {
                id: Math.floor(Math.random() * 100000000),
                title: title,
                task: task,
                date: new Date(),
                done: false
            }
            addTodo(newTodo);
            setTitle('');
            setTask('')
        }
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h4>TODO APP</h4>
                <hr />
                <Alert />
                <form onSubmit={e => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" name="title" id="title" className="form-control" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="task" className="form-label">Task</label>
                        <textarea name="task" id="task" className="form-control" placeholder="Task" rows="4" value={task} onChange={e => setTask(e.target.value)}></textarea>
                    </div>
                    <button className="btn btn-primary mb-0">ADD TODO</button>
                </form>
            </div>
        </div>
    );
}

export default Form;
