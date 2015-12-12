const initialState = {
  loading: false,
  data: []
};
export default function messages(state = initialState, action) {
  switch (action.type) {

    case 'LOADING_MESSAGES':
      return {...state,
        loading: true
      }
    case 'RECEIVE_MESSAGES':
      // Append new messages
      return {...state,
        loading: false,
        data: [
          ...state.data,
          ...action.data
        ]
      }
      break;
    case 'RECEIVE_MESSAGES_FAIL':
      // TODO: error message
      alert('Error receving intial messages.');
      break;

    default:
      return state
  }
}
