import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import './ContentPage.css';
import PostList from './PostList';
import AlbumList from './AlbumList';


class ContentPage extends Component {
	render() {
		return (
			<Row className="centered-content">
				<PostList />

				<AlbumList />
			</Row>
		)
	}
}


export default ContentPage;
