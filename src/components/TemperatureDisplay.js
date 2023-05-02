import { removeDecimals } from "@/utils/helpers";

export default function TemperatureDisplay( { unit, temperature, expanded } ) {
  const { temp_c, temp_f, feelslike_c, feelslike_f, humidity } = temperature;
  return(
    <>
      <p className="text-4xl font-bold mt-2">
        {unit === 'c' && `${removeDecimals(temp_c)}°C`}
        {unit === 'f' && `${removeDecimals(temp_f)}°F`}
      </p>
      {expanded && 
        <p className="text-s mt-2">
          {unit === 'c' && `Feels like: ${removeDecimals(feelslike_c)}°C`}
          {unit === 'f' && `Feels like: ${removeDecimals(feelslike_f)}°F`}
        </p>
      }
      {expanded &&
        <p className="text-s mt-2">
          {`Humidity: ${humidity}%`}
        </p>
      }
    </>

  )
};