import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        trim: true
    },
    dateOfBirth: {
        type: String,
        trim: true
    },
    profilePic: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        trim: true
    },
    contact: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contact'
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
        ref: 'Occupation'
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
    socialMedia: [
        {
            type: String,
            trim: true
        }
    ]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
