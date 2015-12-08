import React, { Component, PropTypes } from 'react';
import Message from './Message.jsx'

export default class MessagesList extends Component {

  static defaultProps = {
    messages: []
  }

  static propTypes = {
    actions: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className='messages'>
      {
        this.props.messages.map((message, i) => {
          return (
            <Message
              text={message.text}
              name={message.name}
              time={message.time}
            />
          );
        })
      }
      </div>
    );
  }

}
