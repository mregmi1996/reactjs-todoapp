import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
    const updateTodo = (id, newJson) =>{
        props.updateTodo(id, newJson)
    }
    const recordToUpdate = (id) =>{
        props.recordToUpdate(id)
    }

    return (
            <div id="to-do-view">
                <h2>
                    My To-dos:
                    </h2>
                    <div className="list-div" id="list-to-do">
                    {props.todos.map(item => {
                        if(item.done==false)
                        {return (<TodoItem updateText="Mark as Done" updateTodo={updateTodo} recordToUpdate={recordToUpdate} todo={item} />)}
                    })}
                </div>
                <h2>
                    Done:
                    </h2>
                    <div className="list-div" id="list-to-do">
                    {props.todos.map(item => {
                        if(item.done!==false)
                        {return (<TodoItem updateText={"Mark as To Do"}recordToUpdate={recordToUpdate} updateTodo={updateTodo} todo={item} />)}
                    })}
               </div>
               <br/><br/><br/>
               <button className="toggle-button" onClick={props.toggleAddNew}>{(props.addFormHidden)==true?"Add New":"Done"}</button>
               
            </div>
    );
}

export default TodoList;