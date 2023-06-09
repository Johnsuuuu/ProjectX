const express = require('express');
const router = express.Router();

// Study Model
const Study1 = require('../../models/Study1');

// @route   POST api/study
// @desc    Create An Study
// @access  Public
router.post('/submit', (req, res) => {
  const newStudy1 = new Study1({
    study: req.body.study,
    trial_number: req.body.trial_number,
    signal_id: req.body.signal_id,
    valence: req.body.valence,
    arousal: req.body.arousal,
    dominance: req.body.dominance,
    play_button_click_number: req.body.play_button_click_number,
  });

  newStudy1.save().then(study1 => res.json(study1));
});

module.exports = router;