import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WeatherList extends Component {
		_renderWeather = () => this.props.weather.map(city =>
			(
				<tr key={city.id}>
					<td>{city.name}</td>
				</tr>
			));

		render() {
			return (
				<table>
					<thead>
						<tr>
							<th>City</th>
							<th>Temperature</th>
							<th>Pressure</th>
							<th>Humidity</th>
						</tr>
					</thead>
					<tbody>
						{this._renderWeather()}
					</tbody>
				</table>
			);
		}
}

const mapStateToProps = (state, ownProps) => ({
	weather: state.weather,
});

WeatherList.propTypes = {
	weather: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(WeatherList);
