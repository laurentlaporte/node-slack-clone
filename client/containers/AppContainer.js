import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MessagesList from '../components/MessagesList.jsx'
import * as AppActions from '../actions/index'

class AppContainer extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired
  }

  render() {
    const { actions, messages } = this.props
    return (
      <div className="app-container">
        <MessagesList actions={actions} messages={messages} />
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
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
