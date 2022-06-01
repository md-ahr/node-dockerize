import { Schema, model } from 'mongoose';

const occupationSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, { timestamps: true });

const Occupation = model('Occupation', occupationSchema);

export default Occupation;
