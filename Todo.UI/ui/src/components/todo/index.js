import React, { Component } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

export default class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showEdit: false,
			selectedTodo: null,
			title: '',
			description: '',
		}
	}
	showEdit() {
		const todo = this.props.todo
		this.setState({ showEdit: true, title: todo.title, description: todo.description, selectedTodo: todo });
	}

	edit() {
		const { title, description, selectedTodo } = this.state
		const { id, isComplete } = selectedTodo

		if (!title || !description || !this.state.selectedTodo) {
			console.log('throw error');
			return
		}

		this.props.editTodo({ title, description, id, isComplete })
		this.resetEdit();
	}

	resetEdit() {
		this.setState({ showEdit: false, anchorEl: null });
	}

	handleEditTodoChange(event) {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleMenuOpen(event) {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleMenuClose() {
		this.setState({ anchorEl: null });
	};

	toggleComplete() {
		const todo = this.props.todo
		this.props.toggleComplete(todo)
	}

	deleteTodo() {
		const todo = this.props.todo
		this.props.deleteTodo(todo)
	}

	render() {
		const todo = this.props.todo || ''
		return (
			<div>
				{
					!this.state.showEdit ?
						<div style={{ backgroundColor: 'white', margin: '1%', color: '#5C5C5C', padding: '2%', textAlign: 'left' }}>
							<MoreVertIcon
								onClick={this.handleMenuOpen.bind(this)}
								style={{ float: 'right' }}
							/>
							<Menu
								id="simple-menu"
								anchorEl={this.state.anchorEl}
								keepMounted
								open={Boolean(this.state.anchorEl)}
								onClose={this.handleMenuClose.bind(this)}
							>
								<MenuItem onClick={() => this.toggleComplete()}>{todo.isComplete ? 'Un Complete' : 'Complete'}</MenuItem>
								<MenuItem onClick={() => this.showEdit()}>edit</MenuItem>
								<MenuItem onClick={() => this.deleteTodo()}>delete</MenuItem>
							</Menu>


							<h3 id="title" style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }}>title: {todo.title}</h3>
							<p id="description" style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }} >
								description: {todo.description}
							</p>
						</div>
						:
						<div>
							<TextField
								variant="outlined"
								name="title"
								value={this.state.title}
								onChange={this.handleEditTodoChange.bind(this)}
								style={{ backgroundColor: '#fff', width: '80%', marginLeft: '1%', float: 'left' }}
							/>

							<TextField
								variant="outlined"
								name="description"
								value={this.state.description}
								onChange={this.handleEditTodoChange.bind(this)}
								style={{ backgroundColor: '#fff', width: '80%', marginLeft: '1%', float: 'left' }}
							/>

							<Button style={{ margin: 'auto', fontSize: '220%' }} onClick={this.edit.bind(this)}><DoneIcon style={{ color: '#5EA5EE', fontWeight: 'bold' }} /></Button>
							<Button style={{ margin: 'auto', fontSize: '220%' }} onClick={this.resetEdit.bind(this)}><CloseIcon style={{ color: 'red', fontWeight: 'bold' }} /></Button>
						</div>
				}

			</div>
		)
	}
}
