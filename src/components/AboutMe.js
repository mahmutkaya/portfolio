import React, { Component } from 'react'
import { socialAccounts, socialAccountLinks } from '../logic/info'
import {skills} from '../logic/utilities'
import profilePhoto from '../img/profilePhoto.png'

class AboutMe extends Component {
  render() {
    return (
      <div id='about-me' className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img id='profile-photo' src={profilePhoto} className="card-img" alt='profile' />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">About me</h2>
              <p className="card-text">I am a junior full-stack web developer, graduated from <a href='https://www.hackyourfuture.net/' target='_blank' rel='noopener noreferrer'>HackYourFuture</a>, where over the course of six months I learned HTML, CSS, JS, Node.js, React.js and MySQL. I am looking for a job as a junior developer to improve my skills in web development.</p>
            </div>
            <div className='social-accounts'>
              {skills(socialAccounts, '', socialAccountLinks)}
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe;