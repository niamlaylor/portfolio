import { useEffect } from "react";

export default function ForecastCardLine ({ forecastDay }) {
  useEffect(() => {
    console.log('HERE IS HE FORECAST DAY:', forecastDay)
  },[])
  return (
    <tr>
      <td className="font-semibold">Date:</td>
      <td>{forecastDay.date}</td>
    </tr>
  )
}