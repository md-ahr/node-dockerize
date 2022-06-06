import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import connectDB from './config/dbConfig.js';
import { errorHandler, notFoundError } from './middlewares/appErrorHandler.js';
import authRouter from './routes/authRouter.js';
import contactRouter from './routes/contactRouter.js';
import occupationRouter from './routes/occupationRouter.js';
import relationshipRouter from './routes/relationshipRouter.js';
import { app, appInit } from './server.js';

connectDB();

const middlewares = [
    cors(),
    helmet(),
    morgan('tiny'),
    express.json(),
    express.urlencoded({ extended: false }),
];

app.use(middlewares);

app.use(`${process.env.API_PREFIX}/auth`, authRouter);
app.use(`${process.env.API_PREFIX}/relations`, relationshipRouter);
app.use(`${process.env.API_PREFIX}/occupations`, occupationRouter);
app.use(`${process.env.API_PREFIX}/contacts`, contactRouter);

app.use(notFoundError);
app.use(errorHandler);

appInit();
