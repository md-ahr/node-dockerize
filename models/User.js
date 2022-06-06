import bcrypt from 'bcryptjs';
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

userSchema.pre('save', function (next) {
    const _this = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (saltError, salt) {
            if (saltError) {
                return next(saltError);
            } else {
                bcrypt.hash(_this.password, salt, function(hashError, hash) {
                    if (hashError) {
                        return next(hashError);
                    }
                    _this.password = hash;
                    next();
                });
            }
        });
    } else {
        return next();
    }
})

const User = mongoose.model('User', userSchema);

export default User;
