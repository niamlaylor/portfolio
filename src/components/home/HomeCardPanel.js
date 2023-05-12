export default function HomeCardPanel({ children, bgColor, textColor }) {
  return (
    <article className={`flex flex-col items-center justify-start w-full h-screen bg-${bgColor}`}>
      <h1 className={`text-${textColor} text-h2-desktop mt-10 font-semibold`}>{children}</h1>
      <div className="flex-1 w-full"></div>
      <div className="flex-1 w-full"></div>
      <div className="flex-1 w-full"></div>
      <div className="flex-1 w-full"></div>
    </article>
  );
};