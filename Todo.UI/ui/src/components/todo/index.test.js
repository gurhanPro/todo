import React from 'react';
import { shallow } from 'enzyme';
import { createMount } from '@material-ui/core/test-utils'; 
import Todo from './index';

const dumyTodo = {
	id: 1,
	tilte: 'title',
	description: 'description'
}

it('renders Todo without crashing', () => {
	createMount(<Todo />);
});


it('should display Todo title and description', () => {
	const wrapper = shallow(
		<Todo todo={dumyTodo} />
	);

	const title = wrapper.find('#title');
	expect(title.exists()).toBe(true);
	
	const description = wrapper.find('#description');
    expect(description.exists()).toBe(true);
});