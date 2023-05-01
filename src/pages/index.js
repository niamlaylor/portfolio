import WeatherCard from "../components/WeatherCard";
import axios from "axios";
import { useState, useEffect } from "react";
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
      {state.weatherData && <WeatherCard weatherData={state.weatherData}/>}
      {!state.weatherData && <p>Search for a city</p>}
    </main>
  )
}

