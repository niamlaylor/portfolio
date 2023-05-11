import { useEffect } from "react";
import { removeDecimals } from "@/utils/helpers";

export default function ForecastCardLine ({ forecastDay, unit }) {
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
        <td>
          Average temp:
        </td>
        <td>
          {unit === 'c' && `${removeDecimals(forecastDay.day.avgtemp_c)}°C`}
          {unit === 'f' && `${removeDecimals(forecastDay.day.avgtemp_f)}°F`}
        </td>
      </tr>
    </>
  )
}