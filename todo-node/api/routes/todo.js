import express from 'express';
import * as todoControllers from '../controllers/todo.js';

const router=express.Router();
router.route('/todo')
    .get(todoControllers.index)
    .post(todoControllers.save);

router.route('/todo/:id')
    .get(todoControllers.get)
    .put(todoControllers.update)
    .delete(todoControllers.remove);

export default router;

