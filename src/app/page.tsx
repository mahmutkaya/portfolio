import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-blue-500 text-white p-4 m-4">
  If you can see this with blue background and white text, Tailwind is working!
</div>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm <span className="text-gradient">Mahmut Kaya</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
                QA Engineer
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
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
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-700">
                {/* Replace with actual profile image */}
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-6xl font-bold text-gray-600">
                  MK
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <div className="skill-icon">
                  <span className="text-2xl">{skill.icon}</span>
                </div>
                <h3 className="text-lg font-medium text-center">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience Highlights</h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.company} className="card p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <div className="text-gray-400">{exp.period}</div>
                </div>
                <div className="text-gray-300 mb-2">{exp.company}</div>
                <p className="text-gray-400">{exp.description}</p>
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
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in working together?</h2>
          <p className="text-gray-300 mb-8 text-lg">
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
