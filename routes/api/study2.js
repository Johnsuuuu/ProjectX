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
    signal1_id: req.body.signal1_id,
    signal2_id: req.body.signal2_id,
    choice: req.body.choice,
  });

  newStudy2.save().then(study2 => res.json(study2));
});

module.exports = router;