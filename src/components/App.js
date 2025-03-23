import React, { Component } from 'react';
import Navigation from './Navigation'
import Router from './Router'
import { Container } from 'reactstrap';
import './App.css'
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Container className='main-page'>
          <Router />
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;
