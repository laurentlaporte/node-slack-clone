const initialState = {
  name: null
};
export default function messages(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return {...state,
        ...action.user
      }
    default:
      return state
  }
}
