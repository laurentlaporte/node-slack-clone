import React, { Component, PropTypes } from 'react';
const socket = io.connect();

import MessagesList from '../components/MessagesList.jsx'
import AddMessage from '../components/AddMessage.jsx'

export default class ChatroomPage extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired
  }

  componentWillMount() {
    if (this.props.user.name === null) {
      this.props.history.pushState(null, '/')
    }
  }

  componentDidMount() {
    const { actions } = this.props
    actions.loadInitialMessages()

    // Dispatch action when we receive new message via socket
    socket.on('new_message', function(message) {
      actions.receiveMessage(message)
    });
  }

  render() {
    const { actions, user, messages } = this.props
    return (
      <div id="container">
        <div id="header">
          <div id="sidebar-header">
            <h2 id="team-name">Lau's Slack clone</h2>
          </div>
          <div id="messages-header">
            <h2 id="channel-name"># general</h2>
          </div>
        </div>
        <div id="sidebar">
          <div id="channels">
            <h3 id="channels-header">Channels (5)</h3>
            <ul className="channels-list">
              <li>
                <a href="/general"># general</a>
              </li>
              <li>
                <a href="/tech"># tech</a>
              </li>
              <li>
                <a href="/gaming"># gaming</a>
              </li>
            </ul>
          </div>
        </div>
        <MessagesList actions={actions} messages={messages} />
        <AddMessage actions={actions} user={user} />
      </div>
    )
  }
}
