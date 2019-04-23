import React from 'react'
import { Card, CardImg, CardLink, CardTitle, CardBody, Row, Col } from 'reactstrap';

const skills = (icons, info) => {
  console.log(info)
  return icons.map((icon, index) => (
    <div
      className='skillsIcons'
      key={index}>
      <i
        className={icon}
        data-tip={info[index]}>
      </i>
    </div>

  ))
}

const projects = (img, link) => (
  <Col sm='4'>
    <Card id='news-card'>
      <CardLink href={link} target='_blank'>
        <CardImg top width="100%" src={img} />
      </CardLink>
    </Card>
  </Col>
)


export { skills, projects }