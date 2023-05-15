export default function HomeCardPanelItem({ project }) {
  return (
    <li className="w-full relative">
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 text-h1-mobile text-white text-center bg-opacity-50 p-2 z-10">
        <h2 className="inline-block sm:text-h2-mobile md:text-h2-tablet lg:text-h2-desktop">{project.name}</h2>
      </div>
      <div class="w-full h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-30"></div>
      </div>
    </li>
  );
}
