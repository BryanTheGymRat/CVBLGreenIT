import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-900 text-white py-12 text-center">
            <h1 className="text-4xl font-bold">Bryan Lhomme</h1>
            <p className="mt-4 text-xl">
                Développeur Full-Stack chez{' '}
                <a
                    href="https://www.haagen-dazs.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                >
                    Häagen-Dazs
                </a>
            </p>
            {/*<img*/}
            {/*    src="/path/to/your/photo.jpg"*/}
            {/*    alt="Bryan Lhomme"*/}
            {/*    className="mt-4 rounded-full w-32 h-32 object-cover mx-auto"*/}
            {/*/>*/}
        </header>
    );
};

export default Header;
