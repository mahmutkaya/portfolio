import React from 'react'
import { Card, CardImg, CardLink, Col } from 'reactstrap';

const skills = (icons, info, link) => {
  console.log(info)
  return icons.map((icon, index) => (
    <div
      className='icons'
      key={index}>
      <a href={link[index]} target="_blank" rel="noopener noreferrer">
      <i
        className={icon}
        data-tip={info[index]}>
        </i>
      </a>
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


export {  skills, projects }