import React from 'react';
import './App.css';
import Form from "./components/Form";
import List from "./components/List";
import TodoState from './context/todo/TodoState';
import AlertState from './context/alert/AlertState';

function App() {
  return (
    <TodoState>
      <AlertState>
        <div className="container mt-5">
          <Form />
          <List />
        </div>
      </AlertState>
    </TodoState>
  );
}

export default App;
