import Heading2 from '@/components/headers/h2';
import MainCTA from '@/components/buttons/MainCTA';
import { faCode, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Experience() {
  return (
    <div className="flex sm:flex-col lg:flex-row mt-10 w-full items-center justify-center text-center rounded-lg">
      <div className={`flex flex-col items-center justify-center text-center sm:m-10 bg-gray-100 hover:bg-gray-200 pt-10 pb-10 sm:w-full lg:w-1/4 rounded-lg border border-gray-200`}>
        <FontAwesomeIcon icon={faCode} size="4x" className={"mb-5"}/>
        <Heading2>1+ year</Heading2>
        <h3 className="text-base font-light leading-7">Development experience</h3>
        <MainCTA url={"/development"}>Recent projects</MainCTA>
      </div>
      <div className={`flex flex-col items-center justify-center text-center sm:m-10 bg-gray-100 hover:bg-gray-200 pt-10 pb-10 sm:w-full lg:w-1/4 rounded-lg border border-gray-200`}>
        <FontAwesomeIcon icon={faPenToSquare} size="4x" className={"mb-5"}/>
        <Heading2>5+ years</Heading2>
        <h3 className="text-base font-light leading-7">Copywriting experience</h3>
        <MainCTA url={"/copywriting"}>Recent writing</MainCTA>
      </div>
    </div>
  );
}
