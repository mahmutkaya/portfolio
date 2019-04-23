import React, { Component } from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const GOOGLE_FORM_MESSAGE_ID = 'entry.354900912'
const GOOGLE_FORM_EMAIL_ID = 'emailAddress'
const GOOGLE_FORM_NAME_ID = 'entry.37604791'
const CORS_PROXY = 'https://cors-escape.herokuapp.com/'
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

  handleSubmit = (event) => {
    event.preventDefault()
    this.sendMessage()
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


  render() {
    return (
      <div>
        <h1>Contact Page</h1>
        <i class="far fa-address-card"></i>
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-github"></i>
        <i class="fab fa-skype"></i>
        <i class="fas fa-phone-square"></i>
        <i class="fas fa-at"></i>
        <i class="fab fa-whatsapp-square"></i>
        <hr/>
        
        <Form action="https://docs.google.com/forms/d/e/1FAIpQLSfJsOJYGM8ddbt1_ACCHQsrprtKEmpwiNmntTKlHb496fMczg/formResponse" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input type="email" value={this.state.email} onChange={this.handleChange} jsname="YPqjbf" autocomplete="email" tabindex="0" aria-label="Your email" name="emailAddress" required="" dir="auto" data-initial-dir="auto" data-initial-value="" aria-invalid="true"></Input>
          </FormGroup>
          <FormGroup>
            <Input type="text" name="entry.37604791" value={this.state.name} onChange={this.handleChange} jsname="YPqjbf" autocomplete="off" tabindex="0" aria-label="Name" aria-describedby="i.desc.361852843 i.err.361852843" required="" dir="auto" data-initial-dir="auto" data-initial-value="" aria-invalid="true"></Input>
          </FormGroup>
          <FormGroup>
            <Input type="textarea" name="entry.354900912" value={this.state.message} onChange={this.handleChange} jsname="YPqjbf" data-rows="1" tabindex="0" aria-label="Message" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" required="" dir="auto" data-initial-dir="auto" data-initial-value="" aria-describedby="i.desc.1943605669 i.err.1943605669" aria-invalid="true"></Input>
          </FormGroup>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default Contact;