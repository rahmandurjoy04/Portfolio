import React, { useEffect } from 'react';
import Banner from '../Banner';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects.jsx';
import { useLocation } from 'react-router';
import Contact from '../Components/Contact.jsx';

const Home = () => {
    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
    return (
        <div id='home' className='pt-20'>
            <Banner></Banner>
            <section id="about" className='max-w-11/12 mx-auto min-w-sm'>
                <About />
            </section>
            <section id='skills' className='bg-base-200 mx-auto min-w-sm '>
                <Skills />
            </section>
            <section id="projects" className='mx-auto min-w-sm'>
                <Projects />
            </section>
            <section id="contact" className='mx-auto min-w-sm'>
                <Contact />
            </section>

        </div>
    );
};

export default Home;