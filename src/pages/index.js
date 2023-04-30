import WeatherCard from "../../components/WeatherCard";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <WeatherCard location={'Vancouver'} temperature={87} description={'Cloudy'}/>
    </main>
  )
}
