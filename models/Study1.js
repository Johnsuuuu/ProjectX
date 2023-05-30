const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Study1Schema = new Schema({
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
  valence: {
    type: Number,
    required: true,
  },
  arousal: {
    type: Number,
    required: true,
  },
  dominance: {
    type: Number,
    required: true,
  },
});

module.exports = Study1 = mongoose.model('study1', Study1Schema);
