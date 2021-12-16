import Todo from "../models/todo.js";

/**
 * Search the MongoDB
 * 
 * @param {Object} params search for the given params
 * @returns promise
 */
export const search=(params={})=>{
    const promise = Todo.find(params).exec();
    return promise;
}


/**
 * Insert new record to MongoDB
 * 
 * @param {Object} todoItem New object to be inserted into the MongoDB
 * @returns promise
 */
export const create=(todoItem)=>{
    const newTodo = new Todo(todoItem);
    return newTodo.save();
}


/**
 * Search the mongodb using the id provided
 * 
 * @param {String} id The id of the element to be returned
 * @returns promise
 */
export const get=(id)=>{
    const promise = Todo.findById(id);
    return promise;
}

/**
 * Update the record with the given Object using the id from the Object JSON
 * 
 * @param {Object} todo The todo JSON object to be updated with
 * @returns promise
 */
export const update=(todo)=>{
    todo._id=todo.id;
    todo.lastModifiedDate=new Date().toISOString();
    const promise = Todo.findByIdAndUpdate(todo.id, todo).exec();
    return promise;
}

/**
 * Remove the item with the given id
 * 
 * @param {String} id 
 */
export const remove=(id)=>{
    const promise=Todo.findByIdAndRemove(id).exec();
}