export default function TemperatureDisplay( { unit, temperature } ) {
  return(
    <p className="text-4xl font-bold mt-2">
      {unit === 'c' && `${temperature.temp_c}°C`}
      {unit === 'f' && `${temperature.temp_f}°F`}
    </p>
  )
};