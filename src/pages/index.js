import Layout from '@theme/Layout';
import React from 'react';
import Features from '../components/Features';
import Heading from '../components/Heading';
import News from '../components/News';
import Tools from '../components/Tools';

function App() {
    return (
        <Layout>
            {/* <NavBar/> */}
            <Heading />
            <Features />
            <Tools />
            <News />
        </Layout>
    );
}

export default App;
