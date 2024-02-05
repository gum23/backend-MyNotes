import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    title: {
        type: String,
        trim: true
    },
    body: {
        type: String,
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model("tasks", taskSchema);