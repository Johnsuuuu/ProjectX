const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Study3Schema = new Schema({
    study: {
        type: Number,
        required: true,
    },
    trial_number: {
        type: Number,
        required: true,
    },
    signal1_id: {
        type: String,
        required: true,
    },
    signal2_id: {
        type: String,
        required: true,
    },
    choice: {
        type: String,
        required: true,
    },
    play_button_1_click_number: {
        type: Number,
        required: true,
    },
    play_button_2_click_number: {
        type: Number,
        required: true,
    },
});

module.exports = Study3 = mongoose.model('study3', Study3Schema);