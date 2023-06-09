import React, { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Radio } from '@mui/material';
import axios from 'axios';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import V1 from "../../assets/V1.png";
import V2 from "../../assets/V2.png";
import V3 from "../../assets/V3.png";
import V4 from "../../assets/V4.png";
import V5 from "../../assets/V5.png";
import A1 from "../../assets/A1.png";
import A2 from "../../assets/A2.png";
import A3 from "../../assets/A3.png";
import A4 from "../../assets/A4.png";
import A5 from "../../assets/A5.png";
import D1 from "../../assets/D1.png";
import D2 from "../../assets/D2.png";
import D3 from "../../assets/D3.png";
import D4 from "../../assets/D4.png";
import D5 from "../../assets/D5.png";



function AffectionComputingStudyPage() {
    const { trialNumber } = useParams();
    const navigate = useNavigate();
    const nextTrialNumber = parseInt(trialNumber) + 1;
    const [valence, setValence] = useState('');
    const [arousal, setArousal] = useState('');
    const [dominance, setDominance] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [ifClickedValence, setIfClickedValence] = useState(false);
    const [ifClickedArousal, setIfClickedArousal] = useState(false);
    const [ifClickedDominance, setIfClickedDominance] = useState(false);
    const [playButtonClickNum, setPlayButtonClickNum] = useState(0);

    const signal_ids = {
        1: '121011',
        2: '331031',
        3: '531311',
        4: '330011',
        5: '121231',
        6: '531931',
        7: '121311',
        8: '331311',
        9: '331911',
        10: '530011',
        11: '121911',
        12: '120011',
        13: '531211',
        14: '531231',
        15: '331211',
        16: '121931',
        17: '331011',
        18: '531911',
        19: '331931',
        20: '121211',
        21: '531031',
        22: '331231',
        23: '121331',
        24: '121031',
        25: '531011',
        26: '331331',
        27: '531331',
    };

    const handleValenceChange = (event) => {
        setIfClickedValence(true);
        setValence(event.target.value);
    };

    const handleArousalChange = (event) => {
        setIfClickedArousal(true);
        setArousal(event.target.value);
    };

    const handleDominanceChange = (event) => {
        setIfClickedDominance(true);
        setDominance(event.target.value);
    };

    const getButtonName = (signal_id) => {
        const first_digit = parseInt(signal_id.charAt(0));
        const second_digit = parseInt(signal_id.charAt(1));
        const button_number = (first_digit - 1) * 5 + second_digit;

        return `button${button_number}`;
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const playOnClick = () => {
        const buttonName = getButtonName(signal_ids[trialNumber]);
        const lastFourDigits = signal_ids[trialNumber].substr(-4);
        setPlayButtonClickNum(playButtonClickNum + 1);
        axios.post('http://192.168.86.24:4090/' + buttonName, lastFourDigits).then(response => {
            console.log(response.data);
        }).catch(err => {
            console.error(err);
        });
    };

    const submitOnClick = () => {
        const trialData = {
            study: 1,
            trial_number: parseInt(trialNumber),
            signal_id: signal_ids[trialNumber],
            valence: parseInt(valence),
            arousal: parseInt(arousal),
            dominance: parseInt(dominance),
            play_button_click_number: playButtonClickNum,
        };
        setValence('');
        setArousal('');
        setDominance('');
        setIfClickedValence(false);
        setIfClickedArousal(false);
        setIfClickedDominance(false);
        setPlayButtonClickNum(0);
        axios.post('/api/study1/submit', trialData)
            .then(response => {
                console.log(response.data);

                if (nextTrialNumber > 27) {
                    setSnackbarMessage('Study1 completed!');
                    setSnackbarSeverity('success');
                    setSnackbarOpen(true);
                    setTimeout(() => {
                        navigate('/');
                    }, 500);

                } else {
                    setSnackbarMessage('Submitted successfully');
                    setSnackbarSeverity('success');
                    setSnackbarOpen(true);
                    navigate(`/affectioncomputing/trial/${nextTrialNumber}`);
                }
            })
            .catch(err => {
                console.error(err);
                setSnackbarMessage('Submission failed');
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            });
    }


    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '80px' }}>Affection Computing Study Trial {trialNumber}/27</h1>
            <div style={{
                width: '700px',
                height: '550px',
                margin: '0 auto',
                marginTop: '40px',
                position: 'relative',
            }}>
                <p style={{ fontSize: 16 }}>Rate the valence you experienced. From left to right it goes from pleasant to unpleasant.</p>
                <div style={{
                    position: 'absolute',
                    top: 30,
                    left: 0,
                }}>
                    <img src={V5} style={{
                        width: '120px',
                        height: 'auto'
                    }} alt="V5" />
                </div>
                <div style={{
                    position: 'absolute',
                    top: 30,
                    left: "145px",
                }}>
                    <img src={V4} style={{
                        width: '120px',
                        height: 'auto'
                    }} alt="V4" />
                </div>
                <div style={{
                    position: 'absolute',
                    top: 30,
                    left: "290px",
                }}>
                    <img src={V3} style={{
                        width: '120px',
                        height: 'auto'
                    }} alt="V3" />
                </div>
                <div style={{
                    position: 'absolute',
                    top: 30,
                    left: "435px",
                }}>
                    <img src={V2} style={{
                        width: '120px',
                        height: 'auto'
                    }} alt="V2" />
                </div>
                <div style={{
                    position: 'absolute',
                    top: 30,
                    left: "580px",
                }}>
                    <img src={V1} style={{
                        width: '120px',
                        height: 'auto'
                    }} alt="V1" />
                </div>
                <div style={{
                    position: 'absolute',
                    top: "160px",
                    left: 0,
                }}>
                    <Radio
                        style={{
                            position: 'absolute',
                            left: "40px",
                        }}
                        checked={valence === '5'}
                        onChange={handleValenceChange}
                        value="5"
                        name="radio-buttons"
                    />
                    <Radio
                        style={{
                            position: 'absolute',
                            left: "185px",
                        }}
                        checked={valence === '4'}
                        onChange={handleValenceChange}
                        value="4"
                        name="radio-buttons"
                    />
                    <Radio
                        style={{
                            position: 'absolute',
                            left: "330px",
                        }}
                        checked={valence === '3'}
                        onChange={handleValenceChange}
                        value="3"
                        name="radio-buttons"
                    />
                    <Radio
                        style={{
                            position: 'absolute',
                            left: "475px",
                        }}
                        checked={valence === '2'}
                        onChange={handleValenceChange}
                        value="2"
                        name="radio-buttons"
                    />
                    <Radio
                        style={{
                            position: 'absolute',
                            left: "620px",
                        }}
                        checked={valence === '1'}
                        onChange={handleValenceChange}
                        value="1"
                        name="radio-buttons"
                    />
                </div>
                <p style={{
                    fontSize: 16, position: 'absolute',
                    top: "190px",
                    left: 0,
                }}>Rate the arousal you experienced. From left to right it goes from excited to calm.</p>
                <div style={{
                    position: 'absolute',
                    top: "240px",
                    left: 0,
                }}>
                    <img src={A5} style={{
                        width: '120px',
                        height: 'auto'
                    }} alt="A5" />
                </div>
                <div style={{
                    position: 'absolute',
                    top: "240px",
                    left: "145px",
                }}>
                    <img src={A4} style={{
                        width: '120px',
                        height: 'auto'
                    }} alt="A4" />
                </div>
                <div style={{
                    position: 'absolute',
                    top: "240px",
                    left: "290px",
                }}>
                    <img src={A3} style={{
                        width: '120px',
                        height: 'auto'
                    }} alt="A3" />
                </div>
                <div style={{
                    position: 'absolute',
                    top: "240px",
                    left: "435px",
                }}>
                    <img src={A2} style={{
                        width: '120px',
                        height: 'auto'
                    }} alt="A2" />
                </div>
                <div style={{
                    position: 'absolute',
                    top: "240px",
                    left: "580px",
                }}>
                    <img src={A1} style={{
                        width: '120px',
                        height: 'auto'
                    }} alt="A1" />
                </div>
                <div style={{
                    position: 'absolute',
                    top: "370px",
                    left: 0,
                }}>
                    <Radio
                        style={{
                            position: 'absolute',
                            left: "40px",
                        }}
                        checked={arousal === '5'}
                        onChange={handleArousalChange}
                        value="5"
                        name="radio-buttons"
                    />
                    <Radio
                        style={{
                            position: 'absolute',
                            left: "185px",
                        }}
                        checked={arousal === '4'}
                        onChange={handleArousalChange}
                        value="4"
                        name="radio-buttons"
                    />
                    <Radio
                        style={{
                            position: 'absolute',
                            left: "330px",
                        }}
                        checked={arousal === '3'}
                        onChange={handleArousalChange}
                        value="3"
                        name="radio-buttons"
                    />
                    <Radio
                        style={{
                            position: 'absolute',
                            left: "475px",
                        }}
                        checked={arousal === '2'}
                        onChange={handleArousalChange}
                        value="2"
                        name="radio-buttons"
                    />
                    <Radio
                        style={{
                            position: 'absolute',
                            left: "620px",
                        }}
                        checked={arousal === '1'}
                        onChange={handleArousalChange}
                        value="1"
                        name="radio-buttons"
                    />
                </div>
                <p style={{
                    fontSize: 16, position: 'absolute',
                    top: "400px",
                    left: 0,
                }}>Rate the dominance you experienced. From left to right it goes from controlled to in control.</p>
                <div style={{
                    position: 'absolute',
                    top: "450px",
                    left: 0,
                }}>
                    <img src={D5} style={{
                        width: '120px',
                        height: 'auto'
                    }} alt="D5" />
                </div>
                <div style={{
                    position: 'absolute',
                    top: "450px",
                    left: "145px",
                }}>
                    <img src={D4} style={{
                        width: '120px',
                        height: 'auto'
                    }} alt="D4" />
                </div>
                <div style={{
                    position: 'absolute',
                    top: "450px",
                    left: "290px",
                }}>
                    <img src={D3} style={{
                        width: '120px',
                        height: 'auto'
                    }} alt="D3" />
                </div>
                <div style={{
                    position: 'absolute',
                    top: "450px",
                    left: "435px",
                }}>
                    <img src={D2} style={{
                        width: '120px',
                        height: 'auto'
                    }} alt="D2" />
                </div>
                <div style={{
                    position: 'absolute',
                    top: "450px",
                    left: "580px",
                }}>
                    <img src={D1} style={{
                        width: '120px',
                        height: 'auto'
                    }} alt="D1" />
                </div>
                <div style={{
                    position: 'absolute',
                    top: "580px",
                    left: 0,
                }}>
                    <Radio
                        style={{
                            position: 'absolute',
                            left: "40px",
                        }}
                        checked={dominance === '5'}
                        onChange={handleDominanceChange}
                        value="5"
                        name="radio-buttons"
                    />
                    <Radio
                        style={{
                            position: 'absolute',
                            left: "185px",
                        }}
                        checked={dominance === '4'}
                        onChange={handleDominanceChange}
                        value="4"
                        name="radio-buttons"
                    />
                    <Radio
                        style={{
                            position: 'absolute',
                            left: "330px",
                        }}
                        checked={dominance === '3'}
                        onChange={handleDominanceChange}
                        value="3"
                        name="radio-buttons"
                    />
                    <Radio
                        style={{
                            position: 'absolute',
                            left: "475px",
                        }}
                        checked={dominance === '2'}
                        onChange={handleDominanceChange}
                        value="2"
                        name="radio-buttons"
                    />
                    <Radio
                        style={{
                            position: 'absolute',
                            left: "620px",
                        }}
                        checked={dominance === '1'}
                        onChange={handleDominanceChange}
                        value="1"
                        name="radio-buttons"
                    />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '90px' }}>
                <Button variant="contained" onClick={playOnClick} style={{ marginRight: '50px' }}>
                    play
                </Button>
                <Button variant="outlined" onClick={submitOnClick} disabled={!ifClickedValence || !ifClickedArousal || !ifClickedDominance}>
                    submit
                </Button>
            </div>
            <Snackbar open={snackbarOpen} autoHideDuration={2000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default AffectionComputingStudyPage;