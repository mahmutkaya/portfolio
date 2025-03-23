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
import { Tooltip } from "react-tooltip";

// Note: This function has been modified to use react-tooltip
const skills = (icons, info, link) => {
  return icons.map((icon, index) => (
    <div className="icons" key={index} data-tooltip-id={`icon-${index}`}>
      <a href={link[index]} target="_blank" rel="noopener noreferrer">
        <i className={icon}></i>
      </a>
      {info[index] && (
        <Tooltip id={`icon-${index}`} place="top">
          {info[index]}
        </Tooltip>
      )}
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