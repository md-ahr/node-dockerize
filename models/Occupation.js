import mongoose from 'mongoose';

const occupationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, { timestamps: true });

const Occupation = mongoose.model('Occupation', occupationSchema);

export default Occupation;
