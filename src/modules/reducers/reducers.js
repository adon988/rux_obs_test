//src/modules/reducers/reducers.js
import { combineReducers } from 'redux';
import { ipReducers } from './ip.js'

export const rootReducer = combineReducers({
  ipReducers
});