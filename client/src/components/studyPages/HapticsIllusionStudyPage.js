import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

function HapticsIllusionStudyPage() {
    const { trialNumber } = useParams();
    const navigate = useNavigate();
    const [radioValue, setRadioValue] = useState('');
    const [ifClicked, setIfClicked] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const nextTrialNumber = parseInt(trialNumber) + 1;
    const signal_ids = {
        1: '11111',
        2: '21111',
        3: '31111',
        4: '41011',
        5: '51011',
        6: '11112',
        7: '21112',
        8: '31112',
        9: '41012',
        10: '51012',
        11: '11113',
        12: '21113',
        13: '31113',
        14: '41013',
        15: '51013',
        16: '11114',
        17: '21114',
        18: '31114',
        19: '41014',
        20: '51014',
    };
    const signal_choice = {
        1: {
            'Signal 1': '11111',
            'Signal 2': '21111',
            'Signal 3': '31111',
            'Signal 4': '41011',
        },
        2: {
            'Signal 1': '21111',
            'Signal 2': '11112',
            'Signal 3': '21112',
            'Signal 4': '31112',
        },
        3: {
            'Signal 1': '51011',
            'Signal 2': '11112',
            'Signal 3': '21112',
            'Signal 4': '31111',
        },
        4: {
            'Signal 1': '51011',
            'Signal 2': '11112',
            'Signal 3': '21112',
            'Signal 4': '41011',
        },
        5: {
            'Signal 1': '51011',
            'Signal 2': '11112',
            'Signal 3': '21112',
            'Signal 4': '41011',
        },
        6: {
            'Signal 1': '51011',
            'Signal 2': '11112',
            'Signal 3': '21112',
            'Signal 4': '31112',
        },
        7: {
            'Signal 1': '51011',
            'Signal 2': '11112',
            'Signal 3': '21112',
            'Signal 4': '31112',
        },
        8: {
            'Signal 1': '51011',
            'Signal 2': '11112',
            'Signal 3': '21112',
            'Signal 4': '31112',
        },
        9: {
            'Signal 1': '51011',
            'Signal 2': '11112',
            'Signal 3': '21112',
            'Signal 4': '41012',
        },
        10: {
            'Signal 1': '51012',
            'Signal 2': '11112',
            'Signal 3': '21112',
            'Signal 4': '31112',
        },
        11: {
            'Signal 1': '51011',
            'Signal 2': '11113',
            'Signal 3': '21112',
            'Signal 4': '31112',
        },
        12: {
            'Signal 1': '51011',
            'Signal 2': '11112',
            'Signal 3': '21113',
            'Signal 4': '31112',
        },
        13: {
            'Signal 1': '51011',
            'Signal 2': '11112',
            'Signal 3': '21112',
            'Signal 4': '31113',
        },
        14: {
            'Signal 1': '41013',
            'Signal 2': '11112',
            'Signal 3': '21112',
            'Signal 4': '31112',
        },
        15: {
            'Signal 1': '51013',
            'Signal 2': '11112',
            'Signal 3': '21112',
            'Signal 4': '31112',
        },
        16: {
            'Signal 1': '51011',
            'Signal 2': '11114',
            'Signal 3': '21112',
            'Signal 4': '31112',
        },
        17: {
            'Signal 1': '51011',
            'Signal 2': '11112',
            'Signal 3': '21114',
            'Signal 4': '31112',
        },
        18: {
            'Signal 1': '51011',
            'Signal 2': '11112',
            'Signal 3': '21112',
            'Signal 4': '31114',
        },
        19: {
            'Signal 1': '41014',
            'Signal 2': '11112',
            'Signal 3': '21112',
            'Signal 4': '31112',
        },
        20: {
            'Signal 1': '51014',
            'Signal 2': '11112',
            'Signal 3': '21112',
            'Signal 4': '31112',
        },
    };

    const handleRadioChange = (event) => {
        setRadioValue(event.target.value);
        setIfClicked(true);
    };

    const submitOnClick = () => {
        console.log(radioValue);
        const trialData = {
            study: 3,
            trial_number: parseInt(trialNumber),
            signal_id: signal_ids[trialNumber],
            choice_id: radioValue,
            choice_signal: signal_choice[trialNumber][radioValue],
            choices: {
                choice_1: signal_choice[trialNumber]['Signal 1'],
                choice_2: signal_choice[trialNumber]['Signal 2'],
                choice_3: signal_choice[trialNumber]['Signal 3'],
                choice_4: signal_choice[trialNumber]['Signal 4'],
            },
        };
        setIfClicked(false);
        setRadioValue('');
        axios.post('/api/study3/submit', trialData)
            .then(response => {
                console.log(response.data);

                if (nextTrialNumber > 20) {
                    setSnackbarMessage('Study3 completed!');
                    setSnackbarSeverity('success');
                    setSnackbarOpen(true);
                    setTimeout(() => {
                        navigate('/');
                    }, 500);

                } else {
                    setSnackbarMessage('Submitted successfully');
                    setSnackbarSeverity('success');
                    setSnackbarOpen(true);
                    navigate(`/hapticsillusion/trial/${nextTrialNumber}`);
                }
            })
            .catch(err => {
                console.error(err);
                setSnackbarMessage('Submission failed');
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
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
            <h1 style={{ textAlign: 'center', marginTop: '80px' }}>Haptics Illusion Study Trial {trialNumber}/20</h1>
            <div style={{
                width: '600px',
                height: '600px',
                margin: '0 auto',
                marginTop: '50px',
            }}>
                <FormControl>
                    <p style={{ fontSize: 16 }}>Choose one signal below that you think is the cloest to the signal just played.</p>
                    <RadioGroup
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={radioValue}
                        onChange={handleRadioChange}
                    >
                        <FormControlLabel value="Signal 1" control={<Radio />} label="Signal 1" />
                        <FormControlLabel value="Signal 2" control={<Radio />} label="Signal 2" />
                        <FormControlLabel value="Signal 3" control={<Radio />} label="Signal 3" />
                        <FormControlLabel value="Signal 4" control={<Radio />} label="Signal 4" />
                    </RadioGroup>
                </FormControl>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
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
        </div >
    );
}

export default HapticsIllusionStudyPage;