import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Col} from 'react-bootstrap';

import PostItem from './PostItem';
import {setPosts} from '../actions';


const PostsUrl = 'https://jsonplaceholder.typicode.com/posts';

const mapDispatchToProps = dispatch => {
	return {
		setPosts: posts => dispatch(setPosts(posts))
	};
};

const mapStateToProps = state => {
	return {posts: state.posts};
};


class PostList extends Component {
	constructor() {
		super();

		this.state = {
			postsAreLoaded: false
		};
	}

	componentDidMount() {
		fetch(PostsUrl)
			.then(response => {
				return response.json();
			})
			.then(postsJson => {
				this.props.setPosts(postsJson);
				this.setState({postsAreLoaded: true});
			});
	}

	render() {
		let loader = (!this.state.postsAreLoaded)? <div className="loader" /> : null;

		return (
			<Col xs={6}>
				<h2>Posts</h2>

				{loader}

				<Grid fluid className="post-list">
					{this.props.posts.map(post => {
						return (<PostItem key={post.id} post={post} />)
					})}
				</Grid>
			</Col>
		)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(PostList);
