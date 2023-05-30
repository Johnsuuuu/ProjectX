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
                    In this experiment, we would like you to rate the emotion you believe the touch conveys, using a 2-dimensional scale of valence and arousal. This exercise requires you to imagine the individual administering the touch and infer their emotional state based solely on the touch signal you received. For the valence dimension, a lower score signifies negative or unpleasant emotions such as sadness or anger, while a higher score signifies positive or pleasant emotions such as happiness or excitement. For the arousal dimension, a lower score indicates calm or passive emotions, while a higher score suggests active or intense emotions like surprise or fear. Reflect on the gesture: did it feel like it was given with joy, anger, calmness, or excitement? There are no right or wrong answers; your unique interpretation is what matters.
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