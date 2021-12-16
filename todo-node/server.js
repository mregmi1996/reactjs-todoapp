import app from './api/app.js';
const port=3001;
app.listen(port,()=>{
        console.log(`Todo app listening at http://localhost:${port}`)
    })