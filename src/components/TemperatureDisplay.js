import { removeDecimals } from "@/utils/helpers";

export default function TemperatureDisplay( { unit, temperature } ) {
  const { temp_c, temp_f } = temperature;
  return(
    <p className="text-4xl font-bold mt-2">
      {unit === 'c' && `${removeDecimals(temp_c)}°C`}
      {unit === 'f' && `${removeDecimals(temp_f)}°F`}
    </p>
  )
};