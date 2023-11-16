import Layout from '@theme/Layout';
import React from 'react';
import Features from '../components/Features';
import Heading from '../components/Heading';
import Videos from '../components/Videos';

function App() {
    return (
        <Layout>
            {/* <NavBar/> */}
            <Heading />
            <Features />
            <Videos />
        </Layout>
    );
}

export default App;
