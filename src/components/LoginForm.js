import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, FormControl, FormGroup, ControlLabel, Button, Row, Col} from 'react-bootstrap';

import './LoginForm.css';
import users from '../data/users.json';
import {logInUser} from '../actions'


const mapDispatchToProps = dispatch => {
	return {
		logInUser: (username) => dispatch(logInUser(username))
	};
};


class LoginForm extends Component {
	constructor() {
		super();

		this.state = {
			formUser: '',
			formPasswordHash: ''
		};
	}

	checkUserPassword(username, passwordHash) {
		let userAndPasswordMatch = users.find(el => {
			return el.username === username && el.passwordHash === passwordHash;
		});

		return Boolean(userAndPasswordMatch);
	}

	handleSubmit(e) {
		e.preventDefault();

		if (this.checkUserPassword(this.state.formUser, window.md5(this.state.formPasswordHash))) {
			this.props.logInUser(
				this.state.formUser
			);
			this.setState({formUser: '', formPasswordHash: ''});
		} else {
			// display error
		}

		console.log('submit');
	}

	render() {
		return (
			<Row>
				<Col xs={6} xsOffset={3}>
					<Form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
						
						<p>Log in to see the content, use one of these user info</p>
						<p>user: '<b>admin</b>' password: '<b>password</b>'</p>
						<p>user: '<b>user</b>' password: '<b>asdasd</b>'</p>
						<br/>
						<br/>
						<FormGroup controlId="usernameInput">
							<ControlLabel>username</ControlLabel>
							<FormControl 
								onChange={e => this.setState({formUser: e.target.value})}
								value={this.state.formUser}
							 />
						</FormGroup>

						<FormGroup controlId="passwordInput">
							<ControlLabel>password</ControlLabel>
							<FormControl 
								type="password" 
								onChange={e => this.setState({formPasswordHash: e.target.value})} 
								value={this.state.formPasswordHash}
							/>
						</FormGroup>
						
						<Button type="submit">Submit</Button>
					</Form>
				</Col>
			</Row>
		)
	}
}


export default connect(null, mapDispatchToProps)(LoginForm);
