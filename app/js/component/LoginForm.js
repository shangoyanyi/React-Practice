import React, { Component } from 'react';

export default class LoginForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: ''
		};

		// username change event handler
		this.handleUsernameChange = (e) => {
			console.log(e.target.value);
		
			this.setState({
				username: e.target.value
			});
		}
	}
	

	render() {
		return (
			<form action="">
				<input type="text" placeholder='username' value={this.state.username} onChange={this.handleUsernameChange}/>
			</form>
		);
	}
}
