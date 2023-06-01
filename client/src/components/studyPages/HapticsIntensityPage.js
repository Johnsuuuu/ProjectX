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
                
                <p> The primary objective of this study is to explore and understand the perceived <b>intensity</b> of two distinct touch signals. You will engage in a series of trials, each requiring them to compare and discern which touch signal you perceive as <b>more strong</b>. In each trial, you will be asked to experience 2 signals and make a decision. </p>
                <p>There is no right or wrong answer, it purely relies on your personal your intuitive assessment.</p>
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