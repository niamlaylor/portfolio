import { useEffect } from "react";
import ForecastLineHeader from "./ForecastLineHeader";

export default function ForecastCardLine ({ forecastDay, children }) {
  useEffect(() => {
    console.log('HERE IS THE FORECAST DAY:', forecastDay)
  },[])
  return (
    <tr>
      <ForecastLineHeader value={forecastDay.date}>
          {children}
      </ForecastLineHeader>
    </tr>
  )
}