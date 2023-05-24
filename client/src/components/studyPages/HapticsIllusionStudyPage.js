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
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';

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
        1: '531#1',
        2: '25152',
        3: '34103',
        4: '45011',
        5: '54011',
        6: '15140',
        7: '25194',
        8: '34163',
        9: '45012',
        10: '55012',
        11: '53133',
        12: '44113',
        13: '35133',
        14: '45013',
        15: '54173',
        16: '23104',
        17: '25112',
        18: '33182',
        19: '45014',
        20: '531#2',
    };
    const signal_choice = {
        1: {
            'Signal 1': '531#1',
            'Signal 2': '23104',
            'Signal 3': '25112',
            'Signal 4': '531#2',
        },
        2: {
            'Signal 1': '34163',
            'Signal 2': '25152',
            'Signal 3': '33182',
            'Signal 4': '23104',
        },
        3: {
            'Signal 1': '23104',
            'Signal 2': '531#2',
            'Signal 3': '34103',
            'Signal 4': '33182',
        },
        4: {
            'Signal 1': '45111',
            'Signal 2': '531#2',
            'Signal 3': '34103',
            'Signal 4': '33182',
        },
        5: {
            'Signal 1': '54111',
            'Signal 2': '531#2',
            'Signal 3': '34103',
            'Signal 4': '33182',
        },
        6: {
            'Signal 1': '54111',
            'Signal 2': '531#2',
            'Signal 3': '34103',
            'Signal 4': '15140',
        },
        7: {
            'Signal 1': '25194',
            'Signal 2': '54173',
            'Signal 3': '45014',
            'Signal 4': '53133',
        },
        8: {
            'Signal 1': '34163',
            'Signal 2': '45012',
            'Signal 3': '54173',
            'Signal 4': '45014',
        },
        9: {
            'Signal 1': '45112',
            'Signal 2': '14112',
            'Signal 3': '25112',
            'Signal 4': '55012',
        },
        10: {
            'Signal 1': '55112',
            'Signal 2': '44112',
            'Signal 3': '34112',
            'Signal 4': '25112',
        },
        11: {
            'Signal 1': '53133',
            'Signal 2': '44123',
            'Signal 3': '55133',
            'Signal 4': '54180',
        },
        12: {
            'Signal 1': '44113',
            'Signal 2': '55112',
            'Signal 3': '44013',
            'Signal 4': '541#3',
        },
        13: {
            'Signal 1': '35133',
            'Signal 2': '45133',
            'Signal 3': '55122',
            'Signal 4': '241#1',
        },
        14: {
            'Signal 1': '45113',
            'Signal 2': '15112',
            'Signal 3': '25112',
            'Signal 4': '34112',
        },
        15: {
            'Signal 1': '54173',
            'Signal 2': '14162',
            'Signal 3': '25012',
            'Signal 4': '25112',
        },
        16: {
            'Signal 1': '23104',
            'Signal 2': '13114',
            'Signal 3': '45112',
            'Signal 4': '35112',
        },
        17: {
            'Signal 1': '25112',
            'Signal 2': '44193',
            'Signal 3': '24182',
            'Signal 4': '35170',
        },
        18: {
            'Signal 1': '33182',
            'Signal 2': '53112',
            'Signal 3': '43112',
            'Signal 4': '231#1',
        },
        19: {
            'Signal 1': '45114',
            'Signal 2': '15114',
            'Signal 3': '25114',
            'Signal 4': '35114',
        },
        20: {
            'Signal 1': '531#2',
            'Signal 2': '44112',
            'Signal 3': '341#2',
            'Signal 4': '14163',
        },
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

    const playOnClick = () => {
        const buttonName = getButtonName(signal_ids[trialNumber]);
        const lastThreeDigits = signal_ids[trialNumber].substr(-3);
        axios.post('http://192.168.86.246:4090/' + buttonName, lastThreeDigits).then(response => {
            console.log(response.data);
        }).catch(err => {
            console.error(err);
        });
    };

    const playChoiceOnClick1 = () => {
        const buttonName = getButtonName(signal_choice[trialNumber]['Signal 1']);
        const lastThreeDigits = signal_choice[trialNumber]['Signal 1'].substr(-3);
        axios.post('http://192.168.86.246:4090/' + buttonName, lastThreeDigits).then(response => {
            console.log(response.data);
        }).catch(err => {
            console.error(err);
        });
    };

    const playChoiceOnClick2 = () => {
        const buttonName = getButtonName(signal_choice[trialNumber]['Signal 2']);
        const lastThreeDigits = signal_choice[trialNumber]['Signal 2'].substr(-3);
        axios.post('http://192.168.86.246:4090/' + buttonName, lastThreeDigits).then(response => {
            console.log(response.data);
        }).catch(err => {
            console.error(err);
        });
    };

    const playChoiceOnClick3 = () => {
        const buttonName = getButtonName(signal_choice[trialNumber]['Signal 3']);
        const lastThreeDigits = signal_choice[trialNumber]['Signal 3'].substr(-3);
        axios.post('http://192.168.86.246:4090/' + buttonName, lastThreeDigits).then(response => {
            console.log(response.data);
        }).catch(err => {
            console.error(err);
        });
    };

    const playChoiceOnClick4 = () => {
        const buttonName = getButtonName(signal_choice[trialNumber]['Signal 4']);
        const lastThreeDigits = signal_choice[trialNumber]['Signal 4'].substr(-3);
        axios.post('http://192.168.86.246:4090/' + buttonName, lastThreeDigits).then(response => {
            console.log(response.data);
        }).catch(err => {
            console.error(err);
        });
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
                        <FormControlLabel value="Signal 1" control={<Radio />} label={
                            <div>
                                Signal 1
                                <Button variant="contained" color="secondary" onClick={playChoiceOnClick1} style={{ height: '24px', marginLeft: '50px', fontSize: '10px' }}>
                                    play
                                </Button>
                            </div>
                        } />
                        <FormControlLabel value="Signal 2" control={<Radio />} label={
                            <div>
                                Signal 2
                                <Button variant="contained" color="secondary" onClick={playChoiceOnClick2} style={{ height: '24px', marginLeft: '50px', fontSize: '10px' }}>
                                    play
                                </Button>
                            </div>
                        } />
                        <FormControlLabel value="Signal 3" control={<Radio />} label={
                            <div>
                                Signal 3
                                <Button variant="contained" color="secondary" onClick={playChoiceOnClick3} style={{ height: '24px', marginLeft: '50px', fontSize: '10px' }}>
                                    play
                                </Button>
                            </div>
                        } />
                        <FormControlLabel value="Signal 4" control={<Radio />} label={
                            <div>
                                Signal 4
                                <Button variant="contained" color="secondary" onClick={playChoiceOnClick4} style={{ height: '24px', marginLeft: '50px', fontSize: '10px' }}>
                                    play
                                </Button>
                            </div>
                        } />
                    </RadioGroup>
                </FormControl>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
                    <Button variant="contained" onClick={playOnClick} style={{ marginRight: '50px' }}>
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
        </div >
    );
}

export default HapticsIllusionStudyPage;