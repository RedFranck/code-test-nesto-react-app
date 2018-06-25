import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';

import {setAlbums} from '../actions';


const AlbumsUrl = 'https://jsonplaceholder.typicode.com/albums';

const mapDispatchToProps = dispatch => {
	return {
		setAlbums: albums => dispatch(setAlbums(albums))
	};
};

const mapStateToProps = state => {
	return {albums: state.albums};
};


class AlbumList extends Component {
	constructor() {
		super();

		this.state = {
			albumsAreLoaded: false
		};
	}

	componentDidMount() {
		fetch(AlbumsUrl)
			.then(response => {
				return response.json();
			})
			.then(albumsJson => {
				this.props.setAlbums(albumsJson);
				this.setState({albumsAreLoaded: true});
			});
	}

	render() {
		let loader = (!this.state.albumsAreLoaded)? <div className="loader" /> : null;

		return (
			<Col xs={6}>
				<h2>Albums</h2>

				{loader}

				<Grid fluid className="album-list">
					{this.props.albums.map(album => {
						return (
							<Row className="card album-item" key={album.id} >
								<div className="card-wrapper">
									<h3>{album.title}</h3>
									<small>By user{album.userId}</small>
								</div>
							</Row>
						)
					})}
				</Grid>
			</Col>
		)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
