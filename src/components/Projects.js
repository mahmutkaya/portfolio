import React, { Component } from 'react'
import {Row} from 'reactstrap';
import { projects } from '../data/utilities'
import news from '../img/news.PNG'
import wiki from '../img/wiki.PNG'
import todo from '../img/todo.PNG'
import hyfrepo from '../img/hyfrepo.PNG'

class Projects extends Component {
  projects = this.projects
  render() {
    return (
      <React.Fragment>
        <Row className='center'>
          <h5>My Recent Work</h5>
        </Row>
        <Row >
          {projects(news, 'https://news-api-2019.herokuapp.com/')}
          {projects(wiki, 'https://codepen.io/mahmutkaya-the-selector/full/XoMmEW')}
          {projects(todo, 'https://todo-app-2018.netlify.com/')}
          {projects(hyfrepo, 'https://mahmutkaya.github.io/hyf-javascript3/week3/indexPromise.html')}
        </Row>
      </React.Fragment>
    )
  }
}

export default Projects;