import Layout from '@theme/Layout';
import React from 'react';
import Features from '../components/Features';
import Heading from '../components/Heading';
import VideoContent from '../components/VideoContent';

function App() {
    return (
        <Layout>
            {/* <NavBar/> */}
            <Heading />
            <Features />
            <VideoContent />
        </Layout>
    );
}

export default App;
