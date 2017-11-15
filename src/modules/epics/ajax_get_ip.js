//src/modules/epics/ajax_get_ip.js
import { ajax } from 'rxjs/observable/dom/ajax';
import * as actions from '../actions/actions.js'
import {Observable} from 'rxjs';

//Epic
export const ajaxEpic =  action$ =>
  action$.ofType(actions.RECEIVE_CLICK)
  .mergeMap(action =>
    ajax({
        type: 'JSON',
        url: actions.IP_ADDRESS,
        crossDomain: true
      })
      .do(()=>(console.log('(3) recive RECEIVE_CLICK and ajax back ready go to fetchIpValue')))
      .map(request => actions.fetchIpValue(request.response))
      // .takeUntil(action$.ofType(actions.CANCEL_GET_IP))
      .race(
        action$.ofType(actions.CANCEL_GET_IP)
          .map(() => actions.doSomeThingWhenCancel())
          .take(1)
          .do(()=>(console.log('(cancel step 4) Do something when cancellation')))
      )
      .catch(error => Observable.of({
          type: actions.FETCH_USER_REJECTED,
          payload: error.xhr.response,
          error: true
      }))
      // .catch((err)=>{console.log(err)})
  )
  