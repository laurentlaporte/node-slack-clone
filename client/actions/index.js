import * as Promises from '../promises/index'

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

export function loadMessages() {
  return {
    types: ['LOAD_MESSAGES', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_FAIL'],
    promise: Promises.loadMessages()
  }
}

export function loadMessagesSuccess() {
  return {
    type: 'LOAD_MESSAGES_SUCCESS'
  }
}

export function loadMessagesFail() {
  return {
    type: 'LOAD_MESSAGES_FAIL'
  }
}
