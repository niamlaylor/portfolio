export default function ForecastLineHeader({ children, value }) {
  return (
    <>
      <td className="font-semibold">
        {children}
      </td>
      <td>
        {value}
      </td>
    </>
  );
};