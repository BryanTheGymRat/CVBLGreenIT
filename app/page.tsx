import Head from 'next/head';
import Header from '@/app/components/Header';
import About from '@/app/components/About';
import Experience from '@/app/components/Experience';
import Skills from '@/app/components/Skills';
import Contact from "@/app/components/Contact";
import Formation from "@/app/components/Formation";
import '@/app/styles/globals.css';

const Home: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Head>
                <title>CV de Bryan Lhomme</title>
                <meta name="description" content="Développeur Full-Stack" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="container mx-auto px-4 mt-4">
                <About />
                <Experience />
                <Formation />
                <Skills />
                <Contact />
            </main>

            <footer className="text-center mt-8 border-t border-gray-700 pt-4">
                <p className="text-sm">© 2024 Bryan Lhomme.</p>
            </footer>
        </div>
    );
};

export default Home;
