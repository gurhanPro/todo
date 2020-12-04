import React from 'react';
import { shallow } from 'enzyme';
import { createMount } from '@material-ui/core/test-utils'; 
import Login from './index';

const dumyTodo = {
	id: 1,
	tilte: 'title',
	description: 'description'
}

it('renders Login component without crashing', () => {
	createMount(<Login />);
});


it('should display Todo title and description', () => {
	const wrapper = shallow(
		<Login todo={dumyTodo} />
	);

	const email = wrapper.find('#email');
	expect(email.exists()).toBe(true);
	
	const password = wrapper.find('#password');
	expect(password.exists()).toBe(true);
	
	const loginButton = wrapper.find('#loginButton');
    expect(loginButton.exists()).toBe(true);
});