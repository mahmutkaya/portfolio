import React, { Component } from 'react'
import {Row} from 'reactstrap';
import {projects} from '../logic/utilities'
import portfolio from '../img/portfolio.PNG'
import news from '../img/news.jpg'
import wiki from '../img/wiki.PNG'
import todo from '../img/todo.PNG'
import hyfrepo from '../img/hyfrepo.PNG'
import reactForm from '../img/reactForm.jpg'

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className='center'>
          <h5>My Recent Work</h5>
        </Row>
        <Row >
          {projects(portfolio, 'https://www.mahmutkaya.nl/')}
          {projects(news, 'https://news-api-2019.herokuapp.com/')}
          {projects(wiki, 'https://wiki-search-vanilla-js.netlify.com/')}
          {projects(todo, 'https://todo-app-2018.netlify.com/')}
          {projects(hyfrepo, 'https://mahmutkaya.github.io/hyf-javascript3/week3/indexPromise.html')}
          {projects(reactForm, 'https://grayscale-photos.netlify.com/')}
        </Row>
      </React.Fragment>
    )
  }
}

export default Projects;