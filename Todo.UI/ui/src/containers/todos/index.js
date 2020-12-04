import React, { Component } from 'react'
import Header from '../../components/header'
import { connect } from "react-redux";
import { logout } from '../auth/actions';


export  class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    logout() {
        this.props.dispatch(logout())
    }

    render() {
        return (
            <div>
                <Header logout={this.logout.bind(this)}/>
                <h1>Todos here</h1>
            </div>
        )
    }
}
export default connect(state => ({
	todoData: state.todoReducer,
}))(Todos);
