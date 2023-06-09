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
            <div style={{ width: "80%", margin: '0 auto' }}>
                <p>
                    In this engaging study, you will be exposed to a sensory interplay of touch and light. As you experience these stimuli, we invite you to imagine an emotional outreach from another individual. The essence of this study is <b>not your emotional response to the gesture, but rather the emotion you perceive to be conveyed to you</b>. We are using Adjusted Self-Assessment Manikin (ASAM) to collect information about participants’(you) perception of the emotional state of the person giving the touch. ASAM is a easy-to-use, non-verbal pictorial tool that directly quantifies pleasure, arousal, and dominance. It’s worth to mention the participant is not self-reporting your own emotional state in response to the touch, but rather, you are reporting on your interpretation or perception of the emotional state of the virtual person giving the touch.
                </p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <img src={SAM} style={{ width: "40%", }} alt="SAM" />
            </div>
            <div style={{ width: "80%", margin: '0 auto' }}>
                <p>
                    <b>The first row of the image represents the perceived valence of the person giving the touch</b>, ranging from a perceived happy (pleasurable) emotional state to a perceived unhappy (displeasurable) emotional state.
                    <b>The second row of the image represents the perceived arousal of the person giving the touch</b>, ranging from a perceived excited, stimulated emotional state to a perceived relaxed, calm emotional state.
                    <b>The third row of the image represents the perceived dominance or submission of the person giving the touch</b>, ranging from a perceived in-control, dominant emotional state to a perceived submissive, controlled emotional state.
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

export default AffectionComputingPage;