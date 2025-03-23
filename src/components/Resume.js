import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

class Resume extends Component {
  render() {
    return (
      <div>
        <h1>My Professional Experience</h1>
        <Card className="mb-4">
          <CardBody>
            <h3>QA Automation Engineer at Merych</h3>
            <p className="text-muted">December 2022 - Present</p>
            <p>Started my own testing company with two other friends.</p>
            <h5>Projects I worked on:</h5>
            <ul>
              <li>
                <strong>Elsevier:</strong> Involved in converting a selenium & java framework
                to the playwright - cucumber and typescript. Had sessions
                with developers to help them understand the automation and
                write/maintain their own scenarios. Also worked on api side using
                java and rest-assured.
              </li>
              <li>
                <strong>Please:</strong> Initialized a framework from scratch with playwright -
                cucumber and typescript for ui, api and db. Also mentored their
                functional tester and developers to write new scenarios and
                maintain the framework.
              </li>
            </ul>
          </CardBody>
        </Card>

        <Card className="mb-4">
          <CardBody>
            <h3>QA Automation Engineer at spriteCloud, Amsterdam</h3>
            <p className="text-muted">August 2021 - December 2022</p>
            <p>Involved in converting a js & webdriver-io framework to the java & serenity.</p>
            <p>Technologies used include: Java, Serenity, Cucumber, Rest-assured</p>
          </CardBody>
        </Card>

        <Card className="mb-4">
          <CardBody>
            <h3>QA Automation Engineer at Woonenzo, Tilburg</h3>
            <p className="text-muted">November 2020 — August 2021</p>
            <ul>
              <li>Involved in developing BDD frameworks from scratch.</li>
              <li>Developed frameworks for web and mobile applications.</li>
            </ul>
            <p>Technologies used include: Java, MySql, TypeScript, Jenkins, Docker, Selenium, Cucumber, Appium, Playwright</p>
          </CardBody>
        </Card>

        <Card className="mb-4">
          <CardBody>
            <h3>Automation Engineer at Cerme ICT, Rijswijk</h3>
            <p className="text-muted">July 2020 — November 2020</p>
            <p>Developed a framework for Windows Desktop application from scratch, following Page Object Model using WinAppDriver and defined dependencies using Maven.</p>
            <p>Technologies used include: Java, WinAppDriver, Appium, TestNG</p>
          </CardBody>
        </Card>

        <Card className="mb-4">
          <CardBody>
            <h3>Web Developer at Plek</h3>
            <p className="text-muted">June 2019 — October 2019</p>
            <p>Five months front-end and last month back-end.</p>
            <p>Technologies used include: TypeScript, React.js, Angular.js, HTML, CSS</p>
          </CardBody>
        </Card>

        <h2>Education</h2>
        <Card className="mb-4">
          <CardBody>
            <h3>Primary school teaching, Kastamonu University, Turkey</h3>
            <p className="text-muted">2007 — 2012</p>
            <p>Bachelor's degree (BSc) in primary school education</p>
          </CardBody>
        </Card>

        <p>
          <Link to="/files/CV - Mahmut Kaya.pdf" target="_blank" download>
            Click to download a PDF version of my resume.
          </Link>
        </p>
      </div>
    );
  }
}

export default Resume;