import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData( { apiKey }) {
  const [state, setState] = useState({
    location: '',
    input: 'Vancouver',
    weatherData: null,
    unit: 'c'
  });

  const setLocation = location => setState({ ...state, location });
  const setInput = input => setState({ ...state, input });
  const setWeatherData = weatherData => setState({ ...state, weatherData });
  const setUnit = unit => setState({ ...state, unit });

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput(state.location);
  };

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  useEffect(() => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${state.input}&aqi=no`)
    .then((response) => {
      console.log(response);
      setWeatherData(response.data);
    })
    .catch((error) => {
      console.log(error);
      setWeatherData({ location: { name: 'N/A' }, current: { temp_c: 'N/A', condition: { text: 'N/A', icon:'../../public/favicon.ico' } } })
    })
  }, [state.input]);

  const handleToggle = () => {
    if (state.unit === 'c') {
      setUnit('f')
    } else {
      setUnit('c')
    };
  };

  return {
    state,
    handleSubmit,
    handleLocation,
    handleToggle
  };
};