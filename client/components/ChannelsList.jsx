import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

export default class ChannelsList extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    channels: PropTypes.object.isRequired
  }

  onChannelClick(channel) {
    this.props.actions.setChannel(channel)
  }

  render() {
    const { actions, channels } = this.props
    return (
      <div id='channels'>
        <h3 id="channels-header">Channels ({this.props.channels.data.length})</h3>
        <ul id="channels-list">
          {
            this.props.channels.data.map((channel, i) => {
              let classes = classNames({
                channel: true,
                active: (channel == channels.current)
              })
              return (
                <li key={i} className={classes}>
                  <Link onClick={this.onChannelClick.bind(this, channel)} to={'/chat/' + channel}>
                    <span className='prefix'>#</span> {channel}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }

}
