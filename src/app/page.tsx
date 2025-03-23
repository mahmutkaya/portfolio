import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 animate-fade-in relative">
        <div className="absolute inset-0 bg-background-secondary opacity-30 z-0">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-text-primary">
                Hi, I'm <span className="text-gradient">Mahmut Kaya</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-text-secondary mb-6 font-heading">
                QA Engineer
              </h2>
              <p className="text-text-primary mb-8 text-lg">
                ISTQB certified Test Automation Engineer with 6 years of experience in Software Testing and web development. I design and implement automation frameworks from scratch for UI, API, and database testing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/resume" className="btn btn-primary">
                  View Resume
                </Link>
                <Link href="/projects" className="btn btn-outline">
                  See My Work
                </Link>
              </div>
              <div className="flex mt-8 gap-4">
                <a href="https://github.com/mahmutkaya" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/mahmut-kaya" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="mailto:contact@mahmutkaya.com" className="text-text-secondary hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary border-opacity-30 shadow-lg shadow-primary/20 animate-float">
                <Image 
                  src="/images/profile-placeholder.jpg" 
                  alt="Mahmut Kaya" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-background-secondary bg-opacity-70 backdrop-blur-sm">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient font-heading">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="flex flex-col items-center animate-slide-up" 
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="skill-icon group hover:scale-105 transition-all duration-300">
                  {skill.svg ? (
                    <Image 
                      src={skill.svg} 
                      alt={skill.name} 
                      width={40} 
                      height={40} 
                      className="group-hover:animate-spin-slow"
                    />
                  ) : (
                    <span className="text-2xl">{skill.icon}</span>
                  )}
                </div>
                <h3 className="text-lg font-medium text-center mt-2 text-text-primary">{skill.name}</h3>
                <div className="w-full bg-border h-2 rounded-full mt-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-full rounded-full animate-pulse"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient font-heading">Experience Highlights</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company} 
                className="card p-6 animate-slide-up hover:border-primary/30 transition-all duration-300" 
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary font-heading">{exp.role}</h3>
                  <div className="text-text-secondary bg-background px-3 py-1 rounded-full text-sm mt-2 md:mt-0 border border-border">{exp.period}</div>
                </div>
                <div className="text-text-primary mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {exp.company}
                </div>
                <p className="text-text-secondary">{exp.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/resume" className="btn btn-primary">
              View Full Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-b from-background-secondary to-background relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern-dots"></div>
        </div>
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-gradient font-heading">Interested in working together?</h2>
          <p className="text-text-primary mb-8 text-lg">
            I'm always open to discussing new projects, testing challenges, or automation opportunities.
          </p>
          <Link href="/contact" className="btn btn-primary hover:scale-105 transition-transform duration-300">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

const skills = [
  { name: 'Java', icon: null, svg: '/icons/java.svg', level: 90 },
  { name: 'JavaScript', icon: null, svg: '/icons/javascript.svg', level: 85 },
  { name: 'TypeScript', icon: null, svg: '/icons/typescript.svg', level: 80 },
  { name: 'Selenium', icon: null, svg: '/icons/selenium.svg', level: 95 },
  { name: 'Playwright', icon: '🎭', level: 90 },
  { name: 'Cucumber', icon: null, svg: '/icons/cucumber.svg', level: 85 },
  { name: 'REST API', icon: '🔄', level: 90 },
  { name: 'SQL', icon: '📊', level: 75 },
  { name: 'Git', icon: null, svg: '/icons/git.svg', level: 85 },
  { name: 'CI/CD', icon: null, svg: '/icons/jenkins.svg', level: 80 },
  { name: 'Appium', icon: '📱', level: 70 },
  { name: 'WinAppDriver', icon: '🖥️', level: 65 },
  { name: 'Cypress', icon: '⚡', level: 75 },
];

const experiences = [
  {
    role: 'QA Automation Engineer',
    company: 'Merych',
    period: 'December 2022 - Present',
    description: 'Started my own testing company with two other friends. Working on projects for clients like Elsevier and Please, implementing automation frameworks with Playwright, Cucumber, and TypeScript.',
  },
  {
    role: 'QA Automation Engineer',
    company: 'spriteCloud, Amsterdam',
    period: 'August 2021 - December 2022',
    description: 'Involved in converting a JavaScript & WebdriverIO framework to Java & Serenity. Technologies used include Java, Serenity, Cucumber, and Rest-assured.',
  },
  {
    role: 'QA Automation Engineer',
    company: 'Woonenzo, Tilburg',
    period: 'November 2020 - August 2021',
    description: 'Developed BDD frameworks from scratch for web and mobile applications using Java, MySQL, TypeScript, Jenkins, Docker, Selenium, Cucumber, Appium, and Playwright.',
  },
];
