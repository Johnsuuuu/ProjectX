import React from 'react';
import NavDrawer from '../layout/NavDrawer';

function HomePage() {
    return (
        <div>
            <NavDrawer />
            <h1 style={{ textAlign: 'center'}}>Study Details</h1>
            <div style={{ width: "50%", margin: '0 auto' }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra ex eget lorem iaculis dapibus. Duis sed dictum sem. Nullam viverra pellentesque tortor id facilisis. Morbi aliquam sed risus vel posuere. Nam aliquet est vel lacus ullamcorper, quis tincidunt lectus efficitur. Vivamus eu nunc vitae turpis mattis interdum. Nulla ut diam sed velit ultricies molestie et in augue. Sed laoreet fermentum est, at gravida nisi vehicula quis. Vivamus vestibulum nibh ac velit lobortis ullamcorper. Aliquam libero nisl, viverra id magna ac, molestie porttitor diam. Sed orci mauris, maximus eget interdum id, ultrices facilisis nunc. Morbi varius congue nunc sit amet auctor. Ut et mi dignissim, bibendum urna ultrices, condimentum nisl.
                </p>
                <p>
                    Praesent congue sollicitudin tellus, fermentum rhoncus dui rutrum nec. Sed nec mauris porta, pretium augue ac, porttitor velit. Aliquam eu ipsum at lectus porttitor vulputate. Nam quis metus in sem tempor rutrum. Phasellus semper laoreet urna, vitae ullamcorper ipsum bibendum ac. Maecenas convallis, lorem vitae egestas pulvinar, ligula dui maximus sapien, sit amet tristique nisl elit vitae felis. Nullam eget volutpat nunc. Pellentesque tincidunt lorem vitae lectus suscipit, nec rutrum neque ultricies. Proin euismod vel massa eu dictum. Pellentesque in tempor arcu, non lobortis quam. Vestibulum rhoncus iaculis sollicitudin.
                </p>

            </div>



        </div>
    );
}

export default HomePage;