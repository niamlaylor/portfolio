import TemperatureDisplay from "./TemperatureDisplay";
import WeatherCardButtons from "./WeatherCardButtons";

export default function WeatherCard ({ weatherData, handleToggle, handleExpand, expanded, unit }) {
  const { location, current } = weatherData;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-80">
      <div className="flex items-center justify-center">
        <img 
          className="h-16 w-16" 
          src={current.condition.icon} 
          alt="Weather Icon" 
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{location.name}</h2>
        <h3 className="text-l font-semibold">{location.region}</h3>
        <p className="text-gray-500">{current.condition.text}</p>
        <TemperatureDisplay 
          unit={unit} 
          temperature={current} 
          expanded={expanded}
        />
        <WeatherCardButtons 
          handleToggle={handleToggle} 
          handleExpand={handleExpand} 
          unit={unit}
        />
        <div className="flex items-center justify-end">
          <a href="/" className="text-teal-500 underline">Forecast</a>
        </div>
      </div>
    </div>
  );
};