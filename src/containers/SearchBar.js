import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { searchTerm: '' };
	}

	_onInputChange = (event) => {
		this.setState({
			searchTerm: event.target.value,
		});
	}

	_onFormSubmit = (event) => {
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this._onFormSubmit}>
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
