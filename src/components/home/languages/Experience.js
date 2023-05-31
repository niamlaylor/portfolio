import Heading2 from '@/components/headers/h2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Experience() {
  return (
    <div className="flex sm:flex-col md:flex-row mt-10 w-full items-center justify-center text-center rounded-lg">
      <div className={`flex flex-col sm:m-5 md:m-8 lg:m-10 bg-gray-100 hover:bg-blue-500 pt-10 pb-10 sm:w-1/2 md:w-1/3 lg:w-1/4`}>
        <FontAwesomeIcon icon="fa-solid fa-code" size="4x" className={"mb-5"}/>
        <Heading2>1+ year</Heading2>
        <h3 className="text-base font-light leading-7">Development experience</h3>
      </div>
      <div className={`flex flex-col sm:m-5 md:m-8 lg:m-10 bg-gray-100 hover:bg-blue-500 pt-10 pb-10 sm:w-1/2 md:w-1/3 lg:w-1/4`}>
        <FontAwesomeIcon icon="fa-solid fa-pen-to-square" size="4x" className={"mb-5"}/>
        <Heading2>5+ years</Heading2>
        <h3 className="text-base font-light leading-7">Copywriting experience</h3>
      </div>
    </div>
  );
}