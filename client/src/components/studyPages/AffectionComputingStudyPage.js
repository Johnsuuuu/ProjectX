import React, { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import img_row11 from "../../assets/row11.png";
import img_row12 from "../../assets/row12.png";
import img_row13 from "../../assets/row13.png";
import img_row14 from "../../assets/row14.png";
import img_row15 from "../../assets/row15.png";
import img_row21 from "../../assets/row21.png";
import img_row22 from "../../assets/row22.png";
import img_row31 from "../../assets/row31.png";
import img_row32 from "../../assets/row32.png";
import img_row33 from "../../assets/row33.png";
import img_row41 from "../../assets/row41.png";
import img_row42 from "../../assets/row42.png";
import img_row51 from "../../assets/row51.png";
import img_row52 from "../../assets/row52.png";
import img_row53 from "../../assets/row53.png";
import img_row54 from "../../assets/row54.png";
import img_row55 from "../../assets/row55.png";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


function AffectionComputingStudyPage() {
    const { trialNumber } = useParams();
    const navigate = useNavigate();
    const nextTrialNumber = parseInt(trialNumber) + 1;
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
    const [markPosition, setMarkPosition] = useState({ left: '0px', top: '0px', display: 'none' });
    const [tooltipStyle, setTooltipStyle] = useState({ display: 'none', top: 0, left: 0 });
    const [tooltipImage, setTooltipImage] = useState('');
    const [ifClicked, setIfClicked] = useState(false);
    const [ifMouseOver, setIfMouseOver] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const parentDivRef = useRef(null);
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

    const getButtonName = (signal_id) => {
        const first_digit = parseInt(signal_id.charAt(0));
        const second_digit = parseInt(signal_id.charAt(1));
        const button_number = (first_digit - 1) * 5 + second_digit;

        return `button${button_number}`;
    }

    const handleClick = (event) => {
        if (ifMouseOver === true) {
            const rect = parentDivRef.current.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 10 - 5;
            const y = ((event.clientY - rect.top) / rect.height) * -10 + 5;
            if (x >= -5 && x <= 5 && y >= -5 && y <= 5) {
                setMarkPosition({
                    left: `${event.clientX - rect.left - 12}px`,
                    top: `${event.clientY - rect.top - 12}px`,
                    display: 'block',
                });
                setCoordinates({ x, y });
                setIfClicked(true);
                console.log(`Clicked at: (${x.toFixed(2)}, ${y.toFixed(2)})`);
            }
        }
    }

    const handleMouseMove = (event) => {
        setIfMouseOver(true);
        const rect = parentDivRef.current.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 10 - 5;
        const y = ((event.clientY - rect.top) / rect.height) * -10 + 5;

        const distanceToRow11 = Math.sqrt((x + 5) ** 2 + (y - 5) ** 2);
        const distanceToRow12 = Math.sqrt((x + 2.5) ** 2 + (y - 5) ** 2);
        const distanceToRow13 = Math.sqrt(x ** 2 + (y - 5) ** 2);
        const distanceToRow14 = Math.sqrt((x - 2.5) ** 2 + (y - 5) ** 2);
        const distanceToRow15 = Math.sqrt((x - 5) ** 2 + (y - 5) ** 2);
        const distanceToRow21 = Math.sqrt((x + 5) ** 2 + (y - 2.5) ** 2);
        const distanceToRow22 = Math.sqrt((x - 5) ** 2 + (y - 2.5) ** 2);
        const distanceToRow31 = Math.sqrt((x + 5) ** 2 + y ** 2);
        const distanceToRow32 = Math.sqrt(x ** 2 + y ** 2);
        const distanceToRow33 = Math.sqrt((x - 5) ** 2 + y ** 2);
        const distanceToRow41 = Math.sqrt((x + 5) ** 2 + (y + 2.5) ** 2);
        const distanceToRow42 = Math.sqrt((x - 5) ** 2 + (y + 2.5) ** 2);
        const distanceToRow51 = Math.sqrt((x + 5) ** 2 + (y + 5) ** 2);
        const distanceToRow52 = Math.sqrt((x + 2.5) ** 2 + (y + 5) ** 2);
        const distanceToRow53 = Math.sqrt(x ** 2 + (y + 5) ** 2);
        const distanceToRow54 = Math.sqrt((x - 2.5) ** 2 + (y + 5) ** 2);
        const distanceToRow55 = Math.sqrt((x - 5) ** 2 + (y + 5) ** 2);


        if (distanceToRow11 < 1.414) {
            setTooltipStyle({ display: 'block', top: `${event.clientY - rect.top - 30}px`, left: `${event.clientX - rect.left - 12}px` });
            setTooltipImage(img_row11);
        } else if (distanceToRow12 < 1.414) {
            setTooltipStyle({ display: 'block', top: `${event.clientY - rect.top - 30}px`, left: `${event.clientX - rect.left - 12}px` });
            setTooltipImage(img_row12);
        } else if (distanceToRow13 < 1.414) {
            setTooltipStyle({ display: 'block', top: `${event.clientY - rect.top - 30}px`, left: `${event.clientX - rect.left - 12}px` });
            setTooltipImage(img_row13);
        } else if (distanceToRow14 < 1.414) {
            setTooltipStyle({ display: 'block', top: `${event.clientY - rect.top - 30}px`, left: `${event.clientX - rect.left - 12}px` });
            setTooltipImage(img_row14);
        } else if (distanceToRow15 < 1.414) {
            setTooltipStyle({ display: 'block', top: `${event.clientY - rect.top - 30}px`, left: `${event.clientX - rect.left - 12}px` });
            setTooltipImage(img_row15);
        } else if (distanceToRow21 < 1.414) {
            setTooltipStyle({ display: 'block', top: `${event.clientY - rect.top - 30}px`, left: `${event.clientX - rect.left - 12}px` });
            setTooltipImage(img_row21);
        } else if (distanceToRow22 < 1.414) {
            setTooltipStyle({ display: 'block', top: `${event.clientY - rect.top - 30}px`, left: `${event.clientX - rect.left - 12}px` });
            setTooltipImage(img_row22);
        } else if (distanceToRow31 < 1.414) {
            setTooltipStyle({ display: 'block', top: `${event.clientY - rect.top - 30}px`, left: `${event.clientX - rect.left - 12}px` });
            setTooltipImage(img_row31);
        } else if (distanceToRow32 < 1.414) {
            setTooltipStyle({ display: 'block', top: `${event.clientY - rect.top - 30}px`, left: `${event.clientX - rect.left - 12}px` });
            setTooltipImage(img_row32);
        } else if (distanceToRow33 < 1.414) {
            setTooltipStyle({ display: 'block', top: `${event.clientY - rect.top - 30}px`, left: `${event.clientX - rect.left - 12}px` });
            setTooltipImage(img_row33);
        } else if (distanceToRow41 < 1.414) {
            setTooltipStyle({ display: 'block', top: `${event.clientY - rect.top - 30}px`, left: `${event.clientX - rect.left - 12}px` });
            setTooltipImage(img_row41);
        } else if (distanceToRow42 < 1.414) {
            setTooltipStyle({ display: 'block', top: `${event.clientY - rect.top - 30}px`, left: `${event.clientX - rect.left - 12}px` });
            setTooltipImage(img_row42);
        } else if (distanceToRow51 < 1.414) {
            setTooltipStyle({ display: 'block', top: `${event.clientY - rect.top - 30}px`, left: `${event.clientX - rect.left - 12}px` });
            setTooltipImage(img_row51);
        } else if (distanceToRow52 < 1.414) {
            setTooltipStyle({ display: 'block', top: `${event.clientY - rect.top - 30}px`, left: `${event.clientX - rect.left - 12}px` });
            setTooltipImage(img_row52);
        } else if (distanceToRow53 < 1.414) {
            setTooltipStyle({ display: 'block', top: `${event.clientY - rect.top - 30}px`, left: `${event.clientX - rect.left - 12}px` });
            setTooltipImage(img_row53);
        } else if (distanceToRow54 < 1.414) {
            setTooltipStyle({ display: 'block', top: `${event.clientY - rect.top - 30}px`, left: `${event.clientX - rect.left - 12}px` });
            setTooltipImage(img_row54);
        } else if (distanceToRow55 < 1.414) {
            setTooltipStyle({ display: 'block', top: `${event.clientY - rect.top - 30}px`, left: `${event.clientX - rect.left - 12}px` });
            setTooltipImage(img_row55);
        } else {
            setTooltipStyle({ display: 'none', top: 0, left: 0 });
        }
    }

    const handleMouseLeave = (event) => {
        setTooltipStyle({ display: 'none', top: 0, left: 0 });
        setTooltipImage('');
        setIfMouseOver(false);
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const submitOnClick = () => {
        // console.log(coordinates);
        const trialData = {
            study: 1,
            trial_number: parseInt(trialNumber),
            signal_id: signal_ids[trialNumber],
            coord: coordinates,
        };
        setMarkPosition({ left: '0px', top: '0px', display: 'none' });
        setIfClicked(false);
        setCoordinates({ x: 0, y: 0 });
        setTooltipStyle({ display: 'none', top: 0, left: 0 });
        setTooltipImage('');
        setIfMouseOver(false);
        axios.post('/api/study1/submit', trialData)
            .then(response => {
                console.log(response.data);

                if (nextTrialNumber > 20) {
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

    const playOnClick = () => {
        const buttonName = getButtonName(signal_ids[trialNumber]);
        const lastThreeDigits = signal_ids[trialNumber].substr(-3);
        axios.post('http://192.168.86.246:4090/' + buttonName, lastThreeDigits).then(response => {
            console.log(response.data);
        }).catch(err => {
            console.error(err);
        });
    };


    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '80px' }}>Affection Computing Study Trial {trialNumber}/20</h1>
            <div style={{
                width: '500px',
                height: '500px',
                margin: '0 auto',
                marginTop: '40px',
                position: 'relative',
            }}>
                <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    top: 0,
                    left: 0,
                }}>
                    <img src={img_row11} style={{
                        width: '50px',
                        height: 'auto'
                    }} alt="img row11" />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    top: 0,
                    left: 115,
                }}>
                    <img src={img_row12} style={{
                        width: '50px',
                        height: 'auto'
                    }} alt="img row12" />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    top: 0,
                    left: 225,
                }}>
                    <img src={img_row13} style={{
                        width: '50px',
                        height: 'auto'
                    }} alt="img row13" />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    top: 0,
                    left: 340,
                }}>
                    <img src={img_row14} style={{
                        width: '50px',
                        height: 'auto'
                    }} alt="img row14" />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    top: 0,
                    left: 450,
                }}>
                    <img src={img_row15} style={{
                        width: '50px',
                        height: 'auto'
                    }} alt="img row15" />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    top: 115,
                    left: -3,
                }}>
                    <img src={img_row21} style={{
                        width: '50px',
                        height: 'auto'
                    }} alt="img row21" />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    top: 115,
                    left: 453,
                }}>
                    <img src={img_row22} style={{
                        width: '50px',
                        height: 'auto'
                    }} alt="img row22" />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    top: 225,
                    left: -3,
                }}>
                    <img src={img_row31} style={{
                        width: '50px',
                        height: 'auto'
                    }} alt="img row31" />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    top: 225,
                    left: 453,
                }}>
                    <img src={img_row33} style={{
                        width: '50px',
                        height: 'auto'
                    }} alt="img row33" />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    top: 340,
                    left: -3,
                }}>
                    <img src={img_row41} style={{
                        width: '50px',
                        height: 'auto'
                    }} alt="img row41" />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    top: 340,
                    left: 453,
                }}>
                    <img src={img_row42} style={{
                        width: '50px',
                        height: 'auto'
                    }} alt="img row42" />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    top: 455,
                    left: -3
                }}>
                    <img src={img_row51} style={{
                        width: '50px',
                        height: 'auto'
                    }} alt="img row51" />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    top: 455,
                    left: 115
                }}>
                    <img src={img_row52} style={{
                        width: '50px',
                        height: 'auto'
                    }} alt="img row52" />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    top: 455,
                    left: 225
                }}>
                    <img src={img_row53} style={{
                        width: '50px',
                        height: 'auto'
                    }} alt="img row53" />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    top: 455,
                    left: 340
                }}>
                    <img src={img_row54} style={{
                        width: '50px',
                        height: 'auto'
                    }} alt="img row54" />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    top: 455,
                    left: 450
                }}>
                    <img src={img_row55} style={{
                        width: '50px',
                        height: 'auto'
                    }} alt="img row55" />
                </div>

                <div
                    ref={parentDivRef}
                    style={{
                        width: '400px',
                        height: '400px',
                        border: '1px solid black',
                        top: '50px',
                        left: '50px',
                        position: 'relative',
                    }}
                    onClick={handleClick}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div style={{
                        position: 'absolute',
                        top: tooltipStyle.top,
                        left: tooltipStyle.left,
                        display: tooltipStyle.display,
                        zIndex: 2000,
                    }}>
                        <img src={tooltipImage} alt="Tooltip" style={{
                            width: '25px',
                            height: 'auto'
                        }} />
                    </div>
                    <CloseIcon style={{
                        color: 'green',
                        position: 'absolute',
                        left: markPosition.left,
                        top: markPosition.top,
                        display: markPosition.display,
                        zIndex: 1000,
                    }} />

                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: 0,
                            right: 0,
                            transform: 'translateY(-50%)',
                            borderTop: '1px dashed black',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            borderLeft: '1px dashed black',
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        width: '20px',
                        height: '20px',
                        top: '44%',
                        left: '44%',
                    }}>
                        <img src={img_row32} style={{
                            width: '50px',
                            height: 'auto'
                        }} alt="img row32" />
                    </div>
                </div>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <Button variant="contained" onClick={playOnClick} style={{ marginRight: '50px' }}>
                    play
                </Button>
                <Button variant="outlined" onClick={submitOnClick} disabled={!ifClicked}>
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
