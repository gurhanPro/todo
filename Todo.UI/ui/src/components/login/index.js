import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default class Login extends Component {
		constructor(props) {
			super(props)
			this.state = {
				email: '',
				password: '',
			}

			this.handleFieldChange = this.handleFieldChange.bind(this)
		}

		handleFieldChange(event){
			this.setState({ [event.target.name]: event.target.value })
		}

		login(){
			const { email, password } = this.state
			if(!email || !password){
				console.log('enter email and password');
				return
			}
 
			console.log('payload', { email, password } );
			this.props.login({email, password })
		}

    render() {
        return (
            <div style={{width:'20%', margin: 'auto', padding: '1%'}}>
                <TextField
									variant="outlined"
									fullWidth
									name="email"
									placeholder = 'email'
									value={this.state.email}
									onChange={this.handleFieldChange}
									id="email"
							/>
							<br/>
							<br/>

							<TextField
									variant="outlined"
									fullWidth
									name="password"
									placeholder = 'password'
									value={this.state.password}
									onChange={this.handleFieldChange}
									id="password"
							/>
							<br/>
							<br/>
							<Button id="loginButton" size="large" style={{backgroundColor:'#d7fc07', color:'black'}} onClick={this.login.bind(this)}>Login</Button>
            </div>
        )
    }
}
