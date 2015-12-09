import React, { Component, PropTypes } from 'react';
import Message from './Message.jsx'

export default class MessagesList extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.props.actions.loadInitialMessages()
  }

  render() {
    const { actions } = this.props
    return (
      <div id='messages'>
      {
        this.props.messages.data.map((message, i) => {
          return (
            <Message
              key={i}
              actions={actions}
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
