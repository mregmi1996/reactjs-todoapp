import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import routes from './routes/index.js';
import cors from 'cors';
import models from './models/index.js';

const app=express();

mongoose.connect('mongodb://localhost:27017/todosdb');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(cors());

routes(app);

export default app;



