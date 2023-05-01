import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData( { apiKey }) {
  const [state, setState] = useState({
    location: '',
    input: 'Vancouver',
    weatherData: null,
  });

  const setLocation = location => setState({ ...state, location });
  const setInput = input => setState({ ...state, input });
  const setWeatherData = weatherData => setState({ ...state, weatherData });

  useEffect(() => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${state.input}&aqi=no`)
    .then((response) => {
      console.log(response);
      setWeatherData(response.data);
    })
    .catch((error) => {
      console.log(error);
      setWeatherData({ location: { name: 'N/A' }, current: { temp_c: 'N/A', condition: { text: 'N/A' } } })
    })
  }, [state.input]);

  return {
    state,
    setLocation,
    setInput,
  };
};