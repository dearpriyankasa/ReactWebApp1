import React, { Component } from 'react';
import {LoginType} from './LoginInterface';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, RaisedButton, TextField} from 'material-ui';
import '../App.css';
import {Link} from 'react-router-dom';

class Login extends Component<LoginType> {
    constructor(props: LoginType) {
        super(props)
    
        this.state = {
             email:'',
             password:'',
             doNavigate: true
        }
    }

    goToSignUp = () => {
        // if(this.state.doNavigate)
            this.props.history.push("/signup/10");
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
                    <RaisedButton label="Submit" primary={true} style={style} onClick={this.goToSignUp}/><br/>
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

export default Login
