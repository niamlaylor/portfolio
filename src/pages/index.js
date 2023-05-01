import WeatherCard from "@/components/WeatherCard";
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
    handleLocation
  } = useApplicationData( { apiKey });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24`}
    >
      <SearchForm handleLocation={handleLocation} handleSubmit={handleSubmit} />
      {state.weatherData && <WeatherCard weatherData={state.weatherData}/>}
      {!state.weatherData && <p>Search for a city</p>}
    </main>
  )
}

