import React, { Component, PropTypes } from 'react';

export default class Message extends Component {

  static propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    icon: PropTypes.string
  }

  static defaultProps = {
    icon: 'https://placeholdit.imgix.net/~text?txtsize=20&txt=Lau&w=75&h=75'
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps;
  }

  render() {
    const date = new Date(this.props.time)
    return (
      <div className='message'>
        <a href="/" className="icon" style={{backgroundImage: 'url('+this.props.icon+')'}}></a>
        <div className="content">
          <div className="username">{this.props.username}</div>
          <div className="time">{`${date.getHours()}:${date.getMinutes()} ${date.getFullYear()}`}</div>
          <div className="text">{this.props.text}</div>
        </div>
      </div>
    );
  }

}
