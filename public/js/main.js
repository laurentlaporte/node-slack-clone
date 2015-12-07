var React = require('react');
var ReactDOM = require('react-dom');

var MessagesList = require('./components/MessagesList');
var Message = require('./components/Message');

ReactDOM.render(<MessagesList />, document.getElementById('messages'));
