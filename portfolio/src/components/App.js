import React, { Component } from 'react';
import Navigation from './Navigation'
import Router from './Router'
import { Container, Row, Col, Button } from 'reactstrap';
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Container className='main-page'>
          <Router />
          </Container>
      </div>
    );
  }
}

export default App;
