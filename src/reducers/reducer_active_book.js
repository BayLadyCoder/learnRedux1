// State argument is not application state, only the State
// this reducer is responsible for
// Redux reducer doesn't allow to return undefined
// so we initialize state to null
export default function(state = null, action) {

  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  // never mutate state, only return a fresh object like above
  return state;
}
