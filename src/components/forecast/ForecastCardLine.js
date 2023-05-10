import { useEffect } from "react";

export default function ForecastCardLine ({ forecastDay, children }) {
  useEffect(() => {
    console.log('HERE IS THE FORECAST DAY:', forecastDay)
  },[])
  return (
    <tr>
      <td className="font-semibold">
        {children}
      </td>
      <td>
        {forecastDay.date}
      </td>
    </tr>
  )
}