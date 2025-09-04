import React from 'react';

const AboutMe = () => {
    return (
        <section className="min-w-sm w-full pt-16">
            <h2 className="text-4xl font-bold text-center mt-10 text-gray-800">About Me</h2>
            <p className="text-center mx-auto mt-5 mb-3 text-gray-700 text-lg leading-relaxed">
                I’m a passionate and curious web developer with a knack for turning complex ideas into simple, elegant solutions.
                My journey has been fueled by creativity and a love for learning, and I’m excited to build projects that make a real impact.
            </p>
            <div className=" mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: My Journey */}
                    <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:bg-blue-100 hover:shadow-xl">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Programming Journey</h3>
                        <p className="text-gray-600">
                            My coding adventure began in high school with a simple "Hello, World!" in <span className='font-bold'>C</span>. That spark ignited a passion for creating, leading me to master languages like JavaScript, Python, and C++. From small scripts to full-stack web apps, I love turning ideas into reality with clean, efficient code.
                        </p>
                    </div>

                    {/* Card 2: What I Love to Do */}
                    <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:bg-blue-100 hover:shadow-xl">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">What I Enjoy Building</h3>
                        <p className="text-gray-600">
                            I thrive on projects that blend creativity and functionality, dynamic web apps, intuitive UIs, and robust backend systems. Full-stack development is my jam, but I'm always excited to tackle new frameworks or data-driven challenges that push my skills to the next level.
                        </p>
                    </div>

                    {/* Card 3: Life Outside Code */}
                    <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:bg-blue-100 hover:shadow-xl">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Beyond the Keyboard</h3>
                        <p className="text-gray-600">
                            When I'm not coding, you'll find me reading books, watching spiritual videos, or exploring thought-provoking stories that spark my imagination. These passions keep me inspired and balanced, often bringing new creativity into my development work.</p>
                    </div>
                </div>
                {/* Personal Touch Section */}
                <div className="mt-12 text-center">
                    <p className="text-lg text-gray-700 mb-2 mx-auto">
                        A passionate and curious web developer who turns complex ideas into simple, user-friendly solutions with creativity and care.                    </p>
                    <a
                        href="#contact"
                        className=" btn btn-lg my-3 bg-primary text-black rounded-sm  transition-colors duration-300"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;