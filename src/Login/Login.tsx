import React, { Component } from 'react';
import {LoginType} from './LoginInterface';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, RaisedButton, TextField} from 'material-ui';
import '../App.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { makeLoginCall } from './login_action';

class Login extends Component<LoginType, {email : string, password: string, doNavigate: boolean}> {
    constructor(props: LoginType) {
        super(props)
    
        this.state = {
             email:'',
             password:'',
             doNavigate: true
        }
    }

    goToSignUp = () => {
        if(this.state.doNavigate)
            this.props.history.push("/signup/10");
    }

    loginSuccessful = () => {
        // this.props.history.push("/features");
        this.props.login(this.state);
    }
    
    render() {
        // console.log("props are", this.props);
        return (
            <div className="App">
            <MuiThemeProvider>
                <div>
                    <AppBar
                    title="Login"
                    />
                    <TextField
                        type="email"
                        hintText="Enter your E-mail"
                        floatingLabelText="*Email"
                        onChange = {(event,newValue) => this.setState({email:newValue})}
                        />
                    <br/>
                    <TextField
                        type="password"
                        hintText="Enter your Password"
                        floatingLabelText="*Password"
                        onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                    <br/>
                    <RaisedButton label="Submit" primary={true} style={style} onClick={this.loginSuccessful}/><br/>
                    <div>Not yet Signed Up?</div>
                    <Link to="/signup">
                        <RaisedButton label="Sign Up Now!" primary={true} style={style}/>
                    </Link>
                </div>
           </MuiThemeProvider>
            </div>
        )
    }
}

const style = {
    margin: 15,
};

const mapStateToProps = (state: any) => {
    console.log("State is -->", state);
    return {
      state: state.login
    };
  };
  
const mapDispatchToProps = (dispatch: any) => {
    return {
      login: (body: any) => dispatch(makeLoginCall(body))
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);
