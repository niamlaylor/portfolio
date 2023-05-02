export default function ForecastCard ({ forecastData, unit }) {

  const { forecast } = forecastData;

  return (
    <div className="rounded-lg p-4 w-80 mt-10 border border-gray-300">
      <table className="w-full">
        <tbody>
          <tr>
            <td className="font-semibold">Forecast:</td>
            <td>80</td>
          </tr>
          <tr>
            <td className="font-semibold">Region:</td>
            <td>{forecast.forecastday[0].date}</td>
          </tr>
          <tr>
            <td className="font-semibold">Condition:</td>
            <td>60</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};





