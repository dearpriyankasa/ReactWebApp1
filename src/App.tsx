import React from 'react';
import './App.css';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Features from './Features/Features';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Login}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup/:id" component={SignUp}/>
        <Route path="/features" component={Features}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
