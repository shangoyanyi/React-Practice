import React, { Component } from 'react';

export default class CatList extends Component {
	constructor(props){
		super(props);
	}

	render() {
		var catsList = this.props.data.map((item) => {
			return (
				<tr key={item.name}>
					<td>{item.name}</td>
					<td>{item.price}</td>
					<td>{item.about}</td>
					<td><img src={item.picture} /></td>
				</tr>
			);
		});

		return (
			<table>
				<tbody>
				{ catsList }		
				</tbody>
			</table>
		);
	}
}
