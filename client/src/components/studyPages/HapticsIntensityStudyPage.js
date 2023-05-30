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

function HapticsIntensityStudyPage() {
    const { trialNumber } = useParams();
    const navigate = useNavigate();
    const [radioValue, setRadioValue] = useState('');
    const [ifClicked, setIfClicked] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const nextTrialNumber = parseInt(trialNumber) + 1;
    // const signal_ids = {
    //     '1': '531131',
    //     '2': '331331',
    //     '3': '530130',
    //     '4': '331131',
    //     '5': '131131',
    //     '6': '531331',
    //     '7': '530330',
    //     '8': '530331',
    //     '9': '330330',
    //     '10': '531130',
    //     '11': '130130',
    //     '12': '330131',
    //     '13': '531330',
    //     '14': '331130',
    //     '15': '330130',
    //     '16': '130131',
    //     '17': '530131',
    //     '18': '131331',
    //     '19': '331330',
    //     '20': '330331',
    //     '21': '130330',
    //     '22': '131130',
    //     '23': '130331',
    //     '24': '131330'
    // };
    // const signal_choice = {
    //     1: {
    //         'Signal 1': '531#1',
    //         'Signal 2': '23104',
    //         'Signal 3': '25112',
    //         'Signal 4': '531#2',
    //     },
    //     2: {
    //         'Signal 1': '34163',
    //         'Signal 2': '25152',
    //         'Signal 3': '33182',
    //         'Signal 4': '23104',
    //     },
    //     3: {
    //         'Signal 1': '23104',
    //         'Signal 2': '531#2',
    //         'Signal 3': '34103',
    //         'Signal 4': '33182',
    //     },
    //     4: {
    //         'Signal 1': '45111',
    //         'Signal 2': '531#2',
    //         'Signal 3': '34103',
    //         'Signal 4': '33182',
    //     },
    //     5: {
    //         'Signal 1': '54111',
    //         'Signal 2': '531#2',
    //         'Signal 3': '34103',
    //         'Signal 4': '33182',
    //     },
    //     6: {
    //         'Signal 1': '54111',
    //         'Signal 2': '531#2',
    //         'Signal 3': '34103',
    //         'Signal 4': '15140',
    //     },
    //     7: {
    //         'Signal 1': '25194',
    //         'Signal 2': '54173',
    //         'Signal 3': '45014',
    //         'Signal 4': '53133',
    //     },
    //     8: {
    //         'Signal 1': '34163',
    //         'Signal 2': '45012',
    //         'Signal 3': '54173',
    //         'Signal 4': '45014',
    //     },
    //     9: {
    //         'Signal 1': '45112',
    //         'Signal 2': '14112',
    //         'Signal 3': '25112',
    //         'Signal 4': '55012',
    //     },
    //     10: {
    //         'Signal 1': '55112',
    //         'Signal 2': '44112',
    //         'Signal 3': '34112',
    //         'Signal 4': '25112',
    //     },
    //     11: {
    //         'Signal 1': '53133',
    //         'Signal 2': '44123',
    //         'Signal 3': '55133',
    //         'Signal 4': '54180',
    //     },
    //     12: {
    //         'Signal 1': '44113',
    //         'Signal 2': '55112',
    //         'Signal 3': '44013',
    //         'Signal 4': '541#3',
    //     },
    //     13: {
    //         'Signal 1': '35133',
    //         'Signal 2': '45133',
    //         'Signal 3': '55122',
    //         'Signal 4': '241#1',
    //     },
    //     14: {
    //         'Signal 1': '45113',
    //         'Signal 2': '15112',
    //         'Signal 3': '25112',
    //         'Signal 4': '34112',
    //     },
    //     15: {
    //         'Signal 1': '54173',
    //         'Signal 2': '14162',
    //         'Signal 3': '25012',
    //         'Signal 4': '25112',
    //     },
    //     16: {
    //         'Signal 1': '23104',
    //         'Signal 2': '13114',
    //         'Signal 3': '45112',
    //         'Signal 4': '35112',
    //     },
    //     17: {
    //         'Signal 1': '25112',
    //         'Signal 2': '44193',
    //         'Signal 3': '24182',
    //         'Signal 4': '35170',
    //     },
    //     18: {
    //         'Signal 1': '33182',
    //         'Signal 2': '53112',
    //         'Signal 3': '43112',
    //         'Signal 4': '231#1',
    //     },
    //     19: {
    //         'Signal 1': '45114',
    //         'Signal 2': '15114',
    //         'Signal 3': '25114',
    //         'Signal 4': '35114',
    //     },
    //     20: {
    //         'Signal 1': '531#2',
    //         'Signal 2': '44112',
    //         'Signal 3': '341#2',
    //         'Signal 4': '14163',
    //     },
    // };
    const signal_ids = {
        1: {
            "signal1": '131130',
            "signal2": '131330'
        },
        2: {
            "signal1": '331130',
            "signal2": '331131'
        },
        3: {
            "signal1": '530131',
            "signal2": '530131'
        },
        4: {
            "signal1": '131330',
            "signal2": '131331'
        },
        5: {
            "signal1": '531130',
            "signal2": '531330'
        },
        6: {
            "signal1": '331131',
            "signal2": '331331'
        },
        7: {
            "signal1": '130131',
            "signal2": '130131'
        },
        8: {
            "signal1": '331130',
            "signal2": '330130'
        },
        9: {
            "signal1": '531131',
            "signal2": '530131'
        },
        10: {
            "signal1": '330131',
            "signal2": '330131'
        },
        11: {
            "signal1": '530130',
            "signal2": '530131'
        },
        12: {
            "signal1": '131131',
            "signal2": '130131'
        },
        13: {
            "signal1": '531330',
            "signal2": '530130'
        },
        14: {
            "signal1": '331130',
            "signal2": '331330'
        },
        15: {
            "signal1": '131330',
            "signal2": '130130'
        },
        16: {
            "signal1": '131130',
            "signal2": '130130'
        },
        17: {
            "signal1": '330130',
            "signal2": '330130'
        },
        18: {
            "signal1": '530130',
            "signal2": '530130'
        },
        19: {
            "signal1": '331331',
            "signal2": '330131'
        },
        20: {
            "signal1": '531330',
            "signal2": '531331'
        },
        21: {
            "signal1": '130130',
            "signal2": '130130'
        },
        22: {
            "signal1": '131331',
            "signal2": '130131'
        },
        23: {
            "signal1": '130130',
            "signal2": '130131'
        },
        24: {
            "signal1": '331330',
            "signal2": '331331'
        },
        25: {
            "signal1": '531131',
            "signal2": '531331'
        },
        26: {
            "signal1": '331131',
            "signal2": '330131'
        },
        27: {
            "signal1": '531130',
            "signal2": '530130'
        },
        28: {
            "signal1": '131131',
            "signal2": '131331'
        },
        29: {
            "signal1": '330130',
            "signal2": '330131'
        },
        30: {
            "signal1": '531331',
            "signal2": '530131'
        },
        31: {
            "signal1": '331330',
            "signal2": '330130'
        },
        32: {
            "signal1": '531130',
            "signal2": '531131'
        },
        33: {
            "signal1": '131130',
            "signal2": '131131',
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
        let choice;
        if (radioValue === 'Signal 1') {
            choice = signal_ids[trialNumber]["signal1"];
        } else if (radioValue === 'Signal 2') {
            choice = signal_ids[trialNumber]["signal2"];
        } else if (radioValue === 'Same') {
            choice = 'same';
        }
        const trialData = {
            study: 3,
            trial_number: parseInt(trialNumber),
            signal1_id: signal_ids[trialNumber]["signal1"],
            signal2_id: signal_ids[trialNumber]["signal2"],
            choice: choice,
        };
        setIfClicked(false);
        setRadioValue('');
        axios.post('/api/study3/submit', trialData)
            .then(response => {
                console.log(response.data);

                if (nextTrialNumber > 33) {
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
                    navigate(`/hapticsintensity/trial/${nextTrialNumber}`);
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
            <h1 style={{ textAlign: 'center', marginTop: '80px' }}>Haptics Intensity Study Trial {trialNumber}/33</h1>
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
                    <p style={{ fontSize: 16 }}>Select the signal you experienced which are more intense.</p>
                    <RadioGroup
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={radioValue}
                        onChange={handleRadioChange}
                    >
                        <FormControlLabel value="Signal 1" control={<Radio />} label="Signal 1" />
                        <FormControlLabel value="Signal 2" control={<Radio />} label="Signal 2" />
                        <FormControlLabel value="Same" control={<Radio />} label="Feel the same" />
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
    );
}

export default HapticsIntensityStudyPage;