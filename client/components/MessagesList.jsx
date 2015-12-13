import React, { Component, PropTypes } from 'react';
import Message from './Message.jsx'

export default class MessagesList extends Component {

  static propTypes = {
    messages: PropTypes.object.isRequired
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
              {...message}
            />
          );
        })
      }
      </div>
    );
  }

}
