import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import { Tooltip } from "react-tooltip";
import {
  languages,
  languagesIcons,
  devTools,
  devToolsIcons
} from "../logic/info";

class MainPage extends Component {
  render() {
    return (
      <Row>
        <Col sm={{ size: 8, order: 0, offset: 2 }}>
          <div className="greeting">
            <h1>Hi, my name is Mahmut Kaya.</h1>
            <h3>I am a QA Automation Engineer.</h3>
            <p>
              I design and implement test automation frameworks, and I love what I do.
            </p>
            <p>
              Feel free to take a look at my latest projects on the{" "}
              <Link to="/Projects">web portfolio page.</Link>
            </p>
          </div>
          <div className="skills">
            <div className="languages">
              <h5>Languages I speak:</h5>
              <div className="d-flex flex-wrap">
                {languages.map((lang, index) => (
                  <div className="icons" key={index} data-tooltip-id={`language-${index}`}>
                    <i className={languagesIcons[index]}></i>
                    <Tooltip id={`language-${index}`} place="top">
                      {lang}
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>
            <div className="dev-tools">
              <h5>Dev Tools:</h5>
              <div className="d-flex flex-wrap">
                {devTools.map((tool, index) => (
                  <div className="icons" key={index} data-tooltip-id={`tool-${index}`}>
                    <i className={devToolsIcons[index]}></i>
                    <Tooltip id={`tool-${index}`} place="top">
                      {tool}
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
        <Col sm={{ size: 2, offset: 0 }} className="buttons">
          <Button outline color="secondary">
            I need testing services
          </Button>
          <Button outline color="secondary">
            I am looking to hire
          </Button>
        </Col>
      </Row>
    );
  }
}

export default MainPage;