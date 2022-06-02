import mongoose from 'mongoose';

const relationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, { timestamps: true });

const Relation = mongoose.model('Relation', relationSchema);

export default Relation;
