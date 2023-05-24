const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Study4Schema = new Schema({
    study: {
        type: Number,
        required: true,
    },
    trial_number: {
        type: Number,
        required: true,
    },
    signal_id: {
        type: String,
        required: true,
    },
    press_start_time: {
        type: String,
        required: true,
    },
    press_end_time: {
        type: String,
        required: true,
    },
    actual_start_time: {
        type: String,
        required: true,
    },
    actual_end_time: {
        type: String,
        required: true,
    },
});

module.exports = Study4 = mongoose.model('study4', Study4Schema);