import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default class Register extends Component {
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

		register(){
			const { email, password } = this.state
			if(!email || !password){
				console.log('enter email and password');
				return
			}
 
			console.log('register compnent payload', { email, password } );
			this.props.register({email, password, role: 'admin' })
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
							<Button  size="large" style={{backgroundColor:'#d7fc07', color:'black'}} onClick={this.register.bind(this)}>Register</Button>
            </div>
        )
    }
}
