import ForecastCardLine from "./ForecastCardLine";

export default function ForecastCard ({ forecastData, unit }) {

  const forecastArray = forecastData.forecast.forecastday;
  const forecastCardLines = forecastArray.map((day, index) => {
    return (
      <ForecastCardLine
        key={index}
        forecastDay={day}
        unit={unit}
      >
        Date:
      </ForecastCardLine>
    )
  })

  return (
    <div className="rounded-lg p-4 w-80 mt-10 border border-gray-300">
      <table className="w-full">
        <tbody>
          {forecastCardLines}
        </tbody>
      </table>
    </div>
  );
};






