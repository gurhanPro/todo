import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Todo from '../todo';
import { TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAddCardField: false,
			title: '',
			description: '',
			selectedTodo: null,
		}

    this.handleAddTodoFieldChange = this.handleAddTodoFieldChange.bind(this);
	}


	handleAddTodoFieldChange(event) {
		this.setState({ [event.target.name]: event.target.value})
	}

	showAddCardField(){
		const selectedTodo = this.props.list || '';
		this.setState({ showAddCardField: true, selectedTodo });
	}

	resetAddTodoField(){
		this.setState({ showAddCardField: false, title: ''});
	}

	addTodo(){
		const { title, description } = this.state;

		if(!title){
			console.log('add title');
			return
		}

		if(!description){
			console.log('no description');
			return
		}

		const todo = {
			title,
			description,
			isComplete: false
		}

		this.props.addTodo(todo)
		this.resetAddTodoField()
	}

	render() {
		const todos = this.props.todos || [];

		return (
			<Grid container style={{ backgroundColor: '#e4ebef', padding: '2%' , margin: 'auto'}}>

				<Grid item xs={6}>
					<p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '110%', paddingLeft: '3%' }}>My Todos</p>
				</Grid>

				<Grid item xs={6} style={{ textAlign: 'right' }}>
					<Button
						onClick={this.showAddCardField.bind(this)}
						style={{ backgroundColor: '#5EA5EE', color: 'white' }}
					>  <AddIcon /> add</Button>
				</Grid>

				{
					todos.map((todo, index) => (
						<Grid item xs={12}>
							<Todo key={index} todo={todo} editTodo={this.props.editTodo} />
						</Grid>
					))
				}
				{!this.state.showAddCardField ?
					<Button 	onClick={this.showAddCardField.bind(this)}>
						<AddIcon /> 
						{(todos.length > 0) ? 'Add another todo' : 'Add a todo'}
					</Button> : ''
				}
				{
					this.state.showAddCardField ?
						<div style={{ padding: '1%', width: '100%', textAlign: 'left' }}>
							<TextField
								variant="outlined"
								fullWidth
								name="title"
								placeholder = 'todo title'
								value={this.state.title}
								onChange={this.handleAddTodoFieldChange}
								style={{ backgroundColor: '#fff' }}
							/>
							<TextField
								variant="outlined"
								fullWidth
								name="description"
								placeholder = 'todo description'
								value={this.state.description}
								onChange={this.handleAddTodoFieldChange}
								style={{ backgroundColor: '#fff' }}
							/>
							<Button style={{ backgroundColor: '#5EA5EE', color: 'white', marginTop: '1%' }} onClick={this.addTodo.bind(this)}>Add Todo</Button>
							<Button style={{ margin: 'auto' }} onClick={this.resetAddTodoField.bind(this)}><CloseIcon /></Button>
						</div> : ''
				}
			</Grid>
		)
	}
}
