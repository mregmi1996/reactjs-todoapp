import Mongoose from "mongoose";

/**
 * Create new MongoDB model for Todo items
 */
const TodoSchema = new Mongoose.Schema({
    "title": {
        type: String,
        required: "Title is required."
    },
    "description": {
        type: String,
        required: "Description is required."
    },
    "dueDate": {
        type: Date,
        required: "Due date is required."
    },
    "dueTime": {
        type: String,
        required: "Time is required."
    },
    "done": {
        type: Boolean,
        required: "Done is a required field."
    },
    "createdDate": {
        type: Date,
        default: new Date().toLocaleString()
    },
    "lastModifiedDate": {
        type: Date,
        default: new Date().toLocaleString()
    }
},
    {
        versionKey: false
    });

const Todo = Mongoose.model('Todo', TodoSchema);
export default Todo;