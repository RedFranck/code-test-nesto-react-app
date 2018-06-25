import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button, Grid} from 'react-bootstrap';

import './App.css';
import logo from '../logo.svg';
import LoginForm from './LoginForm';
import ContentPage from './ContentPage';
import {logOutUser} from '../actions'


const mapStateToProps = state => {
	return {
		isLoggedIn: state.isLoggedIn,
		userLogged: state.userLogged
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logOutUser: () => dispatch(logOutUser())
	};
};


class App extends Component {

	handleLogoutButton() {
		console.log('logout');
		this.props.logOutUser();
	}

	render() {
		let logoutButton = null, 
			loginForm = null, 
			contentPage = null;


		if (this.props.isLoggedIn) {
			logoutButton = (
				<Button 
					className="App-btn-logout" 
					onClick={() => this.handleLogoutButton()}
				>
					Logout <br/> 
					<b>{this.props.userLogged}</b>
				</Button>
			);
		} else {
			logoutButton = <span />;
		}

		if (!this.props.isLoggedIn) {
			loginForm = (
				<LoginForm />
			);
		}

		if (this.props.isLoggedIn) {
			contentPage = (
				<ContentPage />
			);
		}

		
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">React Code Test</h1>

					{logoutButton}
				</header>
				
				<Grid>
					{loginForm}
					{contentPage}
				</Grid>
			</div>
		);
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
