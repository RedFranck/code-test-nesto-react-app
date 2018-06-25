import React, {Component} from 'react';
import {Row} from 'react-bootstrap';


export class PostItem extends Component {
	constructor() {
		super();

		console.log('POST ITEM!');
	}

	render() {
		return (
			<Row className="post-item card">
				<div className="card-wrapper">
					<h3>{this.props.post.title}</h3>
					<p>{this.props.post.body}</p>
					<small>By user{this.props.post.userId}</small>
				</div>
			</Row>
		)
	}
}


export default PostItem;
