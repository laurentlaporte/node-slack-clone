var $ = require('jquery');
var React = require('react');
var Message = require('./Message');

var MessagesList = React.createClass({
  getDefaultProps() {
    return {
      url: '/api/messages'
    };
  },
  getInitialState() {
		return {
			messages: []
		};
	},
  componentDidMount() {
    this._loadMessages();
  },
  render() {
    return (
      <div className='messages'>
      {
        this.state.messages.map((message, i) => {
          return (
            <Message key={i}
              text={message.text}
              name={message.name}
              time={message.time} 
            />
          );
        })
      }
      </div>
    );
  },
  _loadMessages() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({ messages: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  }
});

module.exports = MessagesList;
