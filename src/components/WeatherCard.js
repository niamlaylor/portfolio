import { useState } from "react";
import TemperatureDisplay from "./TemperatureDisplay";

export default function WeatherCard ({ weatherData, handleToggle, handleExpand, expanded, unit }) {
  const { location, current } = weatherData;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-80">
      <div className="flex items-center justify-center">
        <img className="h-16 w-16" src={current.condition.icon} alt="Weather Icon" />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{location.name}</h2>
        <h3 className="text-l font-semibold">{location.region}</h3>
        <p className="text-gray-500">{current.condition.text}</p>
        <TemperatureDisplay unit={unit} temperature={current} expanded={expanded}/>
        <div className="flex items-center justify-center m-5">
          <button 
              className={"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 m-1 rounded"}
              type={"button"}
              onClick={handleToggle}
            >
              {unit === 'c' && 'Metric'}
              {unit === 'f' && 'Imperial'}
          </button>
          <button
            className={
              'flex-shrink-0 bg-gray-500 hover:bg-teal-700 border-gray-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 m-1 rounded'
            }
            type={'button'}
            onClick={handleExpand}
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
};