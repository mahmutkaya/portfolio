import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import { socialAccounts, socialAccountLinks } from "../logic/info";
import { skills } from "../logic/utilities";
import profilePhoto from "../img/profilePhoto.png";

class AboutMe extends Component {
  render() {
    return (
      <div id="about-me" className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              id="profile-photo"
              src={profilePhoto}
              className="card-img"
              alt="profile"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">About me</h2>
              <Card className="mb-4 bg-light">
                <CardBody>
                  <p>
                    ISTQB certified Test Automation Engineer with 6 years of
                    experience in Software Testing, 1 year of web development
                    and 5 years of Turkish language teaching.
                  </p>
                  <ul>
                    <li>
                      Designed and implemented different automation frameworks
                      from scratch for UI and API (web, mobile and desktop
                      apps).
                    </li>
                    <li>
                      Used Selenium, Playwright, WinAppDriver (for desktop app),
                      Appium, Cucumber, Java, JavaScript & TypeScript.
                    </li>
                    <li>
                      Mentoring & teaching automation tools, Java and JavaScript
                      to beginners and medior level testers/developers since
                      2018.
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </div>
            <div class="award-1">
              <i class="fas fa-laptop fa-3x"></i>
              <h3>Automation Expert</h3>
              <p>
                Designing and implementing robust automation frameworks that
                enable efficient testing across multiple platforms and
                technologies.
              </p>
            </div>
            <div class="award-2">
              <i class="fas fa-graduation-cap fa-3x"></i>
              <h3>Technical Mentor</h3>
              <p>
                Sharing knowledge and helping others grow through focused
                mentoring sessions on test automation practices and programming.
              </p>
            </div>
            <div class="award-3">
              <i class="fas fa-code-branch fa-3x"></i>
              <h3>Framework Specialist</h3>
              <p>
                Creating maintainable, scalable test automation architectures
                for UI, API, and database testing.
              </p>
            </div>
            <div className="social-accounts">
              {skills(socialAccounts, "", socialAccountLinks)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
