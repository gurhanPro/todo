import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Login from '../../components/login'
import Register from '../../components/register'

export default class Auth extends Component {
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

    render() {
        return (
            <div>
                <h1>Auth here</h1>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button  variant={this.state.selectedAuthComponent === 'login' ? 'contained' : 'outlined'} onClick={this.handleSelectAuthComponent.bind(this, 'login')}>Login</Button>
                    <Button variant={this.state.selectedAuthComponent === 'register' ? 'contained' : 'outlined'} onClick={this.handleSelectAuthComponent.bind(this, 'register')}>Register</Button>
                </ButtonGroup>

                {
                    this.state.selectedAuthComponent === 'login' ? <Login /> : <Register />
                }
                
                
            </div>
        )
    }
}
