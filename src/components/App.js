//src/components/App.js
import React from 'react';
import '../assets/css/App.css';
import { connect } from 'react-redux'
import {clickSubmit, cancelFetchIp} from '../modules/actions/actions.js'

const App = ({getIp, ip, ping, onPing, cancelActive})=>(
    <div>
      <button onClick={()=>{getIp()}}>Get IP</button><br/>
      <button onClick={()=>{cancelActive()}}>Cancel</button><br/>
      {ip&& 
        <span>My IP is {ip} </span>
      }
    </div>
);

const mapStateToProps = (state) => {
  return {
    ip: state.ipReducers
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    getIp: ()=>{
      console.log('(1) click get ip button');
      dispatch(clickSubmit())
    }, 
    cancelActive: ()=>{
      console.log('(cancel step 1) click cancellation button');
      dispatch(cancelFetchIp());
    }
  }
}

const myAppComp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

// export default App
export default myAppComp