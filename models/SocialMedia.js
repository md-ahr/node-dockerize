import { Schema, model } from 'mongoose';

const socialMediaSchema = new Schema({
    links: {
        type: String,
        trim: true
    }
}, { timestamps: true });

const SocialMedia = model('SocialMedia', socialMediaSchema);

export default SocialMedia;
