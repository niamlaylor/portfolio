import { removeDecimals } from "@/utils/helpers";
import { useEffect, useState } from 'react';

export default function TemperatureDisplay( { unit, temperature, expanded } ) {

  const { 
    temp_c, 
    temp_f, 
    feelslike_c, 
    feelslike_f, 
    humidity 
  } = temperature;

  const [shouldRender, setShouldRender] = useState(expanded);

  useEffect(() => {
    if (expanded) {
      setShouldRender(true);
    }
  }, [expanded]);

  const handleTransitionEnd = () => {
    if (!expanded) {
      setShouldRender(false);
    }
  };

  return (
    <>
      <p className="text-4xl font-bold mt-2">
        {unit === 'c' && `${removeDecimals(temp_c)}°C`}
        {unit === 'f' && `${removeDecimals(temp_f)}°F`}
      </p>
      {shouldRender && (
        <div
          className={`transition-all duration-500 ${expanded ? 'h-auto' : 'h-0 overflow-hidden'}`}
          onTransitionEnd={handleTransitionEnd}
        >
          {expanded && (
            <p className="text-s mt-2">
              {unit === 'c' && `Feels like: ${removeDecimals(feelslike_c)}°C`}
              {unit === 'f' && `Feels like: ${removeDecimals(feelslike_f)}°F`}
            </p>
          )}
          {expanded && (
            <p className="text-s mt-2">{`Humidity: ${humidity}%`}</p>
          )}
        </div>
      )}
    </>
  );
}