import React from 'react';

const Skills = () => {
    const skills = [
        {
            category: 'Frontend',
            items: [
                { name: 'HTML', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg', color: '#E34F26' },
                { name: 'CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg', color: '#1572B6' },
                { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg', color: '#38B2AC' },
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg', color: '#F7DF1E' },
                { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg', color: '#61DAFB' },
            ],
        },
        {
            category: 'Backend',
            items: [
                { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg', color: '#339933' },
                { name: 'Express', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg', color: '#3776AB' },
                { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg', color: '#47A248' },
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg', color: '#3776AB' },
                { name: 'C++', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cplusplus.svg', color: '#00599C' },
            ],
        },
        {
            category: 'Tools',
            items: [
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg', color: '#F05032' },

                { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg', color: '#181717' },
            ],
        },
    ];

    return (
        <section className=" pt-5 max-w-11/12 mx-auto">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Skills</h2>

                {skills.map((category, idx) => (
                    <div key={idx} className="mb-12">
                        <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">{category.category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {category.items.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md cursor-pointer
                             transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                                    style={{ backgroundColor: skill.color, color: skill.name === 'JavaScript' ? '#000' : '#fff' }} // JS needs black text for contrast
                                    title={skill.name}
                                >
                                    <img
                                        src={skill.icon}
                                        alt={`${skill.name} icon`}
                                        className="w-12 h-12 mb-3 filter brightness-0 invert" // invert for black icons on colored bg
                                        style={skill.name === 'Express' ? { filter: 'none', width: '36px', height: '36px' } : {}} // express icon better without filter & smaller
                                    />
                                    <span className="font-semibold text-lg">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
