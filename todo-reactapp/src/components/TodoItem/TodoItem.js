import React, { useState }from 'react';
import { useNavigate } from "react-router-dom";
import "./TodoItem.scss"

const TodoItem = (props) =>{
    const [contentClass, setContentClass] = useState("content-hidden");
    let navigate = useNavigate();
    const toggleTodo = ()=>{
        let done=false;
        if(props.todo.done==false){
            done=true;
        }
        let newTodo={
            "title":props.todo.title,
            "description":props.todo.description,
            "dueTime":props.todo.dueTime,
            "dueDate":props.todo.dueDate,
            "done":done,
        }
        props.updateTodo(props.todo._id,newTodo)
    }
    const updateTodo=()=>{
        props.recordToUpdate(props.todo._id);
        navigate("/update");
    }
    const toggleView=()=>{
        if(contentClass==="content-hidden"){
            setContentClass("content-show")
        }
        else{
            setContentClass("content-hidden")
        }
    }
    
    return(    
        <div className="todo-list">
            <div className="todo-block">
                <button className="collapsible" onClick={toggleView}>{props.todo.title}</button>
                <button className={contentClass}>{props.todo.description} To be done by: {props.todo.dueDate} {props.todo.dueTime}</button>
            </div>
            <button className="toggle-button" onClick={toggleTodo}>{props.updateText}</button>
            <button className="toggle-button" onClick={updateTodo}>Update</button>
            
        </div>
    );
}

export default TodoItem;