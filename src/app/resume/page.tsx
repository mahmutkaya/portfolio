import Link from 'next/link';

export default function Resume() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center">Resume</h1>
        
        <div className="mb-8 text-center">
          <a 
            href="/resume.pdf" 
            download
            className="btn btn-primary"
          >
            Download PDF Resume
          </a>
        </div>
        
        {/* About Section */}
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Mahmut Kaya</h2>
          <h3 className="text-xl text-gray-400 mb-6">QA Engineer</h3>
          
          <p className="text-gray-300 mb-6">
            ISTQB certified, Test Automation Engineer with 6 years of experience 
            in Software Testing and web development and 5 years of Turkish 
            language teaching.
          </p>
          
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Designed and implemented different automation frameworks 
            from scratch for ui, api and db (web, mobile and desktop apps).</li>
            <li>Used Selenium, Playwright, WinappDriver (for desktop app), 
            Appium, Cucumber, Java, JavaScript & Typescript and SQL.</li>
            <li>Mentoring and teaching automation tools, Java and JavaScript to 
            beginners and medior level testers/developers since 2018 online 
            and offline.</li>
            <li>Worked in several companies in different fields as web-developer 
            and test automation engineer.</li>
          </ul>
        </div>
        
        {/* Employment History */}
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Employment History</h2>
          
          <div className="space-y-8">
            {/* Merych */}
            <div className="timeline-item">
              <h3 className="text-xl font-bold">QA Automation Engineer at Merych</h3>
              <p className="text-gray-400 mb-2">December 2022 - Present</p>
              <p className="text-gray-300 mb-4">Started my own testing company with two other friends.</p>
              <p className="text-gray-300 mb-2">Projects I worked on:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><span className="font-semibold">Elsevier:</span> Involved in converting a selenium & java framework 
                to the playwright - cucumber and typescript. Had sessions 
                with developers to help them understand the automation and 
                write/maintain their own scenarios. Also worked on api side using 
                java and rest-assured.</li>
                <li><span className="font-semibold">Please:</span> Initialized a framework from scratch with playwright - 
                cucumber and typescript for ui, api and db. Also mentored their 
                functional tester and developers to write new scenarios and 
                maintain the framework.</li>
              </ul>
            </div>
            
            {/* spriteCloud */}
            <div className="timeline-item">
              <h3 className="text-xl font-bold">QA Automation Engineer at spriteCloud, Amsterdam</h3>
              <p className="text-gray-400 mb-2">August 2021 - December 2022</p>
              <p className="text-gray-300 mb-4">Involved in converting a js & webdriver-io framework to the java & serenity.</p>
              <p className="text-gray-300">Technologies used include:</p>
              <p className="text-gray-300">Java, Serenity, Cucumber, Rest-assured</p>
            </div>
            
            {/* Woonenzo */}
            <div className="timeline-item">
              <h3 className="text-xl font-bold">QA Automation Engineer at Woonenzo, Tilburg</h3>
              <p className="text-gray-400 mb-2">November 2020 — August 2021</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Involved in developing BDD frameworks from scratch.</li>
                <li>Developed frameworks for web and mobile applications.</li>
              </ul>
              <p className="text-gray-300 mt-2">Technologies used include:</p>
              <p className="text-gray-300">Java, MySql, TypeScript, Jenkins, Docker, Selenium, Cucumber, Appium, Playwright</p>
            </div>
            
            {/* Cerme ICT */}
            <div className="timeline-item">
              <h3 className="text-xl font-bold">Automation Engineer at Cerme ICT, Rijswijk</h3>
              <p className="text-gray-400 mb-2">July 2020 — November 2020</p>
              <p className="text-gray-300 mb-4">Developed a framework for Windows Desktop application from scratch, following Page Object Model using WinAppDriver and defined dependencies using Maven.</p>
              <p className="text-gray-300">Technologies used include:</p>
              <p className="text-gray-300">Java, WinAppDriver, Appium, TestNG</p>
            </div>
            
            {/* Plek */}
            <div className="timeline-item">
              <h3 className="text-xl font-bold">Web Developer at Plek</h3>
              <p className="text-gray-400 mb-2">June 2019 — October 2019</p>
              <p className="text-gray-300 mb-4">Five months front-end and last month back-end.</p>
              <p className="text-gray-300">Technologies used include:</p>
              <p className="text-gray-300">TypeScript, React.js, Angular.js, HTML, CSS</p>
            </div>
          </div>
        </div>
        
        {/* Education */}
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="timeline-item">
            <h3 className="text-xl font-bold">Primary school teaching, Kastamonu University, Turkey</h3>
            <p className="text-gray-400 mb-2">2007 — 2012</p>
            <p className="text-gray-300">Bachelor's degree (BSc) in primary school education</p>
          </div>
        </div>
        
        {/* Skills */}
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div key={skill} className="bg-gray-800 rounded-lg p-3 text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>
        
        {/* Languages */}
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {languages.map((language) => (
              <div key={language} className="bg-gray-800 rounded-lg p-3 text-center">
                {language}
              </div>
            ))}
          </div>
        </div>
        
        {/* Hobbies */}
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Hobbies</h2>
          <p className="text-gray-300">
            I like running and walking in nature. My current pace is ~4:52/km for ~15km distance, prefer tea but like to drink Turkish coffee too :)
          </p>
        </div>
        
        {/* Contact Info */}
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-4">
            <p className="text-gray-300">
              <span className="font-semibold">Location:</span> Leiden, 2315 AC, Netherlands
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Email:</span> mahmutkaya.nl@gmail.com
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Phone:</span> +31 686433636
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/contact" className="btn btn-primary">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

const skills = [
  'Java',
  'JavaScript',
  'TypeScript',
  'SQL',
  'Selenium',
  'Cucumber',
  'WinAppDriver',
  'Playwright',
  'Cypress',
  'Rest-assured',
  'TestNG',
  'JUnit',
  'Git',
  'CI/CD',
];

const languages = [
  'Kurdish',
  'Turkish',
  'English',
  'Dutch',
];
