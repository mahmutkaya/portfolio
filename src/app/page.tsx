import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Hi, I'm <span className="gradient-text">Mahmut Kaya</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
                QA Engineer
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                ISTQB certified Test Automation Engineer with 6 years of experience in Software Testing and web development. I design and implement automation frameworks from scratch for UI, API, and database testing.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/resume" className="btn btn-primary">
                  View Resume
                </Link>
                <Link href="/projects" className="btn btn-outline">
                  See My Work
                </Link>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                {/* Profile image or initials */}
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl font-bold text-white">
                  MK
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="section-title gradient-text">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="flex flex-col items-center animate-slide-up" 
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className="skill-icon mb-3">
                  <span>{skill.icon}</span>
                </div>
                <h3 className="font-medium text-center">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="section-title gradient-text">Experience Highlights</h2>
          <div className="space-y-8 mt-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company} 
                className="card animate-slide-up" 
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="card-header">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="card-title text-primary">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-foreground/80 font-medium">{exp.company}</p>
                </div>
                <div className="card-content">
                  <p className="text-foreground/70">{exp.description}</p>
                </div>
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted to-background">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Interested in working together?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            I'm always open to discussing new projects, testing challenges, or automation opportunities.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

const skills = [
  { name: 'Java', icon: '☕' },
  { name: 'JavaScript', icon: 'JS' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'Selenium', icon: '🔍' },
  { name: 'Playwright', icon: '🎭' },
  { name: 'Cucumber', icon: '🥒' },
  { name: 'REST API', icon: '🔄' },
  { name: 'SQL', icon: '📊' },
  { name: 'Git', icon: '📝' },
  { name: 'CI/CD', icon: '🔄' },
  { name: 'Appium', icon: '📱' },
  { name: 'WinAppDriver', icon: '🖥️' },
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
