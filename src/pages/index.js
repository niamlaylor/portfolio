import WeatherCard from "../components/WeatherCard";
import axios from "axios";
import { useState, useEffect } from "react";

export async function getServerSideProps() {
  const apiKey = process.env.API_KEY;

  return {
    props: {
      apiKey,
    },
  };
};

export default function Home( { apiKey }) {

  const [location, setLocation] = useState('');
  const [input, setInput] = useState('Vancouver');
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput(location);
  };

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  useEffect(() => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=no`)
    .then((response) => {
      console.log(response);
      setWeatherData(response.data);
    })
    .catch((error) => {
      console.log(error);
      setWeatherData({ location: { name: 'N/A' }, current: { temp_c: 'N/A', condition: { text: 'N/A' } } })
    })
  }, [input]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24`}
    >
      <form className={"w-full max-w-sm m-20"} onSubmit={handleSubmit}>
        <div className={"flex items-center border-b border-teal-500 py-2"}>
          <input
            className={"appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"}
            type={"text"}
            placeholder={"Enter your city"}
            aria-label={"Full name"}
            onChange={handleLocation}
          />
          <button 
            className={"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"}
            type={"button"}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      {weatherData && <WeatherCard weatherData={weatherData}/>}
      {!weatherData && <p>Search for a city</p>}
    </main>
  )
}

