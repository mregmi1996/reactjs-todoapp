import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NewTodo from './components/NewTodo/NewTodo';
import TodoList from './components/TodoList/TodoList';
import UpdateTodo from './components/UpdateItem/UpdateItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});
  const [pageLoad, setPageLoad] = useState(false);
  const [formHidden, setFormHidden] = useState(true);

  const fetchAllTodos = () => {
    fetch("http://localhost:3001/todo").then(res=>res.json()).then((result)=>{
      setTodos(result)
    })
  }
  if(!pageLoad){
    setPageLoad(true);
    fetchAllTodos();
  }

  const toggleForm=()=>{
    if(formHidden==true){
      setFormHidden(false)
    }
    else{
      setFormHidden(true)
    }
  }

  const addNewTodo = (newTodo) =>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
  };
    fetch("http://localhost:3001/todo", requestOptions).then(fetchAllTodos);
  }

  // const markAsDone = (id) =>{
  //   fetch("http://localhost:3001/todo/"+id,{ method: 'DELETE' }).then(fetchAllTodos)
  // }

  const fetchSpecificTodo = (id) => {
    fetch("http://localhost:3001/todo/"+id).then(res=>res.json()).then((result)=>{
      setTodo(result)
    })
  }

  const updateTodo = (id, newTodoJson) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodoJson)
  };
    fetch("http://localhost:3001/todo/"+id, requestOptions).then(fetchAllTodos)

  }

  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route path="/" element={
              <div>
              <Header/>
              <TodoList addFormHidden={formHidden} toggleAddNew={toggleForm} recordToUpdate={fetchSpecificTodo} updateTodo={updateTodo} todos={todos} />
              <NewTodo formHidden={formHidden} addNew={addNewTodo} todos={todos} />
              </div>
            }/>
            <Route path="/update" element={
              <UpdateTodo updateTodo={updateTodo} todoItem={todo}/>
            }/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
