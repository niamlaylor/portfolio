export default function HomeCardPanelItem({ project }) {
  return (
    <li className="w-full relative">
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 text-h1-mobile text-white text-center bg-opacity-50 p-2 z-10">
        <h2 className="inline-block">{project.name}</h2>
      </div>
      <div className="relative">
        <img
          src={project.image}
          alt={project.name}
          className="object-cover transition-all duration-300"
          style={{
            clipPath: 'inset(-5% -5% -5% -5%)',
          }}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-25"></div>
      </div>
    </li>
  );
}
