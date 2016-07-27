import React, { Component } from 'react';

export default class Title extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.text}</h1>
				<h1>{this.props.icon}</h1>
			</div>
		);
	}
}

Title.propTypes = {
	text: React.PropTypes.string 
}

Title.defaultProps = {
	icon: 'default props'
}