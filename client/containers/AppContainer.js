import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MessagesList from '../components/MessagesList.jsx'
import AddMessage from '../components/AddMessage.jsx'
import * as Actions from '../actions/actions'

const socket = io.connect();

class AppContainer extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired
  }

  componentWillMount() {
    const { actions } = this.props
    actions.loadInitialMessages()

    // Dispatch action when we receive new message via socket
    socket.on('new_message', function(message) {
      actions.receiveMessage(message)
    });
  }

  render() {
    const { actions, messages } = this.props
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
        <AddMessage actions={actions} />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
