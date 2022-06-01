import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import connectDB from './config/dbConfig.js';
import { app, appInit } from './server.js';
import educationRouter from './routes/educationRouter.js';

connectDB();

const middlewares = [
    cors(),
    helmet(),
    morgan('tiny'),
    express.json(),
    express.urlencoded({ extended: false }),
];

app.use(middlewares);

app.use(`${process.env.API_PREFIX}/educations`, educationRouter);

app.use((req, res, next) => {
    next('Requested url was not found!');
});

app.use((err, req, res, next) => {
    if (res.headersSent) {
        next('Header request already sent!');
    } else {
        if (err.message) {
            res.status(500).send(err.message);
        } else {
            res.status(500).send('Internal server error!');
        }
    }
});

appInit();
