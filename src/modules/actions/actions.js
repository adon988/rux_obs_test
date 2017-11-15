//src/modules/actions/actions.js
//Action
export const IP_ADDRESS = 'https://api.ipify.org/?format=json';
// const IP_ADDRESS = 'https://jsonip.com/';
// export const IP_ADDRESS = 'http://localhost:1111/adam_lab6/redux-observable/api_test.php';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_CLICK = 'RECEIVE_CLICK';
export const CANCEL_GET_IP = 'CANCEL_GET_IP';
export const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED';
export const DOSTHWHC = 'DOSTHWHC';
export const initialState = '';


//Action Creator
export function clickSubmit(){
  console.log('(2) clickSubmit action creater return RECEIVE')
  return {type: RECEIVE_CLICK}
}

export function fetchIpValue(jsonData){
  console.log('(4) fetchIpValue action creater will return RECIVE_POST')
  console.log(jsonData);
  return {type: RECEIVE_POST, ip: jsonData.ip}
}


export function cancelFetchIp(){
  console.log('(cancel step 2) cancellation');
  return {type: CANCEL_GET_IP}
}

export function doSomeThingWhenCancel(){
  console.log('cancel!');
  return {type: DOSTHWHC}
}

