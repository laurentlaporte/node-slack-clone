import React, { Component, PropTypes } from 'react';
import moment from 'moment'

export default class Message extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired
  }

  render() {
    return (
      <div className='message'>
        <a href="/" className="icon" style={{backgroundImage: 'url('+this.props.icon+')'}}></a>
        <div className="content">
          <div className="name">{this.props.name}</div>
          <div className="time">{moment(this.props.time).format('h:mm A')}</div>
          <div className="text">{this.props.text}</div>
        </div>
      </div>
    );
  }

}
