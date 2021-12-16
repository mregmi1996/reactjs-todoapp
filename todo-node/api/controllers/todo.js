import { request, response } from 'express';
import * as todoService from "../services/todo.js";

/**
 * Error handler for promise
 * 
 * @param {*} message Message to be returned as the error statement
 * @param {*} response The response object
 */
const errorhandler = (message, response) => {
    response.status(500);
    response.json({ error:message });
}

/**
 * Sucess scenario handler for promise
 * 
 * @param {*} data Response body to be sent with the success response 
 * @param {*} response The response object
 */
const setSuccessResponse = (data, response) => {
    response.status(200);
    response.json(data);
}

/**
 * Controller for search elements
 * 
 * @param {*} request The request object
 * @param {*} response The response object
 */
export const index = async(request, response)=>{
    try{
        const todo=await todoService.search();
        setSuccessResponse(todo, response);
    }
    catch(e){
        errorhandler(e.message, response);
    }
};

/**
 * Create new todo element
 * 
 * @param {*} request The request object
 * @param {*} response The response object
 */
export const save = async(request, response)=>{
    try{
        const todoItem={...request.body};
        const todo=await todoService.create(todoItem);
        setSuccessResponse(todo, response)
    }
    catch(e){
        errorhandler(e.message,response);
    }
};

/**
 * Get a response by object
 * 
 * @param {*} request The request object
 * @param {*} response The response object
 */
export const get = async(request, response)=>{
    try{
        const id=request.params.id;
        const todo=await todoService.get(id);
        setSuccessResponse(todo,response);
    }
    catch(e){
        errorhandler(e.message,response);
    }
}

/**
 * Update a record
 * 
 * @param {*} request The request object
 * @param {*} response The response object
 */
export const update = async(request, response)=>{
    try{
        const id=request.params.id;
        const todo={...request.body, id};
        await todoService.update(todo);
        const updatedTodo= await todoService.get(id)
        setSuccessResponse(updatedTodo,response)
    }
    catch(e){
        errorhandler(e.message,response);
    }
}


/**
 * Delete a record with the given id
 * 
 * @param {*} request The request object
 * @param {*} response The response object
 */
export const remove = async(request,response)=>{
    try{
        const id=request.params.id;
        const todo=await todoService.remove(id);
        setSuccessResponse({message:`todo item with id:${id} removed successfully`},response);
    }
    catch(e){
        errorhandler(e.message,response);
    }
}