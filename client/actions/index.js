/* Message list */

export function addMessage(message) {
  return {
    type: 'ADD_MESSAGE',
    message
  };
}

export function receiveMessage(message) {
  return {
    type: 'RECEIVE_MESSAGE',
    message
  };
}

/* Messages list */

export function loadInitialMessages() {
  return dispatch => {
    dispatch(loadingInitialMessages)
    return fetch('/api/messages')
      .then(req => req.json())
      .then(json => dispatch(receiveInitialMessages(json)))
  }
}

export function loadingInitialMessages(data) {
  return {
    type: 'LOADING_MESSAGES'
  }
}

export function receiveInitialMessages(data) {
  return {
    type: 'RECEIVE_MESSAGES',
    data
  }
}

export function receiveInitialMessagesFail() {
  return {
    type: 'RECEIVE_MESSAGES_FAIL'
  }
}
