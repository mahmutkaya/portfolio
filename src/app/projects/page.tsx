import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
        
        <p className="text-gray-300 text-lg mb-12 text-center max-w-3xl mx-auto">
          Here are some of the projects I've worked on throughout my career as a QA Engineer and previously as a web developer.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="card overflow-hidden">
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <div className="text-4xl">{project.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Professional Projects</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            In my professional career as a QA Engineer, I've worked on numerous projects for clients including:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {professionalProjects.map((project) => (
              <div key={project.client} className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{project.client}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-300 text-lg mb-8">
            Interested in collaborating on a project or need help with test automation?
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

type Project = {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  link?: string; // Make it optional with the ? symbol
};

const projects: Project[] = [
  {
    title: "Automation Framework for Web Applications",
    description: "A comprehensive test automation framework using Playwright, TypeScript, and Cucumber for web applications.",
    technologies: ["Playwright", "TypeScript", "Cucumber", "BDD", "CI/CD"],
    icon: "🎭",
  },
  {
    title: "Mobile Testing Framework",
    description: "Developed a mobile testing framework using Appium for both Android and iOS applications.",
    technologies: ["Appium", "Java", "TestNG", "Mobile Testing"],
    icon: "📱",
  },
  {
    title: "Desktop Application Testing",
    description: "Created a framework for Windows Desktop application testing using WinAppDriver and Page Object Model.",
    technologies: ["WinAppDriver", "Java", "TestNG", "POM"],
    icon: "🖥️",
  },
  {
    title: "API Testing Framework",
    description: "Built a robust API testing framework using Rest-assured and Java for RESTful services.",
    technologies: ["Rest-assured", "Java", "JSON", "API Testing"],
    icon: "🔄",
  },
  {
    title: "React Todo App",
    description: "A simple todo application built with React to demonstrate front-end development skills.",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    icon: "📝",
  },
  {
    title: "Wiki Search Application",
    description: "A web application that allows users to search Wikipedia and view results.",
    technologies: ["JavaScript", "HTML", "CSS", "API Integration"],
    icon: "🔍",
  },
];

const professionalProjects = [
  {
    client: "Elsevier",
    description: "Converted a Selenium & Java framework to Playwright with Cucumber and TypeScript. Mentored developers on automation practices.",
    technologies: ["Playwright", "TypeScript", "Cucumber", "Java", "Rest-assured"],
  },
  {
    client: "Please",
    description: "Initialized a framework from scratch with Playwright, Cucumber, and TypeScript for UI, API, and DB testing.",
    technologies: ["Playwright", "TypeScript", "Cucumber", "API Testing", "Database Testing"],
  },
  {
    client: "spriteCloud",
    description: "Converted a JavaScript & WebdriverIO framework to Java & Serenity for improved test stability and reporting.",
    technologies: ["Java", "Serenity", "Cucumber", "Rest-assured"],
  },
  {
    client: "Woonenzo",
    description: "Developed BDD frameworks from scratch for web and mobile applications with comprehensive CI/CD integration.",
    technologies: ["Java", "MySQL", "TypeScript", "Jenkins", "Docker", "Selenium", "Cucumber", "Appium", "Playwright"],
  },
];
