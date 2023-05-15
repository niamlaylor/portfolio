export default function HomeCardPanel({ children, bgColor, textColor, type }) {
  const listItems = ["A", "B", "C"];
  const listArray = listItems.map((item, index) => {
    return (
      <li
        key={index}
        className={`flex items-center justify-center w-full p-10`}
      >
        {item}
      </li>
    )
  })

  return (
    <article className={`flex flex-col items-center justify-start w-full bg-${bgColor}`}>
      <h1 className={`text-${textColor} sm:text-h2-mobile md:text-h2-tablet lg:text-h2-desktop mt-10 font-semibold`}>{children}</h1>
      <div className="flex-1 w-full">
        <ul className="flex flex-col items-center">
          {listArray}
        </ul>
      </div>
    </article>
  );
};