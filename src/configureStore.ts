import { createStore, applyMiddleware } from "redux";
import reducer from "./Login/login_reducer";
import createSagaMiddleware from "redux-saga";


export const saga = createSagaMiddleware();

export default function configureStore() {
  /* 
        Use store.getState() to print the current state of the store
        Use store.subscribe(()=>{}) to perform actions after the store has been updated
    */
  const store = createStore(reducer, applyMiddleware(saga));
  return store;
}
