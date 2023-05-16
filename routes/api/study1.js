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
    coord: req.body.coord,
  });

  newStudy1.save().then(study1 => res.json(study1));
});

module.exports = router;