import { GraduationCap, Briefcase, Award, Languages, Code } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const skills = {
     securityNetworks: [
      'SOC Operations', 'Suricata', 'Snort', 'Wireshark', 'Splunk',
      'SGUIL', 'Kibana', 'Autopsy', 'Huawei Security Gateway (VPN & Firewall)',
      'SELinux', 'Ansible', 'Packet Tracer', 'OptiSystem'
    ],
    dataScienceAI: [
      'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch',
      'ARIMA', 'SARIMA', 'Prophet',' TCN',' VAR',
      'TF-IDF', 'Doc2Vec', 'BERT', 'SpaCy', 'LIME'
    ],
    programmingLanguages: [
      'Python', 'C', 'C++', 'MATLAB', 'JavaScript/TypeScript', 'SQL', 'Object-Oriented Programming (OOP)'
    ],
    
    
    frontend: [
      'HTML5', 'CSS3', 'React.js', 'React Native'
    ],
    backend: [
      'Node.js', 'Express.js', 'REST APIs'
    ],
   
  };

  const education = [
    {
      degree: 'Engineering Degree in ICT',
      school: 'Higher School of Communications (Sup\'Com), Tunis',
      period: '2023 - Present',
      description: 'Specializing in telecommunications, network security, and artificial intelligence',
    },
  ];

  const experience = [
    {
      title: 'Cybersecurity Intern',
      period: 'Sep 25 – Dec 25',
      company: '6NLG',
      bullets: [
        'Automated firewall rule audits to detect anomalies, improving security and compliance.'
      ],
    },
    {
      title: 'AI/RAN Intern',
      period: 'Jun 25 – Aug 25',
      company: 'Huawei',
      bullets: [
        'Conducted a technical study on 4G Radio Access Network (RAN) and network layers, applying time series forecasting models such as S/ARIMA, Prophet, and TCN.'
      ],
    },
    {
      title: 'ICT Intern',
      period: 'Jul 24 – Aug 24',
      company: 'Tunisie Telecom',
      bullets: [
        'Assisted in MSAN configuration, fiber-optic transmission, and RAN operations (2G/3G/4G), while supporting drive-test campaigns for network quality assessment'
      ],
    },
  ];

  const certifications = [
    { label: 'Ethical Hacker', url: 'https://www.credly.com/badges/e5b087b5-61e2-4ce4-930f-3493e0d1025a/public_url' },
    { label: 'Red Hat Enterprise Linux Automation with Ansible', url: 'https://www.credly.com/badges/aa34b1d9-3d80-4e29-9eac-6cf053e03e55/public_url' },
    { label: 'Red Hat System Administration II', url: 'https://www.credly.com/badges/31ca8755-d5d7-4e79-92e4-3b31789f74be/public_url' },
    { label: 'Wireless communication (Matlab)', url: 'https://www.linkedin.com/in/amin-hammami/details/certifications/1756163597567/single-media-viewer/?profileId=ACoAAE5QYcoBmHvw7XQYRkA_C47irmkmb6ak9yo' },
    { label: 'AWS Cloud Practitioner', url: 'https://www.credly.com/badges/5387b298-5da4-40b3-abc4-37a22e30e53b/public_url' },
    { label: 'Introduction to Networking', url: 'https://www.linkedin.com/in/amin-hammami/details/certifications/1765483647677/single-media-viewer/?type=DOCUMENT&profileId=ACoAAE5QYcoBmHvw7XQYRkA_C47irmkmb6ak9yo' },
    { label: 'Test of English for International Communication (TOEIC) — Score: 850/990, Proficiency level: B2' },

  ];

  const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'French', level: 'Fluent' },
    { name: 'English', level: 'Fluent' },
  ];

  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl font-bold text-center mb-12 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div
            className={`p-6 rounded-lg ${
              darkMode ? 'bg-gray-900' : 'bg-blue-50'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-blue-600" size={28} />
              <h3
                className={`text-2xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Education
              </h3>
            </div>
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h4
                  className={`text-xl font-semibold mb-1 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {edu.degree}
                </h4>
                <p
                  className={`font-medium mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {edu.school}
                </p>
                <p
                  className={`text-sm mb-2 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {edu.period}
                </p>
                <p
                  className={darkMode ? 'text-gray-300' : 'text-gray-700'}
                >
                  {edu.description}
                </p>
              </div>
            ))}

            <div className="mt-6">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-blue-600" size={24} />
                <h4
                  className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Experience
                </h4>
              </div>

              {experience.map((exp, idx) => (
                <div key={idx} className="mb-4">
                  <p className={`text-lg font-semibold mb-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {exp.title}
                    <span className={`ml-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      | {exp.period} At {exp.company}
                    </span>
                  </p>

                  {exp.bullets.map((b, i) => (
                    <p key={i} className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {b}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div
            className={`p-6 rounded-lg ${
              darkMode ? 'bg-gray-900' : 'bg-blue-50'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Languages className="text-blue-600" size={28} />
              <h3
                className={`text-2xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Languages
              </h3>
            </div>
            {languages.map((lang, index) => (
              <div key={index} className="flex justify-between items-center mb-3">
                <span
                  className={`font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {lang.name}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    darkMode
                      ? 'bg-blue-900 text-blue-300'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {lang.level}
                </span>
              </div>
            ))}

            <div className="mt-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-blue-600" size={24} />
                <h4
                  className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Certifications
                </h4>
              </div>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-blue-600 mt-1">•</span>
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`ml-1 ${darkMode ? 'text-blue-300 hover:underline' : 'text-blue-600 hover:underline'}`}
                      >
                        {cert.label}
                      </a>
                    ) : (
                      <span className="ml-1">{cert.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`p-6 rounded-lg ${
            darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-white'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-blue-600" size={28} />
            <h3
              className={`text-2xl font-semibold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Technical Skills
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h4
                  className={`text-lg font-semibold mb-3 capitalize ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode
                          ? 'bg-gray-800 text-gray-300'
                          : 'bg-white text-gray-700 shadow-sm'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
