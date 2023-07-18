import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Location({ children }) {
  return (
    <span className={"text-gray-800 hover:underline"}>
      <FontAwesomeIcon className={"mr-2"} icon={faLocationDot} />
      <Link href={"https://www.google.com/maps/place/Canmore,+AB"} target="_blank">{children}</Link>
    </span>
  )
}