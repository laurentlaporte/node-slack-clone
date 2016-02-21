import React, { Component, PropTypes } from 'react';

export default class Header extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    channels: PropTypes.object.isRequired
  }

  render() {
    const { actions, channels } = this.props
    return (
      <div id="header">
        <div id="sidebar-header">
          <h2 id="team-name">Turbulent</h2>
        </div>
        <div id="messages-header">
          <h2 id="channel-name"><span className="prefix">#</span> {channels.current}</h2>
        </div>
      </div>
    );
  }

}
