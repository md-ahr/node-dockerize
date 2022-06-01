import { Schema, model } from 'mongoose';

const relationSchema = new Schema({
    relationship: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, { timestamps: true });

const Relation = model('Relation', relationSchema);

export default Relation;
