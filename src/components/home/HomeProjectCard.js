export default function HomeProjectCard({ project }) {
  return (
    <a href="/copywriting/bcf-website">
      <div className="w-full h-48 flex-1 overflow-hidden">
        <img src={project.image} alt={project.name} className="object-cover w-full h-full" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-20"></div>
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 text-h1-mobile text-white text-center p-2 z-10">
            <h2 className="inline-block sm:text-h3-mobile md:text-h3-tablet font-semibold">
              {project.name}
            </h2>
        </div>
      </div>
    </a>
  );
};