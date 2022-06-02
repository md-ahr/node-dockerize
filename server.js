import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

export const app = express();

const PORT = process.env.PORT || 5000;

export function appInit() {
    try {
        app.listen(PORT, () => {
            console.log(chalk.cyan(`The server is running on port: ${PORT}`));
        });
    } catch (error) {
        if (error instanceof Error) {
            console.error(chalk.red(`Error occured: ${error.message}`));
        }
    }
}
