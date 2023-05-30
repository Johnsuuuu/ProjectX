import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function HapticsRealismStudyPage() {
    const { trialNumber } = useParams();
    const navigate = useNavigate();
    const [radioValue, setRadioValue] = useState('');
    const [ifClicked, setIfClicked] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const nextTrialNumber = parseInt(trialNumber) + 1;
    // const signal_ids = {
    //     '1': '130331',
    //     '2': '530311',
    //     '3': '331331',
    //     '4': '131331',
    //     '5': '531331',
    //     '6': '230311',
    //     '7': '330311',
    //     '8': '330311',
    //     '9': '131311',
    //     '10': '131311',
    //     '11': '331311',
    //     '12': '130331',
    //     '13': '530331',
    //     '14': '531311',
    //     '15': '130311',
    //     '16': '530311',
    //     '17': '230331',
    //     '18': '231331',
    //     '19': '131331',
    //     '20': '231331',
    //     '21': '230331',
    //     '22': '130311',
    //     '23': '331311',
    //     '24': '231311',
    //     '25': '531331',
    //     '26': '531311',
    //     '27': '530331',
    //     '28': '330331',
    //     '29': '330331',
    //     '30': '230311',
    //     '31': '331331',
    //     '32': '231311'
    // };

    const signal_ids = {
        1: {
            "signal1": '131301',
            "signal2": '131311'
        },
        2: {
            "signal1": '131331',
            "signal2": '130301'
        },
        3: {
            "signal1": '231301',
            "signal2": '230301'
        },
        4: {
            "signal1": '331301',
            "signal2": '331311'
        },
        5: {
            "signal1": '531301',
            "signal2": '531331'
        },
        6: {
            "signal1": '131301',
            "signal2": '131331'
        },
        7: {
            "signal1": '331311',
            "signal2": '331331'
        },
        8: {
            "signal1": '231301',
            "signal2": '231331'
        },
        9: {
            "signal1": '531301',
            "signal2": '531311'
        },
        10: {
            "signal1": '131311',
            "signal2": '131331'
        },
        11: {
            "signal1": '331301',
            "signal2": '330301'
        },
        12: {
            "signal1": '231311',
            "signal2": '230301'
        },
        13: {
            "signal1": '531311',
            "signal2": '530301'
        },
        14: {
            "signal1": '331301',
            "signal2": '331331'
        },
        15: {
            "signal1": '531331',
            "signal2": '530301'
        },
        16: {
            "signal1": '131311',
            "signal2": '130301'
        },
        17: {
            "signal1": '231331',
            "signal2": '230301'
        },
        18: {
            "signal1": '531301',
            "signal2": '530301'
        },
        19: {
            "signal1": '231311',
            "signal2": '231331'
        },
        20: {
            "signal1": '331331',
            "signal2": '330301'
        },
        21: {
            "signal1": '131301',
            "signal2": '130301'
        },
        22: {
            "signal1": '531311',
            "signal2": '531331'
        },
        23: {
            "signal1": '331311',
            "signal2": '330301'
        },
        24: {
            "signal1": '231301',
            "signal2": '231311'
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


    const submitOnClick = () => {
        const choice = radioValue === 'Signal 1' ? signal_ids[trialNumber]["signal1"] : signal_ids[trialNumber]["signal2"];
        const trialData = {
            study: 2,
            trial_number: parseInt(trialNumber),
            signal1_id: signal_ids[trialNumber]["signal1"],
            signal2_id: signal_ids[trialNumber]["signal2"],
            choice: choice,
        };
        setIfClicked(false);
        setRadioValue('');
        axios.post('/api/study2/submit', trialData)
            .then(response => {
                console.log(response.data);

                if (nextTrialNumber > 24) {
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
                    navigate(`/hapticsrealism/trial/${nextTrialNumber}`);
                }
            })
            .catch(err => {
                console.error(err);
                setSnackbarMessage('Submission failed');
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            });
    };

    const playOnClick1 = () => {
        const buttonName = getButtonName(signal_ids[trialNumber]['signal1']);
        const lastFourDigits = signal_ids[trialNumber]['signal1'].substr(-4);
        axios.post('http://192.168.86.250:4090/' + buttonName, lastFourDigits).then(response => {
            console.log(response.data);
        }).catch(err => {
            console.error(err);
        });
    };

    const playOnClick2 = () => {
        const buttonName = getButtonName(signal_ids[trialNumber]['signal2']);
        const lastFourDigits = signal_ids[trialNumber]['signal2'].substr(-4);
        axios.post('http://192.168.86.250:4090/' + buttonName, lastFourDigits).then(response => {
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
            <h1 style={{ textAlign: 'center', marginTop: '80px' }}>Haptics Realism Study Trial {trialNumber}/24</h1>
            <div style={{
                width: '500px',
                height: '500px',
                margin: '0 auto',
                marginTop: '50px',
            }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '30px' }}>
                    <Button variant="contained" onClick={playOnClick1} style={{ marginRight: '50px' }}>
                        play signal1
                    </Button>
                    <Button variant="contained" onClick={playOnClick2}>
                        play signal2
                    </Button>
                </div>
                <FormControl>
                    <p style={{ fontSize: 16 }}>Select the signal you experienced which felt more real to you.</p>
                    <RadioGroup
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={radioValue}
                        onChange={handleRadioChange}
                    >
                        <FormControlLabel value="Signal 1" control={<Radio />} label="Signal 1" />
                        <FormControlLabel value="Signal 2" control={<Radio />} label="Signal 2" />
                    </RadioGroup>
                </FormControl>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
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

export default HapticsRealismStudyPage;