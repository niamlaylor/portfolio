const WeatherCard = ({ weatherData }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-80">
      <div className="flex items-center justify-center">
        <img className="h-16 w-16" src={weatherData.current.condition.icon} alt="Weather Icon" />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{weatherData.location.name}</h2>
        <h3 className="text-l font-semibold">{weatherData.location.region}</h3>
        <p className="text-gray-500">{weatherData.current.condition.text}</p>
        <p className="text-4xl font-bold mt-2">{weatherData.current.temp_c}°C</p>
      </div>
    </div>
  );
};

export default WeatherCard;