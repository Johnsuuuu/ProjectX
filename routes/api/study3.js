const express = require('express');
const router = express.Router();

// Study Model
const Study3 = require('../../models/Study3');

// @route   POST api/study
// @desc    Create An Study
// @access  Public
router.post('/submit', (req, res) => {
  const newStudy3 = new Study3({
    study: req.body.study,
    trial_number: req.body.trial_number,
    signal_id: req.body.signal_id,
    choice_id: req.body.choice_id,
    choice_signal: req.body.choice_signal,
    choices: req.body.choices,
  });

  newStudy3.save().then(study3 => res.json(study3));
});

module.exports = router;