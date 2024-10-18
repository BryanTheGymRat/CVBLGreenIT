import React from 'react';

const Formation: React.FC = () => {
    return (
        <section className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Formation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-center mb-4">Lycée André Malraux</h3>
                        <p className="text-center">Baccalauréat Général | Maths - NSI</p>
                        <p className="text-center text-sm mt-2">2019 - 2022</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-center mb-4">BUT Informatique</h3>
                        <p className="text-center">IUT de Lens</p>
                        <p className="text-center text-sm mt-2">2022 - Présent</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Formation;
