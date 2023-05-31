import Heading2 from '@/components/headers/h2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Experience() {
  return (
    <div className="flex flex-row mt-10 w-full items-center justify-center text-center rounded-lg">
      <div className={`flex flex-col mr-10`}>
        <FontAwesomeIcon icon="fa-solid fa-code" size="4x" className={"mb-5"}/>
        <Heading2>1+ year</Heading2>
      </div>
      <div className={`flex flex-col ml-10`}>
        <FontAwesomeIcon icon="fa-solid fa-pen-to-square" size="4x" className={"mb-5"}/>
        <Heading2>5+ years</Heading2>
      </div>
    </div>
  );
}