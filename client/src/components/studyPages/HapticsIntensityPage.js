import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


function HapticsIntensityPage() {
    const navigate = useNavigate();
    const handleReturn = () => {
        navigate('/');
    };
    const handleProceed = () => {
        navigate('/hapticsintensity/trial/' + 1);
    };


    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '80px' }}>Haptics Intensity Study Details</h1>
            <div style={{ width: "50%", margin: '0 auto' }}>
                <p>
                    In this experiemnt, after receiving and identifying the touch gestures, your next task will be to rate the intensity of the gesture. To do so, please use the 7-point Likert scale provided. On this scale, a rating of 1 indicates that the gesture was "Very Wear" and a rating of 7 implies that it was "Very Strong". This rating should reflect your perception of the strength or force behind the gesture, rather than its realism. Consider whether the gesture felt faint or light, or if it was robust and pronounced. Please provide your immediate impression, trusting your instinct. Remember, there are no right or wrong answers here as we are solely interested in your personal experience of the intensity of the touch signal.
                </p>
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

export default HapticsIntensityPage;