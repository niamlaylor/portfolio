import Heading2 from '@/components/headers/h2';
import MainCTA from '@/components/buttons/MainCTA';
import ExperienceCard from './ExperienceCard';
import { faCode, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
