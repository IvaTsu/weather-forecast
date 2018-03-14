import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { searchTerm: '' };
	}

	_onInputChange = (event) => {
		console.log(event.target.value);
		this.setState({
			searchTerm: event.target.value,
		});
	}

	render() {
		return (
			<form>
				<input
					placeholder="Enter city name"
					value={this.state.searchTerm}
					onChange={this._onInputChange}
				/>
				<button type="submit">Search</button>
			</form>
		);
	}
}

export default connect()(SearchBar);
