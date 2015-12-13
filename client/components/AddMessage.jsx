import React, { Component, PropTypes } from 'react';
import ShortId from 'shortid'

export default class AddMessage extends Component {

  /* Init */

  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: ''
    };
  }

  /* Events */

  onChange(event) {
    this.setState({ text: event.target.value });
  }

  onKeyDown(event) {
    if (event.which == 13) {
      const text = event.target.value.trim()

      this.props.actions.addMessage({
        id: ShortId.generate(),
        time: (new Date().getTime()),
        text: text,
        username: 'Laurent'
      })

      // Reset textarea
      this.setState({ text: '' })
    }
  }

  /* Render */

  render() {
    return (
      <div id="footer">
        <div className="add-message">
          <textarea
            type="textarea"
            name="message-input"
            ref="input"
            autoFocus="true"
            onKeyDown={this.onKeyDown.bind(this)}
            onChange={this.onChange.bind(this)}
            value={this.state.text}
          />
        </div>
      </div>
    );
  }

}
