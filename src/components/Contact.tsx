import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {


  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl font-bold text-center mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          Get In Touch
        </h2>
        <p
          className={`text-center mb-12 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          I'm always open to discussing new projects, opportunities, or collaborations.
          Feel free to reach out!
        </p>

        <div className="max-w-2xl mx-auto">
          <div>
            <h3
              className={`text-2xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-600 mt-1" size={24} />
                <div>
                  <h4
                    className={`font-semibold mb-1 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Location
                  </h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Tunis, Sfax
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-blue-600 mt-1" size={24} />
                <div>
                  <h4
                    className={`font-semibold mb-1 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Email
                  </h4>
                  <a
                    href="mailto:amin.hammami@example.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    amin.hammami@supcom.tn
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Linkedin className="text-blue-600 mt-1" size={24} />
                <div>
                  <h4
                    className={`font-semibold mb-1 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    LinkedIn
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/amin-hammami/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    linkedin.com/in/amin-hammami
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Github className="text-blue-600 mt-1" size={24} />
                <div>
                  <h4
                    className={`font-semibold mb-1 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    GitHub
                  </h4>
                  <a
                    href="https://github.com/kinji-hakari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    github.com/kinji-hakari
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
