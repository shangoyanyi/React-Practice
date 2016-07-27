import React, { Component } from 'react';
import Title from './Title';
import LoginForm from './LoginForm.js';
import CatList from './CatList.js';

import {connect} from 'react-redux';
import {addCount} from '../actions/countAction';
//import {addCat} from '../actions/catAction';

import CatForm from './CatForm.js';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			count: 0,			
			title: 'LoginForm'
		};
	}

	componentWillMount() {
		console.log('component will mount');
	}

	componentDidMount() {
		console.log('component did mount');
		console.log(this.header);
		console.dir(this.header);
	}

	render() {		
		return (
			<div>
				<h2>Hello</h2>
				<button onClick={ () => {this.props.dispatch(addCount())} }>add counter</button>
				
				<Title text={this.state.title}></Title>
				<LoginForm></LoginForm>
				
				<CatList data={this.props.cats}></CatList>
				
				<br/>
				<CatForm></CatForm>
			</div>
		);
	}
}


export default connect(function(state){
	return {
		counter: state.counter,
		cats: state.cats
	}
})(App)