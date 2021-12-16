import React,{useRef} from "react";
import { useNavigate } from "react-router-dom";

const UpdateTodo = (props) =>{
    const newTodoTitle = useRef(null);
    const newTodoDetails = useRef(null);
    const newTodoDueDate = useRef(null);
    const newTodoDueTime = useRef(null);
    let navigate = useNavigate();

    const submitToDoHandler = (e) =>{
        e.preventDefault();
        let newTodo={
            "title":newTodoTitle.current.value,
            "description":newTodoDetails.current.value,
            "dueTime":newTodoDueTime.current.value,
            "dueDate":newTodoDueDate.current.value,
            "done":"true",
        }
        console.log(props.todoItem._id)
        props.updateTodo(props.todoItem._id,newTodo);
        alert("Updated!")
        navigate("/")
    }
    return(
        <form className="new-to-do-form" id="new-to-do-form">
            <h2>Update to-do item:</h2>
            <input className="new-input" ref={newTodoTitle} id="to-do-add-title" placeholder="Enter Title" type="text" defaultValue={props.todoItem.title}/><br/>
            <textarea rows="4" cols="50" ref={newTodoDetails} id="to-do-add-details" className="new-input" placeholder="Enter Description" defaultValue={props.todoItem.description}></textarea><br/>
            <input className="new-input" ref={newTodoDueTime} type="time" id="to-do-add-time" name="appt" value={props.todoItem.time} min="00:00" max="23:59" /><br/>
            <input className="new-input" ref={newTodoDueDate} type="date" id="to-do-date" name="to-do-date" defaultValue={props.todoItem.dueDate} min="2018-01-01" max="2018-12-31" /><br/>
            <button onClick={submitToDoHandler} id="to-do-add-new" className="button-1" type="submit">Update</button>
        </form>
    )
}

export default UpdateTodo;