import React, { Component } from 'react'
import Header from '../../components/header'
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import { CircularProgress, Backdrop } from '@material-ui/core';
import List from '../../components/list/index';

import { logout } from '../auth/actions';
import * as actions from './actions'


export class Todos extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }



    componentWillMount() {
        this.props.dispatch(actions.getAllTodosRequest())
    }

    componentDidUpdate(){
        if(!this.props.authData.loggedinUser){
                this.props.history.push("/")
        }
    }

    logout() {
        this.props.dispatch(logout())
    }
    addTodo(todo){
		console.log('todo to be created is: ', todo);
		this.props.dispatch(actions.addTodoRequest(todo))
    }
    
    editTodo(todo){
		console.log('todo to be edited is: ', todo);
		this.props.dispatch(actions.editTodoRequest(todo))
    }
    
    toggleComplete(todo){
        console.log('todo to be toggled is: ', todo);
		this.props.dispatch(actions.toggleCompleteForTodoRequest(todo))   
    }

    deleteTodo(todo){
        console.log('todo to be toggled is: ', todo);
		this.props.dispatch(actions.deleteTodoRequest(todo))   
    }

    render() {

        const lists =  this.props.todoData.allTodos || [];
        const { getAllTodosLoader, addTodoLoader } = this.props.todoData
        return (
            <div>
                <Header logout={this.logout.bind(this)} />
                <div>
                    <Grid container spacing={3} style={{ padding: '3%', backgroundColor: 'E4EBEF', width: '95%', margin: 'auto' }}>
                                <Grid item xs={12} sm={8} md={8} style={{margin: 'auto'}}>
                                    <List todos={lists} 
                                    addTodo={this.addTodo.bind(this)} 
                                    editTodo={this.editTodo.bind(this)}
                                    toggleComplete={this.toggleComplete.bind(this)}
                                    deleteTodo={this.deleteTodo.bind(this)}
                                    />
                                </Grid>
                    </Grid>

                    <Backdrop style={{ color: '#fff', zIndex: 1000 }} open={addTodoLoader}>
                        <CircularProgress size={80} color="inherit" />
                        <h3 style={{ marginTop: '15%', marginLeft: '-15%' }}>............. adding todo.....</h3>
                    </Backdrop>

                    <Backdrop style={{ color: '#fff', zIndex: 1000 }} open={getAllTodosLoader}>
                        <CircularProgress size={80} color="inherit" />
                        <h3 style={{ marginTop: '15%', marginLeft: '-15%' }}>............. getting all todos.....</h3>
                    </Backdrop>


                </div>
            </div>
        )
    }
}
export default connect(state => ({
    todoData: state.todoState,
	authData: state.authState,
}))(Todos);
