import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import Skills from "./skills/Skills";

const MainPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

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
            <Link to="/projects">web portfolio page.</Link>
          </p>
        </div>
        <Skills />
      </Col>
      <Col sm={{ size: 2, offset: 0 }} className="buttons">
        <Button outline color="secondary" onClick={handleButtonClick}>
          I need testing services
        </Button>
        <Button outline color="secondary" onClick={handleButtonClick}>
          I am looking to hire
        </Button>
      </Col>
    </Row>
  );
};

export default MainPage;