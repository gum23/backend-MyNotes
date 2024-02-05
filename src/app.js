import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config.js';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import {options} from './swaggerOpotions.js';

const specs = swaggerJSDoc(options);

import tasksRoutes from './routes/task.routes.js'

export const app = express();

//Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(tasksRoutes);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

export const PORT = config.PORT;