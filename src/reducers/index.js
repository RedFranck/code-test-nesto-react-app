import {
	LOG_IN_USER, 
	LOG_OUT_USER, 
	SET_POSTS, 
	SET_ALBUMS
} from '../constants';


const initialState = {
	isLoggedIn: false,
	userLogged: '',
	posts: [],
	albums: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN_USER:
			return {...state, isLoggedIn: true, userLogged: action.payload};

		case LOG_OUT_USER:
			return initialState; // for now everthing returns to its initial state
		
		case SET_POSTS:
			return {...state, posts: action.payload};
		
		case SET_ALBUMS:
			return {...state, albums: action.payload};

		default:
			return state;
	}
};


export default rootReducer;
