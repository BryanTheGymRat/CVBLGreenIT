import React from 'react';

const About: React.FC = () => {
    return (
        <section className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">À propos</h2>
                <div className="bg-gray-800 p-8 rounded-lg shadow-md">
                    <p className="mt-4 text-lg text-center">
                        Je suis Bryan Lhomme, 20 ans et je suis actuellement en troisième année de BUT informatique.
                    </p>
                    <p className="mt-4 text-lg text-center">
                        J'effectue mon alternance chez Häagen-Dazs et l'entreprise m'offre l'opportunité d'étoffer mes compétences dans diverses technologies et me permet d'améliorer mes qualités de développeur tout en abordant un contexte industriel / agroalimentaire.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
