//src/modules/reducers/ip.js
import * as actions from '../actions/actions.js'

//Reducers
export const ipReducers = function (state = actions.initialState, action) {
  switch (action.type) {
  case actions.RECEIVE_POST:
    console.log('(5) reducer detect RECEIVE_POST and return ip');
    return action.ip
  case actions.CANCEL_GET_IP:
    console.log('(cancel step 3) reducer recive cancellation');
    return false;
  case actions.DOSTHWHC:
    console.log('DOSTHWHC');
    return true;
  case actions.FETCH_USER_REJECTED:
    console.log('FETCH_USER_REJECTED');
    return true;
  default:
    return state
  }
}