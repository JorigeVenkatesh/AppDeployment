import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

let initialStore = {
  loginDetails:{},
};

let loginReducer = (letestStore = initialStore,dispachedObj)=>{
  console.log("inside reducer")
  if(dispachedObj.type === "login"){
     return{...letestStore,loginDetails:dispachedObj.data}
  }
  return letestStore
};

let tasksReducer = (letestStore = initialStore,dispachedObj)=>{
  console.log("inside TasksReducer")
  if(dispachedObj.type === "addTask"){
    //  return{...letestStore,loginDetails:dispachedObj.data}
  }else if(dispachedObj.type === "submitTask"){
    //  return{...letestStore,loginDetails:dispachedObj.data}
  }else if(dispachedObj.type === "deleteTask"){
    //  return{...letestStore,loginDetails:dispachedObj.data}
  }
  return letestStore
};

let requestsReducer = (letestStore = initialStore,dispachedObj)=>{
  console.log("inside requestsReducer")
  if(dispachedObj.type === "createRequest"){
    //  return{...letestStore,loginDetails:dispachedObj.data}
  }else if(dispachedObj.type === "closeRequest"){
    //  return{...letestStore,loginDetails:dispachedObj.data}
  }
  return letestStore
};

let LeavesReducer = (letestStore = initialStore,dispachedObj)=>{
  console.log("inside LeavesReducer")
  if(dispachedObj.type === "applyLeave"){
    //  return{...letestStore,loginDetails:dispachedObj.data}
  }else if(dispachedObj.type === "extendLeave"){
    //  return{...letestStore,loginDetails:dispachedObj.data}
  }else if(dispachedObj.type === "cancelLeave"){
    //  return{...letestStore,loginDetails:dispachedObj.data}
  }
  return letestStore
};


let store = createStore(combineReducers({loginReducer,tasksReducer,requestsReducer,LeavesReducer}),applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
