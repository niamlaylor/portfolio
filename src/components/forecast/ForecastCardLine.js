import { useEffect } from "react";
import ForecastLineHeader from "./ForecastLineHeader";

export default function ForecastCardLine ({ forecastDay }) {
  useEffect(() => {
    console.log('HERE IS HE FORECAST DAY:', forecastDay)
  },[])
  return (
    <tr>
      <ForecastLineHeader value={forecastDay.date}>
          Date:
      </ForecastLineHeader>
    </tr>
  )
}