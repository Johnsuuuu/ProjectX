import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function HapticsConfidenceStudyPage() {
    const { trialNumber } = useParams();
    const navigate = useNavigate();
    const [radioValue, setRadioValue] = useState('');
    const [sliderValue, setSliderValue] = useState(50);
    const [ifClicked, setIfClicked] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const nextTrialNumber = parseInt(trialNumber) + 1;
    const signal_ids = {
        1: '15111',
        2: '25111',
        3: '35111',
        4: '45011',
        5: '55011',
        6: '15112',
        7: '25112',
        8: '35112',
        9: '45012',
        10: '55012',
        11: '15113',
        12: '25113',
        13: '35113',
        14: '45013',
        15: '55013',
        16: '15114',
        17: '25114',
        18: '35114',
        19: '45014',
        20: '55014',
    };

    const getButtonName = (signal_id) => {
        const first_digit = parseInt(signal_id.charAt(0));
        const second_digit = parseInt(signal_id.charAt(1));
        const button_number = (first_digit - 1) * 5 + second_digit;

        return `button${button_number}`;
    }
    const handleRadioChange = (event) => {
        setRadioValue(event.target.value);
        setIfClicked(true);
    };

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };

    const submitOnClick = () => {
        console.log(radioValue);
        console.log(sliderValue);
        const trialData = {
            study: 2,
            trial_number: parseInt(trialNumber),
            signal_id: signal_ids[trialNumber],
            choice: radioValue,
            confidence: sliderValue,
        };
        setIfClicked(false);
        setRadioValue('');
        setSliderValue(50);
        axios.post('/api/study2/submit', trialData)
            .then(response => {
                console.log(response.data);

                if (nextTrialNumber > 20) {
                    setSnackbarMessage('Study2 completed!');
                    setSnackbarSeverity('success');
                    setSnackbarOpen(true);
                    setTimeout(() => {
                        navigate('/');
                    }, 500);

                } else {
                    setSnackbarMessage('Submitted successfully');
                    setSnackbarSeverity('success');
                    setSnackbarOpen(true);
                    navigate(`/hapticsconfidence/trial/${nextTrialNumber}`);
                }
            })
            .catch(err => {
                console.error(err);
                setSnackbarMessage('Submission failed');
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            });
    };

    const playOnClick = () => {
        const buttonName = getButtonName(signal_ids[trialNumber]);
        const lastThreeDigits = signal_ids[trialNumber].substr(-3);
        axios.post('http://192.168.86.246:4090/' + buttonName, lastThreeDigits).then(response => {
            console.log(response.data);
        }).catch(err => {
            console.error(err);
        });
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };


    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '80px' }}>Haptics Confidence Study Trial {trialNumber}/20</h1>
            <div style={{
                width: '500px',
                height: '500px',
                margin: '0 auto',
                marginTop: '50px',
            }}>
                <FormControl>
                    <p style={{ fontSize: 16 }}>What type of social touch pattern do you think this signal represent?</p>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={radioValue}
                        onChange={handleRadioChange}
                    >
                        <FormControlLabel value="Stroking" control={<Radio />} label="Stroking" />
                        <FormControlLabel value="Patting" control={<Radio />} label="Patting" />
                        <FormControlLabel value="Poking" control={<Radio />} label="Poking" />
                        <FormControlLabel value="Squeezing" control={<Radio />} label="Squeezing" />
                    </RadioGroup>
                </FormControl>
                <p style={{ fontSize: 16, marginTop: '40px' }}>How confident are you about your decision?</p>
                <Slider value={sliderValue}
                    onChange={handleSliderChange} aria-label="Default" valueLabelDisplay="auto" step={10}
                    marks
                    min={0}
                    max={100} />
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
                    <Button variant="outlined" onClick={playOnClick} style={{ marginRight: '50px' }}>
                        play
                    </Button>
                    <Button variant="outlined" onClick={submitOnClick} disabled={!ifClicked}>
                        submit
                    </Button>
                </div>
            </div>
            <Snackbar open={snackbarOpen} autoHideDuration={2000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>

        </div>
    )

}

export default HapticsConfidenceStudyPage;