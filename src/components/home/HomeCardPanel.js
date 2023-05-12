export default function HomeCardPanel({ bgColor }) {
  return(
    <article className={`flex flex-col items-center justify-start w-full h-screen bg-${bgColor}-500`}>
      <h1 className="text-white text-2xl mt-10">This is a div</h1>
    </article>
  );
};