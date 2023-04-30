import WeatherCard from "../../components/WeatherCard";
import { useState } from "react";

export default function Home() {

  const [location, setLocation] = useState('');

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <form class="w-full max-w-sm">
        <div class="flex items-center border-b border-teal-500 py-2">
          <input class="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" onChange={handleLocation} type="text" placeholder="Jane Doe" aria-label="Full name"/>
          <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
            Submit
          </button>
        </div>
      </form>
      <WeatherCard location={location} temperature={27} description={'Cloudy'}/>
    </main>
  )
}
