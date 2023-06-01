import React from 'react';
import NavDrawer from '../layout/NavDrawer';

function HomePage() {
    return (
        <div>
            <NavDrawer />
            <h1 style={{ textAlign: 'center' }}>Welcome to our Innovative Human Subject Study.</h1>
            <div style={{ width: "50%", margin: '0 auto' }}>
                <p>
                We are excited to introduce you to an innovative and immersive technological exploration in the realm of human sensory experiences. In this study, you will have the unique opportunity to interact with a novel device - a sleeve that integrates both tactile and visual stimuli.
                </p>
<p>Our research team has designed this cutting-edge device with a blend of touch sensations and dynamic lighting patterns. The intention is to create a multi-sensory experience that allows the user to perceive tactile stimuli in a unique and engaging manner, while simultaneously experiencing a visually rich context provided by a vibrant light display.</p>

<p>During each trial, you will be invited to wear this sleeve. As you interact with it, you'll experience a spectrum of tactile sensations combined with a synchronised display of lights. The purpose of this study is to understand how people perceive and respond to this innovative integration of touch and light, and how it can potentially enhance our interactions with our surroundings in a more immersive way.</p>

<p>Your participation will contribute to the frontiers of human-computer interaction research, and help us better understand the potentials of sensory augmentation in everyday life scenarios. Your feedback and experience are invaluable to us and will help shape the future of this technology. We assure you that all responses will be handled confidentially, and the data collected will be used strictly for the purpose of this research.</p>

            </div>



        </div>
    );
}

export default HomePage;