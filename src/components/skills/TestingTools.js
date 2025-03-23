import React, { Component } from "react";
import { Tooltip } from "react-tooltip";

import appiumLogo from "../../img/tech/appium.png";
import cucumberLogo from "../../img/tech/cucumber.webp";
import playwrightLogo from "../../img/tech/playwright.png";
import seleniumLogo from "../../img/tech/selenium.png";
import winappdriverLogo from "../../img/tech/winappdriver.png";

const testingTools = [
  appiumLogo,
  cucumberLogo,
  playwrightLogo,
  seleniumLogo,
  winappdriverLogo,
];

function getTestingToolName(testingTool) {
  const parts = testingTool.split("/").pop();
  return parts.split(".")[0];
}

class TestingTools extends Component {
  render() {
    return (
      <div className="testing-tools">
        <h5>Testing Tools:</h5>
        <div className="d-flex flex-wrap">
          {testingTools.map((testingTool, index) => {
            const toolName = getTestingToolName(testingTool);
            return (
              <div
                key={index}
                className="icons testing-tool-icons"
                data-tooltip-id={`testing-tool-${index}`}
              >
                <img
                  id={`tool-${toolName}`}
                  src={testingTool}
                  className="testing-tool-icon"
                  alt={toolName}
                  data-tooltip-content={toolName}
                />
                <Tooltip id={`testing-tool-${index}`} place="top">
                  {toolName}
                </Tooltip>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TestingTools;
