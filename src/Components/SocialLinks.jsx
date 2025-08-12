import React from 'react';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { BiLogoGmail } from 'react-icons/bi';
import {  FaGithub,  FaWhatsapp } from 'react-icons/fa6';


const SocialLinks = () => {
    return (
        <div className='space-x-4'>
            <a href='https://github.com/rahmandurjoy04' className='btn rounded-full p-0 w-10 h-10'><FaGithub className='w-full h-full p-1' /></a>
            <a href='http://linkedin.com/in/durjoy4004/' className='btn rounded-full p-0 w-10 h-10'><TiSocialLinkedinCircular className='w-full h-full' /></a>
            <a href='https://wa.me/+8801712755442' className='btn rounded-full p-0 w-10 h-10'><FaWhatsapp className='w-full h-full p-0.5' /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=naimur.durjoy.dev@gmail.com" className='btn rounded-full p-0 w-10 h-10'><BiLogoGmail className='w-full h-full p-1' /></a>
        </div>
    );
};

export default SocialLinks;