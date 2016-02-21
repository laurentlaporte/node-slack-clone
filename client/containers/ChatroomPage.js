import React, { Component, PropTypes } from 'react';
const socket = io.connect();

import MessagesList from '../components/MessagesList.jsx'
import AddMessage from '../components/AddMessage.jsx'
import Sidebar from '../components/Sidebar.jsx';
import Header from '../components/Header.jsx';

export default class ChatroomPage extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
    channels: PropTypes.object.isRequired
  }

  componentWillMount() {
    if (this.props.user.name === null) {
      this.props.history.pushState(null, '/')
    }
    if (this.props.params.channel == null) {
      this.props.history.pushState(null, '/chat/' + this.props.channels.current)
    }
  }

  componentDidMount() {
    const { actions } = this.props
    const currentChannel = this.props.channels.current

    actions.loadInitialMessages(this.props.channels.current)

    // Dispatch action when we receive new message via socket
    socket.on('new_message', function(message) {
      if (message.channel == currentChannel) {
        actions.receiveMessage(message)
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.channels.current != nextProps.channels.current) {
      console.debug(nextProps.channels.current);
      this.props.actions.loadInitialMessages(nextProps.channels.current)
    }
  }

  render() {
    const { actions, user, messages, channels } = this.props
    return (
      <div id="container">
        <Header actions={actions} channels={channels} />
        <Sidebar actions={actions} channels={channels} />
        <MessagesList actions={actions} messages={messages} />
        <AddMessage actions={actions} user={user} channels={channels} />
      </div>
    )
  }
}
