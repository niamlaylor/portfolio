import ExperienceCard from './ExperienceCard';


export default function Experience() {
  return (
    <div className="flex sm:flex-col lg:flex-row mt-10 w-full items-center justify-center text-center rounded-lg">
      <ExperienceCard 
        url={"/development"} 
        skillType={"dev"}
      >
        Development experience
      </ExperienceCard>
      <ExperienceCard 
        url={"/copywriting"} 
        skillType={"copy"}
      >
        Copywriting experience
      </ExperienceCard>
    </div>
  );
}
