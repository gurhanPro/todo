import React, { Component } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import { TextField, Grid } from '@material-ui/core';

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
		this.setState({ showEdit: true, title: todo.title, description: todo.description, selectedTodo: todo});
	}

	edit(){
		const { title, description, selectedTodo } = this.state
		const { id, isComplete} = selectedTodo

		if(!title || !description || !this.state.selectedTodo){
			console.log('throw error');
			return
		}

		this.props.editTodo({ title, description, id, isComplete})
		this.resetEdit();
	}

	resetEdit() {
		this.setState({ showEdit: false });
	}


	handleEditTodoChange(event){
		this.setState({ [event.target.name]: event.target.value })
	}

	render() {
		const todo = this.props.todo || ''
		return (
			<div>
				{
					!this.state.showEdit ?
						<div style={{ backgroundColor: 'white', margin: '1%', color: '#5C5C5C', padding: '2%', textAlign: 'left' }}>
							<span style={{ float: 'right' }}><MoreVertIcon onClick={this.showEdit.bind(this)} /></span>
							<h3 style={{textDecoration: todo.isComplete ? 'line-through' : 'none'}}>title: {todo.title}</h3>
							<p style={{textDecoration: todo.isComplete ? 'line-through' : 'none'}} >
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
