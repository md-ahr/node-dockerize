import { model, Schema } from 'mongoose';

const contactSchema = new Schema({
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
        type: Schema.Types.ObjectId,
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
    occupation: [
        type: Schema.Types.ObjectId,
        ref: 'Occupation'
    ],
    company: {
        type: String,
        trim: true
    },
    relation: [
        type: Schema.Types.ObjectId,
        ref: 'Relation'
    ],
    socialMedia: [
        {
            type: String,
            trim: true
        }
    ]
}, { timestamps: true });

const Contact = model('Contact', contactSchema);

export default Contact;
