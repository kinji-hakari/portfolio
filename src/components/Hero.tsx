import { Github, Linkedin, Mail, Download } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-16 ${
        darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1
              className={`text-5xl md:text-6xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Amin Hammami
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6">
              ICT Engineering Student
            </h2>
            <p
              className={`text-lg md:text-xl mb-8 max-w-2xl ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Final-year ICT engineering student at the Higher School of Communications in Tunis,
              interested in telecommunications, network security, and artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/amin-hammami/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="https://github.com/amin-hammami"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                  darkMode
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-gray-800 hover:bg-gray-900 text-white'
                }`}
              >
                <Github size={20} />
                GitHub
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                  darkMode
                    ? 'border-2 border-gray-700 text-gray-300 hover:bg-gray-800'
                    : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div
              className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-200'
              }`}
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/portfolio/Amin.jpg"
                  alt="Professional placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
