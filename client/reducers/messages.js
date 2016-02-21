const initialState = {
  loading: false,
  data: []
};
export default function messages(state = initialState, action) {
  switch (action.type) {
    /* Message */
    case 'RECEIVE_MESSAGE':

      // Verify we dont already have this message
      let alreadyReceived = false
      state.data.forEach(message => {
        if(message.id == action.message.id) {
          alreadyReceived = true
          return
        }
      })
      if(alreadyReceived) return state;

      return {...state,
        data: [
          ...state.data,
          action.message
        ]
      }
    case 'ADD_MESSAGE_FAIL':
        alert('Error sending message.');
        return state
        break;
    /* Messages list */
    case 'LOADING_MESSAGES':
      return {...state,
        loading: true
      }
    case 'RECEIVE_MESSAGES':
      // Append new messages
      return {...state,
        loading: false,
        data: [
          ...action.data
        ]
      }
      break;
    case 'RECEIVE_MESSAGES_FAIL':
      // TODO: error message
      alert('Error receving intial messages.');
      return state
      break;

    default:
      return state
  }
}
