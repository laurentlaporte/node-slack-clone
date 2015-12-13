import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AuthPage from './AuthPage'
import ChatroomPage from './ChatroomPage'

import * as Actions from '../actions/actions'

class App extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="app">
        {React.cloneElement(this.props.children, {
          actions: this.props.actions,
          user: this.props.user,
          messages: this.props.messages
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
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
)(App)
