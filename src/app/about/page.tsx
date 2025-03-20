import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>
        
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Who I Am</h2>
          <p className="text-gray-300 mb-6 text-lg">
            I'm Mahmut Kaya, an ISTQB certified Test Automation Engineer with 6 years of experience in Software Testing and web development, based in Leiden, Netherlands.
          </p>
          <p className="text-gray-300 mb-6 text-lg">
            I specialize in designing and implementing different automation frameworks from scratch for UI, API, and database testing across web, mobile, and desktop applications. My expertise includes Selenium, Playwright, WinAppDriver, Appium, Cucumber, Java, JavaScript/TypeScript, and SQL.
          </p>
          <p className="text-gray-300 text-lg">
            Since 2018, I've been mentoring and teaching automation tools, Java, and JavaScript to beginners and mid-level testers/developers, both online and offline. I've worked in several companies across different fields as a web developer and test automation engineer.
          </p>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">My Approach to QA</h2>
          <p className="text-gray-300 mb-6 text-lg">
            I believe that quality assurance is not just about finding bugs, but about preventing them from occurring in the first place. My approach combines thorough manual testing with robust automation frameworks to ensure comprehensive test coverage.
          </p>
          <p className="text-gray-300 mb-6 text-lg">
            I'm passionate about creating maintainable, scalable test automation solutions that provide real value to development teams. By implementing BDD frameworks with Cucumber, I help bridge the gap between technical and non-technical stakeholders, ensuring everyone has a clear understanding of the expected behavior.
          </p>
          <p className="text-gray-300 text-lg">
            My experience in both development and testing gives me a unique perspective on software quality, allowing me to collaborate effectively with developers and understand the challenges they face.
          </p>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Beyond Work</h2>
          <p className="text-gray-300 mb-6 text-lg">
            When I'm not testing software or writing code, I enjoy running and walking in nature. My current pace is around 4:52/km for approximately 15km distance. I prefer tea but also enjoy a good Turkish coffee.
          </p>
          <p className="text-gray-300 mb-6 text-lg">
            I'm fluent in multiple languages including Kurdish, Turkish, English, and Dutch, which helps me connect with people from diverse backgrounds and cultures.
          </p>
          <p className="text-gray-300 text-lg">
            Before my career in tech, I earned a Bachelor's degree in primary school education from Kastamonu University in Turkey and spent 5 years as a Turkish language teacher.
          </p>
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
