import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

export default class AuthPage extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      username: null
    };
  }

  onChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.actions.setUser({
      name: this.state.username
    })
    this.props.history.pushState(null, '/chat')
  }

  render() {
    return (
      <main id="page-auth" style={{display: 'flex', justifyContent: 'center'}}>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <h3>Enter your username:</h3>

          <input
            ref="username"
            type="text"
            value={this.state.username}
            onChange={this.onChange.bind(this)}
          />

        <input
          type="submit"
          value="Go"
          style={{marginLeft: '10px'}}
        />

        </form>
      </main>
    )
  }
}
