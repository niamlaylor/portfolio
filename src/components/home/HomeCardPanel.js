export default function HomeCardPanel({ children, bgColor, textColor, type }) {
  const listItems = ["A", "B"];

  return (
    <article className={`flex flex-col items-center justify-start w-full bg-${bgColor}`}>
      <h1 className={`text-${textColor} sm:text-h2-mobile md:text-h2-tablet lg:text-h2-desktop mt-10 font-semibold`}>{children}</h1>
      <div className="flex-1 w-full">
        <ul className="flex flex-col items-center">
          <li>BC Ferries website</li>
          <li>BC Ferries app</li>
          <li>BC Ferries app</li>
        </ul>
      </div>
    </article>
  );
};