import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaLaravel, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiDotnet, SiVisualbasic} from 'react-icons/si';

const skillsData = [
    {
        category: 'Web',
        skills: [
            { name: '.NET', icon: <SiDotnet className="text-4xl" /> },
            { name: 'HTML', icon: <FaHtml5 className="text-4xl" /> },
            { name: 'CSS', icon: <FaCss3Alt className="text-4xl" /> },
            { name: 'JavaScript', icon: <FaJs className="text-4xl" /> },
            { name: 'TypeScript', icon: <SiTypescript className="text-4xl" /> },
            { name: 'Laravel', icon: <FaLaravel className="text-4xl" /> },
        ],
    },
    {
        category: 'Programming',
        skills: [
            { name: 'Java', icon: <FaJava className="text-4xl" /> },
            { name: 'Python', icon: <FaPython className="text-4xl" /> },
            { name: 'Visual Basic', icon: <SiVisualbasic className="text-4xl" /> },
        ],
    },
    {
        category: 'Databases',
        skills: [
            { name: 'SQL', icon: <FaNodeJs className="text-4xl" /> },
            { name: 'MongoDB', icon: <SiMongodb className="text-4xl" /> },
        ],
    },
];

const Skills: React.FC = () => {
    return (
        <section className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-center mb-4">{category.category}</h3>
                            <div className="flex justify-center space-x-4">
                                {category.skills.map((skill, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        {skill.icon}
                                        <p className="mt-2 text-sm">{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
