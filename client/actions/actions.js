/* Message */

export function addMessage(message) {
  return dispatch => {
    return fetch('/api/messages', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
      .then(dispatch(receiveMessage(message)))
      .catch(error => {
        dispatch(addMessageFail(message))
      })
  }
}

export function addMessageFail(message) {
  return {
    type: 'ADD_MESSAGE_FAIL',
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
      .catch(req => dispatch(receiveInitialMessagesFail(req)))
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
