import express, { json } from "express";
import morgan from 'morgan';

//imports routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

//initialization
const app = express();

//midlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/projects', projectRoutes);
app.use('/api/task', taskRoutes);

export default app;