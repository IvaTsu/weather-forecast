import axios from 'axios';

const API_KEY = 'ac2004b69a87c7c911eafb924337175e';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

const fetchWeatherSuccess = response => ({
	type: FETCH_WEATHER,
	payload: response,
});


export const fetchWeather = city => (dispatch) => {
	const url = `${ROOT_URL}&q=${city},us`;
	axios.get(url)
		.then(response => dispatch(fetchWeatherSuccess(response.data)))
		.catch(error => error);
};
