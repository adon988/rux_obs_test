/* 
    ./src/store.js
*/
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './modules/epics/epics.js';
import { rootReducer } from './modules/reducers/reducers.js';

//createEpicMiddleware is used to create an instance of the actual redux-observable middleware
const epicMiddleware = createEpicMiddleware(rootEpic);

let store = createStore(rootReducer, applyMiddleware(epicMiddleware));
export default store;