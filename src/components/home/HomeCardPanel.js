export default function HomeCardPanel({ children, bgColor, textColor, type }) {
  const listItems = ["A", "B"];

  return (
    <article className={`flex flex-col items-center justify-start w-full h-screen bg-${bgColor}`}>
      <h1 className={`text-${textColor} text-h2-desktop mt-10 font-semibold`}>{children}</h1>
      <div className="flex-1 w-full">
        <ul className="flex flex-col justify-between items-stretch items w-full">
          {listItems.map((item, index) => (
            <li key={index} className="flex-1 items-center border">{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};