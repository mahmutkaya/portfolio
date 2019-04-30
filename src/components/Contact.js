import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, Row, Col, Card, CardText, CardImg, Spinner} from 'reactstrap';
import { contactIcons, contactInfo, contactId } from '../logic/info'
import { contactAccounts } from '../logic/utilities'
import mailSent from '../img/mailSent.gif'
import somethingWentWrong from '../img/somethingWentWrong.gif'

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
      name: '',
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
          name: '',
        })
      }).catch(() => {
        this.setState({
          messageError: true,
          sendingMessage: false
        })
      })
  }

  returnButton = () => (
    <Button
      color='link'
      onClick={this.handleReturnButton}
    >
      <i data-tip='go back' className="fas fa-arrow-left goBack"></i>
      <ReactTooltip />
    </Button>
  )

  render() {
    const { sendingMessage, messageSent, messageError } = this.state

    return (
      //if:
      sendingMessage ? (
        <Col className='messageStatus' sm='2'>
          <h1 >
            Sending...
                </h1>
          <Spinner color="dark" style={{ width: '3rem', height: '3rem' }} />
        </Col>
      )

        //if else:
        : messageSent ? (
          <Col className='messageStatus' sm='4'>
            <Card>
              <CardImg top width="100%" src={mailSent} />
              <hr />
              <CardText>
                Thank you for contacting me. <br />
                I will reply you as soon as possible!
              </CardText>
            </Card>
            <hr />
            {this.returnButton()}
          </Col>
        )

          //if else:
          : messageError ? (
            <Col className='messageStatus' sm='4'>
              <Card>
                <CardImg src={somethingWentWrong} />
                <hr />
                <CardText>
                  Sorry, something went wrong! <br />
                  Please, contact me at: mahmutkaya.nl@gmail.com
              </CardText>
              </Card>
              <hr />
              {this.returnButton()}
            </Col>
          )

            //else:  
            : (
              <div id='contactPage'>
                <h1>Get in touch!</h1>
                <hr />
                <Row>
                  <Col sm='3'>
                    {contactAccounts(contactIcons, contactId, contactInfo)}
                  </Col>
                  <Col sm='6'>
                    <Form
                      name='contact'
                      method="POST"
                      onSubmit={this.handleSubmit}
                      data-netlify="true"
                    >
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
              </div>
            )
    )
  }
}

export default Contact;