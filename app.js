import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import connectDB from './config/dbConfig.js';
import { app, appInit } from './server.js';
import relationshipRouter from './routes/relationshipRouter.js';
import { notFoundError, errorHandler } from './middlewares/appErrorHandler.js';

connectDB();

const middlewares = [
    cors(),
    helmet(),
    morgan('tiny'),
    express.json(),
    express.urlencoded({ extended: false }),
];

app.use(middlewares);

app.use(`${process.env.API_PREFIX}/relations`, relationshipRouter);

app.use(notFoundError);
app.use(errorHandler);

appInit();
