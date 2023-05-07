export default function ForecastCardLine ({ forecastDay }) {
  return (
    <tr>
      <td className="font-semibold">Day:</td>
      <td>{forecastDay.date}</td>
    </tr>
  )
}