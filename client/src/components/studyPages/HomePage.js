import React from 'react';
import NavDrawer from '../layout/NavDrawer';

function HomePage() {
    return (
        <div>
            <NavDrawer />
            <h1 style={{ textAlign: 'center' }}>Study Details</h1>
            <div style={{ width: "50%", margin: '0 auto' }}>
                <p>
                    The primary objective of this study is to explore and understand the perceived realism of two distinct touch signals. Participants will engage in a series of trials, each requiring them to compare and discern which touch signal they perceive as more realistic. In each trial, you will be asked to experience 2 signals and make a decision. There is no right or wrong answer, it purely relies on your personal perception.
                </p>


            </div>



        </div>
    );
}

export default HomePage;