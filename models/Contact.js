import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    dateOfBirth: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        default: ''
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    education: [
        {
            name: {
                type: String,
                unique: true,
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
                trim: true
            }
        }
    ],
    occupation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Occupation',
        required: true
    },
    company: [
        {
            name: {
                type: String,
                unique: true,
                trim: true
            },
            joiningDate: {
                type: String,
                trim: true
            },
            post: {
                type: String,
                trim: true
            },
            location: {
                type: String,
                trim: true
            }
        }
    ],
    relation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Relation',
        required: true
    },
    socialMedia: [
        {
            type: String,
            trim: true
        }
    ]
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
