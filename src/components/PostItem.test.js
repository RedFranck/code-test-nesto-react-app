import React from 'react';
import {mount} from 'enzyme';

import {PostItem} from './PostItem';

const props = {post: {title: 'post title', body: 'content test', userId:1}};

describe('PostItem', () => {
	let postItem = mount(<PostItem {...props} />);
	
	it('renders the Post Item title', () => {
		expect(postItem.find('h3').exists()).toBe(true);
	});
});
