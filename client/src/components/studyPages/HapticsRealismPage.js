import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


function HapticsRealismPage() {
    const navigate = useNavigate();
    const handleReturn = () => {
        navigate('/');
    };
    const handleProceed = () => {
        navigate('/hapticsrealism/trial/' + 1);
    };


    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '80px' }}>Haptics Realism Study Details</h1>
            <div style={{ width: "50%", margin: '0 auto' }}>
                <p>
                    In this experiment, you will be provided with a device that emits various touch signals. Once the experiment begins, these signals will be applied to your skin, and it is your responsibility to attentively feel them. After each touch signal, you will be prompted to identify the gesture. For instance, if it felt like a tap, pinch, swipe, state this to the best of your ability. Following that, you'll be asked to rate the realism of the sensation on a 7-point Likert scale, with 1 representing "Not at all realistic" and 7 signifying "Extremely realistic". Please provide your intuitive assessment; remember that there are no 'right' or 'wrong' responses in this process, as we're interested in your unique perceptual experiences.
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

export default HapticsRealismPage;