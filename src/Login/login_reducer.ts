import {
    LOGIN_FAILURE,
    LOGIN_PROGERSS,
    LOGIN_SUCCESS
  } from "./constants";
  
  const initialState = {
    login: [],
    isLoggingIn: false,
    error: false
  };
  
  /*
      Reducer is a pure function that takes actions and state as input 
      and returns/passes the modified state to the store.
      It is implemented using switch case to update the state according 
      to the ation type required.
  */
  
  export default function loginReducer(state = initialState, action: any) {
    switch (action.type) {
      case LOGIN_PROGERSS:
        return {
          ...state, //creates a copy of the state object and only changes the values that needs to be changed
          isLoggingIn: true,
          login: []
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggingIn: false,
          login: action.data
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isLoggingIn: false,
          error: true
        };
      default:
        return state;
    }
  }
  