import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaLocationDot } from 'react-icons/fa6';
import lottie from '../assets/Lotties/bussiness.json'
import Lottie from 'lottie-react';

const Contact = () => {
    return (
        <section id="contact" className="max-w-11/12 bg-[#e4eef7] mx-auto p-8  rounded-lg shadow-lg my-16">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Me</h2>

            <p className="text-center text-gray-600 mb-6">
                Feel free to reach out to me directly via any of the following methods. I’m looking forward to hearing from you!
            </p>

            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                <div className="flex flex-col space-y-6 text-gray-700 text-lg">
                    <p className='flex items-center hover:text-primary'>
                        <FaLocationDot className="text-primary mr-4 w-6 h-6"></FaLocationDot>
                        {import.meta.env.VITE_ADDRESS}</p>
                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${import.meta.env.VITE_EMAIL}`}
                        className="flex items-center space-x-4 hover:text-primary transition-colors"
                    >
                        <FaEnvelope className="text-primary w-6 h-6" />
                        <span>{import.meta.env.VITE_EMAIL}</span>
                    </a>

                    <a
                        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 hover:text-primary transition-colors"
                    >
                        <FaWhatsapp className="text-primary w-6 h-6" />
                        <span>{import.meta.env.VITE_WHATSAPP}</span>
                    </a>

                    <a
                        href={`${import.meta.env.VITE_GITHUB}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 hover:text-primary transition-colors"
                    >
                        <FaGithub className="text-primary w-6 h-6" />
                        <span>rahmandurjoy04</span>
                    </a>

                    <a
                        href={`${import.meta.env.VITE_LINKEDIN}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 hover:text-primary transition-colors"
                    >
                        <FaLinkedin className="text-primary w-6 h-6" />
                        <span>durjoy4004</span>
                    </a>
                </div>
                <div className='w-full md:w-1/2 '>
                    <Lottie animationData={lottie} className='w-10/12 mx-auto' loop={true} />
                </div>
            </div>
        </section>
    );
};

export default Contact;
