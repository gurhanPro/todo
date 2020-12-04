import React, { Component } from 'react'
import { connect } from "react-redux";

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Login from '../../components/login'
import Register from '../../components/register'
import * as actions from './actions'

export  class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showLogin: false,
            selectedAuthComponent: 'login'
        }
    }

    handleSelectAuthComponent(selectedAuthComponent) {
        this.setState({ selectedAuthComponent })
		}
		login(user){
			console.log('login: ', user);
			this.props.dispatch(actions.loginRequest(user))
		}

		register(user){
			console.log('register payload: ', user);
			this.props.dispatch(actions.registerRequest(user))
		}


    render() {
        return (
            <div>
                <h1>Auth here</h1>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button  variant={this.state.selectedAuthComponent === 'login' ? 'contained' : 'outlined'} onClick={this.handleSelectAuthComponent.bind(this, 'login')}>Login</Button>
                    <Button variant={this.state.selectedAuthComponent === 'register' ? 'contained' : 'outlined'} onClick={this.handleSelectAuthComponent.bind(this, 'register')}>Register</Button>
                </ButtonGroup>

                {
                    this.state.selectedAuthComponent === 'login' ? <Login login={this.login.bind(this)}/> : <Register register={this.register.bind(this)}/>
                }
                
                
            </div>
        )
    }
}
export default connect(state => ({
	authData: state.authState,
}))(Auth);