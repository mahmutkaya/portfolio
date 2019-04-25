import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'reactstrap';
import ReactTooltip from 'react-tooltip'
import { languages, languagesIcons, devTools, devToolsIcons } from '../data/info'
import {skills } from '../data/utilities'

class MainPage extends Component {
  render() {
    return (
        <Row>
          <Col sm={{ size: 8, order: 0, offset: 2 }}>
        <div className='greeting'>
        <h1>Hi, my name is Mahmut Kaya.</h1>
        <h3 >I am a full stack web developer.</h3>
        <p>I design and code beautifully simple things, and I love what I do.</p>
        <p>Feel free to take a look at my latest projects on the {' '}
          <Link to="/Projects">
            web portfolio page.
          </Link>
          </p>
        </div>
        <div className='skills'>
          <div className='languages'>
          <h5>Languages I speak:</h5>
          {skills(languagesIcons, languages, '')}
          </div>
          <div className='dev-tools'>
              <h5>Dev Tools:</h5>
              {skills(devToolsIcons, devTools, '')}
          </div>
              </div>
            </Col>
          <Col sm={{ size: 2, offset: 0 }} className='buttons'>
        <Button outline color="secondary">I need a website</Button>
        <Button outline color="secondary">I am looking to hire</Button>
        <ReactTooltip />
            </Col>
        </Row>
    )
  }
}

export default MainPage;