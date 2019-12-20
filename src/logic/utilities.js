import React from "react";
import {
  Card,
  CardImg,
  CardLink,
  Col,
  UncontrolledPopover,
  PopoverHeader,
  Button
} from "reactstrap";

const skills = (icons, info, link) => {
  console.log(info);
  return icons.map((icon, index) => (
    <div className="icons" key={index}>
      <a href={link[index]} target="_blank" rel="noopener noreferrer">
        <i className={icon} data-tip={info[index]}></i>
      </a>
    </div>
  ));
};

const projects = (img, link) => (
  <Col sm="4">
    <Card id="news-card">
      <CardLink href={link} target="_blank">
        <CardImg top width="100%" src={img} />
      </CardLink>
    </Card>
  </Col>
);

const contactAccounts = (icons, id, info) =>
  icons.map((icon, index) => (
    <div key={index}>
      <Button color="link" id={id[index]} type="button">
        <i className={icon}></i>
      </Button>
      <UncontrolledPopover
        trigger="legacy"
        placement="right"
        target={id[index]}
      >
        <PopoverHeader>{info[index]}</PopoverHeader>
      </UncontrolledPopover>
    </div>
  ));

export { skills, projects, contactAccounts };
