import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  CardImg,
  Button,
} from "reactstrap";
import portfolio from "../img/projects/portfolio.PNG";
import news from "../img/projects/news.jpg";
import wiki from "../img/projects/wiki.PNG";
import todo from "../img/projects/todo.PNG";
import hyfrepo from "../img/projects/hyfrepo.PNG";
import reactForm from "../img/projects/reactForm.jpg";

const projects = (img, link) => (
  <Col sm="4">
    <Card id="news-card">
      <CardLink href={link} target="_blank">
        <CardImg top width="100%" src={img} />
      </CardLink>
    </Card>
  </Col>
);

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="center">
          <h2>My Testing Frameworks and Projects</h2>
        </Row>

        <Row className="mb-4">
          <Col sm="12">
            <Card>
              <CardBody>
                <CardTitle tag="h3">
                  Playwright-Cucumber-TypeScript Framework
                </CardTitle>
                <CardText>
                  A comprehensive test automation framework built for UI, API,
                  and database testing. This framework implements the BDD
                  approach using Cucumber and TypeScript with Playwright for
                  browser automation.
                </CardText>
                <CardText>
                  <strong>Features:</strong>
                  <ul>
                    <li>Page Object Model design pattern</li>
                    <li>API testing capabilities</li>
                    <li>Database integration for complete E2E testing</li>
                    <li>Parallel test execution</li>
                    <li>Comprehensive reporting</li>
                  </ul>
                </CardText>
                <Button
                  color="primary"
                  href="https://github.com/mahmutkaya/pw-cucumber-ts-api-ui"
                  target="_blank"
                >
                  View on GitHub
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col sm="12">
            <Card>
              <CardBody>
                <CardTitle tag="h3">
                  WinAppDriver Desktop Testing Framework
                </CardTitle>
                <CardText>
                  A test automation framework for Windows desktop applications
                  using WinAppDriver with Java and TestNG.
                </CardText>
                <CardText>
                  <strong>Features:</strong>
                  <ul>
                    <li>Page Object Model architecture</li>
                    <li>Maven dependency management</li>
                    <li>
                      Element identification strategies for desktop applications
                    </li>
                    <li>Custom reporting</li>
                  </ul>
                </CardText>
                <Button
                  color="primary"
                  href="https://github.com/mahmutkaya/windowsAppTest"
                  target="_blank"
                >
                  View on GitHub
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <h4>Previous Web Development Projects</h4>
        </Row>
        <Row>
          {projects(portfolio, "https://www.mahmutkaya.nl/")}
          {projects(news, "https://news-api-2019.herokuapp.com/")}
          {projects(wiki, "https://wiki-search-vanilla-js.netlify.com/")}
          {projects(todo, "https://todo-app-2018.netlify.com/")}
          {projects(
            hyfrepo,
            "https://mahmutkaya.github.io/hyf-javascript3/week3/indexPromise.html"
          )}
          {projects(reactForm, "https://grayscale-photos.netlify.com/")}
        </Row>
      </React.Fragment>
    );
  }
}

export default Projects;
