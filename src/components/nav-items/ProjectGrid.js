import ProjectCTA from "../buttons/ProjectCTA";
import RepoCTA from "../buttons/ProjectCTA";
import LabelPill from "../buttons/LabelPill";

export default function ProjectGrid({ type, stats }) {

  // Copywriting project grid
  if (type === 'copy') {
    return (
      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="flex flex-col-reverse hover:bg-gray-200 p-5">
            <ProjectCTA url={stat.url}>{stat.cta}</ProjectCTA>
            <dt className="text-base leading-7 text-gray-800">{stat.name}</dt>
            <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">{stat.value}</dd>
            <dd className="text-sm font-bold leading-9 tracking-tight text-blue-500">{stat.date}</dd>
          </div>
        ))}
      </dl>
    )
    
  // Development project grid
  } else if (type === 'dev') {
    return (
      <dl className="mt-4 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.name} className="flex flex-col-reverse hover:bg-gray-200 p-5">
            <RepoCTA url={stat.repo}>View on Github</RepoCTA>
            <div className="justify-left mt-2 select-none flex">
              {stat.category.map((label, index) => {
                return (
                  <LabelPill key={index} index={index}>{label}</LabelPill>
                );
              })}
            </div>
            <dt className="text-base leading-7 text-gray-800">{stat.name}</dt>
            <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">{stat.value}</dd>
            <dd className="text-sm font-bold leading-9 tracking-tight text-blue-500">{stat.date}</dd>
          </div>
        ))}
      </dl>
    )
  }
}