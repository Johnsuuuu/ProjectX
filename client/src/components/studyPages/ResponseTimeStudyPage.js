import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import '../styles.css';

function ResponseTimeStudyPage() {
    const { trialNumber } = useParams();
    const navigate = useNavigate();
    const [playClicked, setPlayClicked] = useState(false);
    const [spaceKeyPress, setSpaceKeyPress] = useState(false);
    const [pressStartTime, setPressStartTime] = useState(null);
    const [pressEndTime, setPressEndTime] = useState(null);
    const [actualStartTime, setActualStartTime] = useState(null);
    const [actualEndTime, setActualEndTime] = useState(null);
    const [pressCount, setPressCount] = useState(0);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const nextTrialNumber = parseInt(trialNumber) + 1;
    const signal_ids = {
        1: '531#11',
        2: '251521',
        3: '341031',
        4: '450111',
        5: '540111',
        6: '151401',
        7: '251941',
        8: '341631',
        9: '450121',
        10: '550121',
        11: '531331',
        12: '441131',
        13: '351331',
        14: '450131',
        15: '541731',
        16: '231041',
        17: '251121',
        18: '331821',
        19: '450141',
        20: '531#21',
    };

    const getButtonName = (signal_id) => {
        const first_digit = parseInt(signal_id.charAt(0));
        const second_digit = parseInt(signal_id.charAt(1));
        const button_number = (first_digit - 1) * 5 + second_digit;

        return `button${button_number}`;
    }


    const playOnClick = () => {
        setPlayClicked(true);
        // Add code to play the signal
        const buttonName = getButtonName(signal_ids[trialNumber]);
        const lastFourDigits = signal_ids[trialNumber].substr(-4);
        const min = 2;
        const max = 4;
        const delay = Math.floor(Math.random() * (max - min + 1) + min) * 1000;
        setTimeout(() => {
            axios.post('http://192.168.86.250:4090/' + buttonName, lastFourDigits)
                .then(response => {
                    console.log(response.data);
                    let [ast, aet] = response.data.split("#");
                    setActualStartTime(ast);
                    setActualEndTime(aet);
                })
                .catch(err => {
                    console.error(err);
                });
        }, delay);
    };

    const submitOnClick = () => {
        console.log(pressStartTime, pressEndTime);
        const trialData = {
            study: 4,
            trial_number: parseInt(trialNumber),
            signal_id: signal_ids[trialNumber],
            press_start_time: pressStartTime.toString(),
            press_end_time: pressEndTime.toString(),
            actual_start_time: actualStartTime.toString(),
            actual_end_time: actualEndTime.toString(),
        };
        setPlayClicked(false);
        setSpaceKeyPress(false);
        setPressStartTime(null);
        setPressEndTime(null);
        setPressCount(0);
        setActualStartTime(null);
        setActualEndTime(null);
        axios.post('/api/study4/submit', trialData)
            .then(response => {
                console.log(response.data);

                if (nextTrialNumber > 20) {
                    setSnackbarMessage('Study4 completed!');
                    setSnackbarSeverity('success');
                    setSnackbarOpen(true);
                    setTimeout(() => {
                        navigate('/');
                    }, 500);

                } else {
                    setSnackbarMessage('Submitted successfully');
                    setSnackbarSeverity('success');
                    setSnackbarOpen(true);
                    navigate(`/responsetime/trial/${nextTrialNumber}`);
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


    useEffect(() => {
        const handleKeyPress = (event) => {
            if (playClicked && event.keyCode === 32 && spaceKeyPress === false && pressCount === 0) {
                setSpaceKeyPress(true);
                setPressStartTime(Date.now());
                setPressCount(1);
            }
        };

        const handleKeyRelease = (event) => {
            if (playClicked && event.keyCode === 32 && spaceKeyPress === true && pressCount === 1) {
                setPressEndTime(Date.now());
                setSpaceKeyPress(false);
                setPressCount(2);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('keyup', handleKeyRelease);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('keyup', handleKeyRelease);
        };
    }, [playClicked, spaceKeyPress]);

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '80px' }}>Haptics Response Time Study Trial {trialNumber}/20</h1>
            <div style={{
                width: '790px',
                height: '500px',
                margin: '0 auto',
                marginTop: '50px',
            }}>
                <p style={{ fontSize: 16 }}>Press and hold the space key when you feel the incoming sigal and release it when you feel the signal is over</p>
                <div style={{
                    width: '500px',
                    margin: '0 auto'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                        <div className={`box1 ${spaceKeyPress && pressCount === 1 ? "animate1" : ""}`}></div>
                        <div className={`box2 ${spaceKeyPress && pressCount === 1 ? "animate2" : ""}`}></div>
                        <div className={`box3 ${spaceKeyPress && pressCount === 1 ? "animate3" : ""}`}></div>
                    </div>

                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <Button variant="contained" onClick={playOnClick} disabled={playClicked} style={{ marginRight: '50px' }}>
                        play
                    </Button>
                    <Button variant="outlined" onClick={submitOnClick} disabled={!pressStartTime || !pressEndTime}>
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

export default ResponseTimeStudyPage;