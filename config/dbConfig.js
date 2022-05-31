import mongoose from 'mongoose';
import chalk from 'chalk';

async function connectDB() {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI);
        console.log(chalk.magenta(`Database connected successfully on host: mongodb://${db.connection.host}:${db.connection.port}`));
    } catch (error) {
        console.log(chalk.red(`Database connection error: ${error.message}`));
    }
}

export default connectDB;
