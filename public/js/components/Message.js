var React = require('react');
var moment = require('moment');

var Message = React.createClass({
  getDefaultProps() {
		return {
      icon: 'https://placeholdit.imgix.net/~text?txtsize=13&txt=Lau&w=45&h=45',
      name: null,
			text: null,
      time: null
		};
	},
  render() {
    return (
      <div className='message'>
        <a href="/" className="icon" style={{backgroundImage: 'url('+this.props.icon+')'}}></a>
        <div className="content">
          <div className="name">{this.props.name}</div>
          <div className="time">{moment(this.props.time).format('h:mm A')}</div>
          <div className="text">{this.props.text}</div>
        </div>
      </div>
    );
  }
});

module.exports = Message;
