import React, { Component } from "react";

import TestingTools from "./TestingTools";
import Languages from "./Languages";
import DevTools from "./DevTools";

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <Languages />
        <DevTools />
        <TestingTools />
      </div>
    );
  }
}

export default Skills;
