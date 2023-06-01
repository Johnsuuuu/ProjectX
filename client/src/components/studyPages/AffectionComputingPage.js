import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import SAM from '../../assets/SAM.png';


function AffectionComputingPage() {
    const navigate = useNavigate();
    const handleReturn = () => {
        navigate('/');
    };
    const handleProceed = () => {
        navigate('/affectioncomputing/trial/' + 1);
    };


    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '80px' }}>Affection Computing Study Details</h1>
            <div style={{ width: "50%", margin: '0 auto' }}>
                <p>
                In this engaging study, you will be exposed to a sensory interplay of touch and light. As you experience these stimuli, we invite you to imagine an emotional outreach from another individual. The essence of this study is <b>not your emotional response to the gesture, but rather the emotion you perceive to be conveyed to you</b>. Your understanding of these transmitted emotions will be recorded using a Self-Assessment Manikin (SAM). SAM is a easy-to-use, non-verbal pictorial tool that directly quantifies pleasure, arousal, and dominance.
                </p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <img src={SAM} style={{ width: "40%", }} alt="SAM" />
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <Button variant="contained" onClick={handleProceed} style={{ marginRight: '50px' }}>
                    proceed
                </Button>
                <Button variant="outlined" onClick={handleReturn}>
                    return
                </Button>
            </div>

        </div>
    );
}

export default AffectionComputingPage;