import React, { Component } from "react";
import { Tooltip } from "react-tooltip";

const languages = ["Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"];

const languagesIcons = [
  "fab fa-java",
  "fab fa-js",
  "fab fa-js", // Using JS icon for TypeScript as there's no specific icon
  "fas fa-database",
  "fab fa-html5",
  "fab fa-css3-alt",
];

class Languages extends Component {
  render() {
    return (
      <div className="skills">
        <div className="languages">
          <h5>Languages I speak:</h5>
          <div className="d-flex flex-wrap">
            {languages.map((lang, index) => (
              <div
                className="icons"
                key={index}
                data-tooltip-id={`language-${index}`}
              >
                <i className={languagesIcons[index]}></i>
                <Tooltip id={`language-${index}`} place="top">
                  {lang}
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Languages;
