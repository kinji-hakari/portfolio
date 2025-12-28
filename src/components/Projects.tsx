import { ExternalLink, Github, Filter } from 'lucide-react';
import { useState } from 'react';

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Phishing Email Detection Model',
      description:
        'Advanced machine learning and deep learning model for detecting phishing emails using natural language processing and pattern recognition techniques.',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'NLP', 'Machine Learning', 'Deep Learning'],
      github: 'https://github.com/kinji-hakari/Phishing-Detection-using-ML-DL',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'security',
    },
    {
      title: 'MITRE RAG SOC Assistant',
      description:
        'AI-powered Security Operations Center assistant using MITRE ATT&CK framework and FAISS for rapid threat intelligence retrieval and analysis.',
      technologies: ['Python', 'FAISS', 'AI/ML', 'MITRE ATT&CK', 'RAG', 'Cybersecurity'],
      github: 'https://github.com/kinji-hakari/MITRE-RAG-SOC-Assistant',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'security',
    },
    {
      title: 'Firewall Rule Analyzer',
      description:
        'Automated firewall rule analyzer that helps network administrators identify redundancies, conflicts, and optimization opportunities in firewall configurations.',
      technologies: ['Python', 'jinja2', 'Network Security', 'Automation', 'Firewall Analysis'],
      github: 'https://github.com/kinji-hakari/fw_analyze_rules',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'networking',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'security', label: 'Security' },
    { id: 'networking', label: 'Networking' },
    { id: 'ai', label: 'AI/ML' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl font-bold text-center mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          Projects
        </h2>
        <p
          className={`text-center mb-12 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          A selection of my recent work in cybersecurity, network analysis, and artificial intelligence
        </p>

        

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 text-xs rounded ${
                        darkMode
                          ? 'bg-gray-700 text-blue-400'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
