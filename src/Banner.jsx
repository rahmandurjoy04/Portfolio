import React from 'react';
import { FaDownload } from 'react-icons/fa6';
import MyImage from './Components/MyImage';

import SocialLinks from './Components/SocialLinks';

const Banner = () => {
    return (
        <div className='flex flex-col justify-center items-center md:flex-row min-w-sm px-10 rounded-xl border max-w-11/12 mx-auto bg-[linear-gradient(to_right,_#202c46_0%,_#6dbfb8_100%)] min-h-[80vh]'>
            {/* Left Div */}
            <div className='w-full flex flex-col gap-7 md:w-8/12 text-amber-50'>
                <h1 className='text-4xl font-bold'><span className='text-xl'>Hello I'm</span> <br /> Naimur Rahman Durjoy</h1>
                <h3 className='text-xl font-bold'>MERN stack Developer</h3>
                <p className='text-start text-xl '>I develop responsive, user-friendly websites using HTML, CSS, JavaScript, and the MERN stack. I turn ideas into clean, functional, and visually engaging digital experiences while constantly learning and improving my skills.</p>
                {/* Social Links */}
                <div>
                    <SocialLinks></SocialLinks>
                </div>
                <a href="/Resume-Durjoy.pdf" download="Naimur_Rahman_Resume.pdf">
                    <button className='btn btn-sm px-6 py-5 bg-primary border-0 shadow-none flex justify-center items-center gap-2'><FaDownload className='text-lg'></FaDownload>Download Resume</button>
                </a>

            </div>
            {/* Right Div */}
            <div className='w-full  md:w-4/12 h-full' >
                <MyImage></MyImage>
            </div>
        </div>
    );
};

export default Banner;