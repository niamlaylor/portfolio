import WeatherCard from "@/components/WeatherCard";
import ForecastCard from "@/components/ForecastCard";
import SearchForm from "@/components/SearchForm";
import useApplicationData from "../hooks/useApplicationData";

export async function getServerSideProps() {
  const apiKey = process.env.API_KEY;

  return {
    props: {
      apiKey,
    },
  };
};

export default function Home( { apiKey }) {

  const {
    state,
    handleSubmit,
    handleLocation,
    handleToggle,
    handleExpand
  } = useApplicationData( { apiKey });

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24`}
    >
      <SearchForm handleLocation={handleLocation} handleSubmit={handleSubmit} />
      {state.weatherData && 
        <WeatherCard 
          weatherData={state.weatherData} 
          handleExpand={handleExpand}
          expanded={state.expanded}
          handleToggle={handleToggle} 
          unit={state.unit}
        />
      }
      {!state.weatherData && <p>Search for a city</p>}
      <ForecastCard forecastData={state.forecastData} unit={state.unit}/>
    </main>
  )
}

