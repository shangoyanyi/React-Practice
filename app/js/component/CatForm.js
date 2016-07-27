import React, { Component } from 'react';

import {connect} from 'react-redux';
import {addCat} from '../actions/catAction';


export default class CatForm extends Component {
	constructor(props){
		super(props);

		this.state = {
			newCat: {
				"isActive": false,
				"price": "$",
				"picture": "http://placeimg.com/200/200/any",
				"name": "",
				"about":""
			}
		};
	}
	handleNameChanged (e){
		var _newCat = this.state.newCat;
		_newCat.name = e.target.value;

		this.setState({
			newCat: _newCat
		});
		console.log(this.state.newCat.name);
	}
	handleAboutChanged (e){
		var _newCat = this.state.newCat;
		_newCat.about = e.target.value;

		this.setState({
			newCat: _newCat
		});
		console.log(this.state.newCat.about);
	}
	handlePriceChanged (e){
		var _newCat = this.state.newCat;
		_newCat.price = e.target.value;

		this.setState({
			newCat: _newCat
		});
		console.log(this.state.newCat.price);
	}
	handleIsActiveChanged (e){
		var _newCat = this.state.newCat;
		_newCat.isActive = e.target.checked;

		this.setState({
			newCat: _newCat
		});
		console.log(this.state.newCat.isActive);
	}
	render() {
		return (
			<div>
				<h1>Add New Cat</h1>
				<p>
					<label>name</label>
					<input type='text' placeholder="enter cat's name" value={this.state.newCat.name} onChange={ this.handleNameChanged.bind(this) } />
				</p>

				<p>
					<label>about</label>
					<input type='text' placeholder="enter cat's about" value={this.state.newCat.about} onChange={ this.handleAboutChanged.bind(this) } />
				</p>

				<p>
					<label>price</label>
					<input type='text' placeholder="enter cat's price" value={this.state.newCat.price} onChange={ this.handlePriceChanged.bind(this) } />
				</p>

				<p>
					<label>
						<input type='checkbox' value={this.state.newCat.isActive} onChange={ this.handleIsActiveChanged.bind(this)}/> is active?
					</label>
				</p>

				<div>
					<button onClick={ 
						()=> {
							this.props.dispatch(addCat(this.state.newCat));

							this.setState({ newCat: {
								"isActive": false,
								"price": "$",
								"picture": "http://placeimg.com/200/200/any",
								"name": "",
								"about":""
							} });
						} 
					}>Add Cat</button>
				</div>

			</div>
		);
	}
}

export default connect(function(state){
	return {
		cats: state.cats
	}
})(CatForm);