
export function eris(state = {}, action) {
  switch (action.type) {
    case 'GET_CAPACITY':
    return {
      ...state,
      loading: true
    };
  case 'CAPACITY_RECIEVED':
    return {
      ...state,
      capacity: action.capacity
    };
    default:
      return state
  }
}