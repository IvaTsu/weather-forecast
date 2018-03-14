import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
	render() {
		return (
			<div>Search</div>
		);
	}
}

export default connect()(SearchBar);
