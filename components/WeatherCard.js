const WeatherCard = ({ location, temperature, description, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64">
      <div className="flex items-center justify-center">
        <img className="h-16 w-16" src={icon} alt="Weather Icon" />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{location}</h2>
        <p className="text-gray-500">{description}</p>
        <p className="text-4xl font-bold mt-2">{temperature}°C</p>
      </div>
    </div>
  );
};

export default WeatherCard;