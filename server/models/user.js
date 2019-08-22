import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true,
});

export const User = mmongoose.model('User', userSchema);