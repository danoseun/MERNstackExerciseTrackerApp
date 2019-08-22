import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: { type: String, rquired: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true }
},{
    timestamps: true,
});

export const Exercise = mongoose.model('Exercise', exerciseSchema)