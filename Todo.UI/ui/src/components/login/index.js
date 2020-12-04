import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default class Login extends Component {
		constructor(props) {
			super(props)
			this.state = {
				username: '',
				password: '',
			}

			this.handleFieldChange = this.handleFieldChange.bind(this)
		}

		handleFieldChange(event){
			this.setState({ [event.target.name]: event.target.value })
		}

		login(){
			const { username, password } = this.state
			if(!username || !password){
				console.log('enter username and password');
				return
			}
 
			console.log('payload', { username, password } );
			
		}

    render() {
        return (
            <div style={{width:'20%', margin: 'auto', padding: '1%'}}>
                <TextField
									variant="outlined"
									fullWidth
									name="username"
									placeholder = 'username'
									value={this.state.username}
									onChange={this.handleFieldChange}
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
							/>
							<br/>
							<br/>
							<Button size="large" style={{backgroundColor:'#d7fc07', color:'black'}} onClick={this.login.bind(this)}>Login</Button>
            </div>
        )
    }
}
