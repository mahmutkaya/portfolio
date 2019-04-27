import React, { Component } from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

const GOOGLE_FORM_MESSAGE_ID = 'entry.354900912'
const GOOGLE_FORM_EMAIL_ID = 'entry.1973306023'
const GOOGLE_FORM_NAME_ID = 'entry.1730565971'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSfJsOJYGM8ddbt1_ACCHQsrprtKEmpwiNmntTKlHb496fMczg/formResponse'

class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: '',
      email: '',
      name:'',
      showForm: false,
      sendingMessage: false,
      messageSent: false,
      messageError: false
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      sendingMessage: true
    })
    this.sendMessage()
  }

  handleFormToggle = () => {
    this.setState(
      (prevState) => {
        const { showForm } = prevState
        return {
          showForm: !showForm
        }
      }
    )
  }

  handleReturnButton = () => {
    this.setState(
      {
        showForm: false,
        messageSent: false,
        messageError: false
      }
    )
  }

  sendMessage = () => {
    const formData = new FormData()
    formData.append(GOOGLE_FORM_MESSAGE_ID, this.state.message)
    formData.append(GOOGLE_FORM_EMAIL_ID, this.state.email)
    formData.append(GOOGLE_FORM_NAME_ID, this.state.name)

    axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, formData)
      .then(() => {
        this.setState({
          messageSent: true,
          sendingMessage: false,
          message: '',
          email: '',
          name:'',
        })
      }).catch(() => {
        this.setState({
          messageError: true,
          sendingMessage: false
        })
      })
  }

  returnButton = () => <button id='return-button' className='btn btn-default btn-xs' onClick={this.handleReturnButton}>Return</button>


  render() {
    if (this.state.sendingMessage) {
      return (
        <div>Sending...</div>
      )
    }

    if (this.state.messageSent) {
      return (
        <React.Fragment>
          <div className='success-message'>Sent! I will respond asap</div>
          {this.returnButton()}
        </React.Fragment>
      )
    }

    if (this.state.messageError) {
      return (
        <React.Fragment>
          <div className='error-message'>Sorry, your message was not sent. Contact me at: mahmutkaya.nl@gmail.com</div>
          {this.returnButton()}
        </React.Fragment>
      )
    }

    if (this.state.showForm === false) {
      return (
        <button id='contact-button' className='btn btn-sm' onClick={this.handleFormToggle}>Contact</button>
      )
    }
    return (
      <React.Fragment>
      <h1>Get in touch!</h1>
        <hr/>
          <Row>
        <Col sm={{ size: 2, order: 0, offset: 0 }}>
            <i className="fab fa-skype"></i><span>mahmutkaya</span>
            <i className="fas fa-phone-square"></i><span>+31686433636</span>
            <i className="fab fa-whatsapp-square"></i><span>+31686433636</span>
            <i className="fas fa-at"></i><span>mahmutkaya.nl@gmail.com</span>
        </Col>
          <Col sm={{ size: 7, order: 0, offset: 2 }}>
            {/* <React.Fragment>
              <div className='form-container'>
                <form onSubmit={this.handleSubmit}>
                  <div className='form-group row'>
                    <label htmlFor='name' className='col-sm-2 col-form-label'>
                      Name:
              </label>
                    <div className='col-sm-8'>
                      <input
                        type='name'
                        name='name'
                        id='name'
                        className='form-control'
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className='form-group row'>
                    <label htmlFor='email' className='col-sm-2 col-form-label'>
                      Email:
              </label>
                    <div className='col-sm-8'>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        className='form-control'
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className='form-group row'>
                    <label htmlFor='message' className='col-sm-2 col-form-label'>
                      Message:
              </label>
                    <div className='col-sm-8'>
                      <textarea
                        id='message'
                        name='message'
                        className='form-control'
                        required
                        value={this.state.message}
                        onChange={this.handleChange}
                        rows='6'
                      />
                    </div>
                  </div>
                  <div>
                    <button type='button' id='cancel-button' className='btn btn-default btn-sm btn-action' onClick={this.handleFormToggle}>Cancel</button>
                    <button type='submit' className='btn btn-sm btn-default btn-action'>Submit</button>
                  </div>
                </form>
              </div>
            </React.Fragment> */}
        <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id='email'
                  value={this.state.email}
                  onChange={this.handleChange}
                  required></Input>
          </FormGroup>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id='name'
                  value={this.state.name}
                  onChange={this.handleChange}
                  aria-label="Name"
                  required></Input>
          </FormGroup>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input type="textarea"
                  name="message"
                  id='message'
                  value={this.state.message}
                  onChange={this.handleChange} 
                  aria-label="Message"
                  required ></Input>
          </FormGroup>
          <Button type='submit'>Submit</Button>
          </Form>
        </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Contact;