import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/dbConfig.js';
import { app, appInit } from './server.js';
import educationRouter from './routes/educationRouter.js';

connectDB();

const middlewares = [
    cors(),
    morgan('tiny'),
    helmet(),
    express.json(),
    express.urlencoded({ extended: false })
];

app.use(middlewares);

app.use(`${process.env.API_PREFIX}/educations`, educationRouter);

appInit();
