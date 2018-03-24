import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
		_renderWeather = (data) => {
			const city = data.city.name;
			const cityID = data.city.id;
			const temps = data.list.map(temp => temp.main.temp);

			return (
				<tr key={cityID}>
					<td>{city}</td>
					<td>
						<Sparklines height={120} width={180} data={temps}>
							<SparklinesLine color="blue" />
						</Sparklines>
					</td>
				</tr>
			);
		}

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
						{this.props.weather.map(data => this._renderWeather(data))}
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
