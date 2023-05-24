const express = require('express');
const router = express.Router();

// Study Model
const Study4 = require('../../models/Study4');

// @route   POST api/study
// @desc    Create An Study
// @access  Public
router.post('/submit', (req, res) => {
    const newStudy4 = new Study4({
        study: req.body.study,
        trial_number: req.body.trial_number,
        signal_id: req.body.signal_id,
        press_start_time: req.body.press_start_time,
        press_end_time: req.body.press_end_time,
        actual_start_time: req.body.actual_start_time,
        actual_end_time: req.body.actual_end_time,
    });

    newStudy4.save().then(study4 => res.json(study4));
});

module.exports = router;