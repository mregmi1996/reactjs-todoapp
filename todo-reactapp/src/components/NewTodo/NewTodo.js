import React, {useRef} from "react";
import "./NewTodo.css"

const NewTodo = (props) => {
    const newTodoTitle=useRef(null);
    const newTodoDetails = useRef(null);
    const newTodoDueDate = useRef(null);
    const newTodoDueTime = useRef(null);

    const submitToDoHandler = (e) =>{
        e.preventDefault();
        let newTodo={
            "title":newTodoTitle.current.value,
            "description":newTodoDetails.current.value,
            "dueTime":newTodoDueTime.current.value,
            "dueDate":newTodoDueDate.current.value,
            "done":"true"
        }
        props.addNew(newTodo);
    }
    return (
        <form className={(props.formHidden)==true?"new-to-do-form-hidden":"new-to-do-form-show"} id="new-to-do-form">
            <h2>Add new to-do item:</h2>
            <input className="new-input" ref={newTodoTitle} id="to-do-add-title" placeholder="Enter Title" /><br/>
            <textarea rows="4" cols="50" ref={newTodoDetails} id="to-do-add-details" className="new-input" placeholder="Enter Description"></textarea><br/>
            <input className="new-input" ref={newTodoDueTime} type="time" id="to-do-add-time" name="appt" min="00:00" max="23:59" /><br/>
            <input className="new-input" ref={newTodoDueDate} type="date" id="to-do-date" name="to-do-date" value="2018-07-22" min="2018-01-01" max="2018-12-31" /><br/>
            <button onClick={submitToDoHandler} id="to-do-add-new" className="button-1" type="submit">Submit</button>
        </form>
    );
}

export default NewTodo;