import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    passingYear: {
        type: Number,
        trim: true
    },
    grade: {
        type: Number,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

const Education = mongoose.model('Education', educationSchema);

export default Education;
