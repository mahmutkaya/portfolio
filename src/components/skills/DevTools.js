import React, { Component } from "react";
import { Tooltip } from "react-tooltip";

const devTools = [
  "Git/Github",
  "Selenium",
  "Playwright",
  "Cucumber",
  "Appium",
  "Jenkins",
  "Docker",
];

const devToolsIcons = ["fab fa-git", "fab fa-jenkins", "fab fa-docker"];

class DevTools extends Component {
  render() {
    return (
      <div className="dev-tools">
        <h5>Dev Tools:</h5>
        <div className="d-flex flex-wrap">
          {devTools.map((tool, index) => (
            <div
              className="icons"
              key={index}
              data-tooltip-id={`tool-${index}`}
            >
              <i className={devToolsIcons[index]}></i>
              <Tooltip id={`tool-${index}`} place="top">
                {tool}
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DevTools;
