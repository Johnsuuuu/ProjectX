import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


function HapticsConfidencePage() {
    const navigate = useNavigate();
    const handleReturn = () => {
        navigate('/');
    };
    const handleProceed = () => {
        navigate('/hapticsconfidence/trial/' + 1);
    };


    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '80px' }}>Haptics Confidence Study Details</h1>
            <div style={{ width: "50%", margin: '0 auto' }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra ex eget lorem iaculis dapibus. Duis sed dictum sem. Nullam viverra pellentesque tortor id facilisis. Morbi aliquam sed risus vel posuere. Nam aliquet est vel lacus ullamcorper, quis tincidunt lectus efficitur. Vivamus eu nunc vitae turpis mattis interdum. Nulla ut diam sed velit ultricies molestie et in augue. Sed laoreet fermentum est, at gravida nisi vehicula quis. Vivamus vestibulum nibh ac velit lobortis ullamcorper. Aliquam libero nisl, viverra id magna ac, molestie porttitor diam. Sed orci mauris, maximus eget interdum id, ultrices facilisis nunc. Morbi varius congue nunc sit amet auctor. Ut et mi dignissim, bibendum urna ultrices, condimentum nisl.
                </p>
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <Button variant="contained" onClick={handleProceed} style={{marginRight: '50px'}}>
                    proceed
                </Button>
                <Button variant="outlined" onClick={handleReturn}>
                    return
                </Button>
            </div>

        </div>
    );
}

export default HapticsConfidencePage;