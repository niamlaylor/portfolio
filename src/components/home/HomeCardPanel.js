export default function HomeCardPanel({ children, bgColor }) {
  return(
    <article className={`flex flex-col items-center justify-start w-full h-screen bg-${bgColor}`}>
      <h1 className="text-black text-h2-card mt-10">{children}</h1>
    </article>
  );
};