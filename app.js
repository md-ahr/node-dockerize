import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chalk from 'chalk';
import connectDB from './config/dbConfig.js';
import educationRouter from './routes/educationRouter.js';
import contactRouter from './routes/contactRouter.js';

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

const middlewares = [
    cors(),
    express.json(),
    express.urlencoded({ extended: false })
];

app.use(middlewares);

app.use(`${process.env.API_PREFIX}/education`, educationRouter);
app.use(`${process.env.API_PREFIX}/`, contactRouter);

app.listen(PORT, () => {
    console.log(chalk.cyan(`The server is running on port: ${PORT}`));
});
