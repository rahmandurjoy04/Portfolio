import React from 'react';
import Banner from '../Banner';
import About from '../Components/About';
import Skills from '../Components/Skills';

const Home = () => {
    return (
        <div id='home' >
            <Banner></Banner>
            <section id="about" className='max-w-11/12 mx-auto min-w-sm'>
                <About />
            </section>
            <section id="skills" className='bg-base-200 mx-auto min-w-sm'>
                <Skills />
            </section>

        </div>
    );
};

export default Home;