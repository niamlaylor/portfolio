import { useEffect } from "react";
import { removeDecimals } from "@/utils/helpers";
import { getDayOfWeek } from "@/utils/helpers";

export default function ForecastCardLine ({ forecastDay, unit }) {

  const dayOfWeek = getDayOfWeek(forecastDay.date);

  useEffect(() => {
    console.log('HERE IS THE FORECAST DAY:', forecastDay)
  },[])

  return (
    <>
      <tr>
        <td className="font-semibold">
        {dayOfWeek}
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
      <tr>
        <td>
          Average humidity:
        </td>
        <td>
          {`${forecastDay.day.avghumidity}%`}
        </td>
      </tr>
    </>
  )
}