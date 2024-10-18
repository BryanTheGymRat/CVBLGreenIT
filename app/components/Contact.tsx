import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const contactData = [
    {
        value: 'bryanlhommetravail@gmail.com',
        icon: <FaEnvelope className="text-4xl" />,
    },
    {
        value: 'Mon LinkedIn',
        link: 'https://fr.linkedin.com/in/bryan-lhomme',
        icon: <FaLinkedin className="text-4xl text-blue-600" />,
    },
    {
        value: 'Mon Github',
        link: 'https://github.com/bryanthegymrat',
        icon: <FaGithub className="text-4xl" />,
    },
];

const Contact: React.FC = () => {
    return (
        <section className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactData.map((item, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                            <div className="flex justify-center mb-4">
                                {item.icon}
                            </div>
                            {item.link ? (
                                <a href={item.link} className="text-blue-600 text-lg">
                                    {item.value}
                                </a>
                            ) : (
                                <p className="text-lg">{item.value}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
