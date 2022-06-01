import { Schema, model } from 'mongoose';

const educationSchema = new Schema({
    name: {
        type: String,
        required: true,
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
        type: Schema.Types.ObjectId,
        ref: 'Contact'
    },
    education: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Education'
        }
    ],
    occupation: [
        type: Schema.Types.ObjectId,
        ref: 'Occupation'
    ],
    company: {
        type: String,
        trim: true
    },
    socialMedia: [
        type: Schema.Types.ObjectId,
        ref: 'SocialMedia'
    ]
}, { timestamps: true });

const Education = model('Education', educationSchema);

export default Education;
