import {
	LOG_IN_USER, 
	LOG_OUT_USER, 
	SET_POSTS,
	SET_ALBUMS
} from '../constants';


export const logInUser = (username) => ({
	type: LOG_IN_USER,
	payload: username
});

export const logOutUser = () => ({
	type: LOG_OUT_USER
});

export const setPosts = (posts) => ({
	type: SET_POSTS,
	payload: posts
});

export const setAlbums = (albums) => ({
	type: SET_ALBUMS,
	payload: albums
});
