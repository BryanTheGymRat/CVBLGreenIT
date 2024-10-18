import React from 'react';

const Contact: React.FC = () => {
    return (
        <section className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
                <ul className="mt-4 space-y-4 text-center">
                    <li className="text-lg">Email: bryanlhommetravail@gmail.com</li>
                    <li className="text-lg">
                        LinkedIn: <a href="https://fr.linkedin.com/in/bryan-lhomme" className="text-blue-600">Mon profil</a>
                    </li>
                    <li className="text-lg">
                        GitHub: <a href="https://github.com/" className="text-blue-600">github.com/</a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Contact;
