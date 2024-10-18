import React from 'react';

const Experience: React.FC = () => {
    return (
        <section className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Expériences</h2>
                <ul className="mt-4 space-y-6 text-center">
                    <li className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-medium">Développeur Fullstack - Häagen-Dazs</h3>
                        <p className="text-sm">Avril 2024 - Présent</p>
                        <p className="mt-1">VB .NET, SQL, JavaScript, Wonderware</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;
