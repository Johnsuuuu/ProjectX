import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

function ResponseTimeStudyPage() {
    const { trialNumber } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '80px' }}>Haptics Response Time Study Trial {trialNumber}/20</h1>
            <div style={{
                width: '500px',
                height: '500px',
                margin: '0 auto',
                marginTop: '50px',
            }}>
                
            </div>
        </div>
    );
}

export default ResponseTimeStudyPage;