import { useEffect } from "react";

export default function ForecastCardLine ({ forecastDay, children }) {
  useEffect(() => {
    console.log('HERE IS THE FORECAST DAY:', forecastDay)
  },[])
  return (
    <>
      <tr>
        <td className="font-semibold">
          Date:
        </td>
        <td>
          {forecastDay.date}
        </td>
      </tr>
      <tr>
        <td className="font-semibold">
          Average temp:
        </td>
        <td>
          {forecastDay.day.avgtemp_c}
        </td>
      </tr>
    </>
  )
}