import React, { Component } from 'react';
import {SignUpType} from './SignUpInterface';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, RaisedButton, TextField} from 'material-ui';
// import { Redirect } from 'react-router-dom';
import '../App.css';

class SignUp extends Component<SignUpType> {
    constructor(props: SignUpType) {
        super(props)
    
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmpassword: ''
        }
    }
    
    render() {
        console.log("Props are --> ", this.props);
        return (
            <div>
            <MuiThemeProvider>
                <div className="App">
                    <AppBar
                    title="Sign Up"
                    />
                    <TextField
                        type="text"
                        hintText="Enter your Firstname"
                        floatingLabelText="*Firstname"
                        onChange = {(event,newValue) => this.setState({firstname:newValue})}
                        />
                    <br/>
                    <TextField
                        type="text"
                        hintText="Enter your Lastname"
                        floatingLabelText="*Lastname"
                        onChange = {(event,newValue) => this.setState({lastname:newValue})}
                        />
                    <br/>
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
                    <TextField
                        type="password"
                        hintText="Confirm your Password"
                        floatingLabelText="*Confirm Password"
                        onChange = {(event,newValue) => this.setState({confirmpassword:newValue})}
                        />
                    <br/>
                    <RaisedButton label="Submit" primary={true} style={style}/>{this.props.match.params.id}
                </div>
           </MuiThemeProvider>
            </div>
        )
    }
}

const style = {
    margin: 15,
};

export default SignUp
