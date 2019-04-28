import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, Col } from 'reactstrap';
import ReactTooltip from 'react-tooltip'
import mailSent from '../img/mailSent.gif'
import somethingWentWrong from '../img/somethingWentWrong.gif'


class MessageStatus extends Component {
  returnButton = () => (
    <Link to='/Contact'>
      <i data-tip='go back' className="fas fa-arrow-left goBack"></i>
      <ReactTooltip />
    </Link>
  )
  render() {
    if (this.state.sendingMessage) {
      return (
        <div>Sending...</div>
      )
    }

    if (this.state.messageSent) {
      return (
        <Col className='messageStatus' sm={{ size: 4 }}>
          <Card>
            <CardImg top width="100%" src={mailSent} />
            <hr />
            <CardText>
              Thank you for contacting me. <br />
              I will reply you as soon as possible!
              </CardText>
          </Card>
          <hr />
          {this.returnButton}
        </Col>
      )
    }

    if (this.state.messageError) {
      return (
        <Col className='messageStatus' sm={{ size: 4 }}>
          <Card>
            <CardImg src={somethingWentWrong} />
            <hr />
            <CardText>
              Sorry, something went wrong! <br />
              Please, contact me at: mahmutkaya.nl@gmail.com
              </CardText>
          </Card>
          <hr />
          {this.returnButton}
        </Col>
      )
    }
    
  }
}

export default MessageStatus;  