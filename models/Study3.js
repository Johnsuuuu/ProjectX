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
    signal_id: {
        type: String,
        required: true,
    },
    choice_id: {
        type: String,
        required: true,
    },
    choice_signal: {
        type: String,
        required: true,
    },
    choices: {
        choice_1: {
            type: String,
            required: true,
        },
        choice_2: {
            type: String,
            required: true,
        },
        choice_3: {
            type: String,
            required: true,
        },
        choice_4: {
            type: String,
            required: true,
        },
    },
});

module.exports = Study3 = mongoose.model('study3', Study3Schema);