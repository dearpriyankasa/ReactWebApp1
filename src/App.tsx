import React from 'react';
import './App.css';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Features from './Features/Features';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore, {saga} from './configureStore';
import loginSaga from './Login/login_saga';


const store = configureStore();
saga.run(loginSaga);

const App = () => {
  return (
    <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Login}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup/:id" component={SignUp}/>
        <Route path="/features" component={Features}/>
      </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
