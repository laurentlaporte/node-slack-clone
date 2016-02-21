import React, { Component, PropTypes } from 'react';

import ChannelsList from './ChannelsList.jsx';

export default class Sidebar extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    channels: PropTypes.object.isRequired
  }

  render() {
    const { actions } = this.props
    return (
      <div id="sidebar">
        <ChannelsList actions={this.props.actions} channels={this.props.channels} />
      </div>
    );
  }

}
