const initialState = {
  loaded: false,
  data: []
};
export default function messages(state = initialState, action) {

  console.log('Action dispatched: ' + action.type);

  return state;
}
