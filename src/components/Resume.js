import React, { Component } from "react";
import { Link } from "react-router-dom";

class Resume extends Component {
  render() {
    return (
      <div>
        <h1>working on it...</h1>
        <p>
          <Link to="/files/CV - Mahmut Kaya.pdf" target="_blank" download>
            click to download a pdf version of my resume.
          </Link>
        </p>
      </div>
    );
  }
}

export default Resume;
