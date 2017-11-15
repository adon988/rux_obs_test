//src/modules/epics/epics.js
import { combineEpics } from 'redux-observable';
import { ajaxEpic } from './ajax_get_ip.js'

//Epics 在這裡送出後，會被放入 redux 的 Middleware 裡面
//接下來就不必再理會他，他自己就會做好監視
export const rootEpic = combineEpics(
  ajaxEpic
);