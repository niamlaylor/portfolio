import Heading2 from '@/components/headers/h2';
import MainCTA from '@/components/buttons/MainCTA';
import { faCode, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ExperienceCard({ children, url, skillType }) {
  return (
    <div className={`flex flex-col items-center justify-center text-center sm:m-10 bg-gray-100 hover:bg-gray-200 pt-10 pb-10 sm:w-full lg:w-1/4 rounded-lg border border-gray-200`}>
      {skillType === 'dev' && <FontAwesomeIcon icon={faCode} size="4x" className={"mb-5"}/>}
      {skillType === 'copy' && <FontAwesomeIcon icon={faPenToSquare} size="4x" className={"mb-5"}/>}

      {skillType === 'dev' && <Heading2>1+ year</Heading2>}
      {skillType === 'copy' && <Heading2>5+ years</Heading2>}

      <h3 className="text-base font-light leading-7">{children}</h3>

      {skillType === 'dev' && <MainCTA url={url}>Recent projects</MainCTA>}
      {skillType === 'copy' && <MainCTA url={url}>Recent writing</MainCTA>}
    </div>
)
}