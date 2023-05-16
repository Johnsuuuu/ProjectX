const express = require('express');
const router = express.Router();

// Study Model
const Study2 = require('../../models/Study2');

// @route   POST api/study
// @desc    Create An Study
// @access  Public
router.post('/submit', (req, res) => {
  const newStudy2 = new Study2({
    study: req.body.study,
    trial_number: req.body.trial_number,
    signal_id: req.body.signal_id,
    choice: req.body.choice,
    confidence: req.body.confidence,
  });

  newStudy2.save().then(study2 => res.json(study2));
});

module.exports = router;