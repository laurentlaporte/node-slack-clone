const initialState = {
  current: 'general',
  data: [ 'general', 'tech', 'random' ]
};
export default function channels(state = initialState, action) {
  switch (action.type) {
    case 'SET_CHANNEL':
      return {...state,
        current: action.channel
      }
    default:
      return state
  }
}
