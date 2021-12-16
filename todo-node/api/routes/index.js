import todoRoutes from './todo.js';

export default(app)=>{
    app.use('/', todoRoutes)
}