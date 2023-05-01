import WeatherCard from "../../components/WeatherCard";
import { useState, useEffect } from "react";

export default function Home( { weatherData } ) {

  const [location, setLocation] = useState('Victoria');
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput(location);
  };

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  useEffect(() => {

  }, [input]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <form className={"w-full max-w-sm"} onSubmit={handleSubmit}>
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
      <WeatherCard location={input} temperature={27} description={'Cloudy'}/>
    </main>
  )
}
