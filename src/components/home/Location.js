import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Location({ children }) {
  return (
    <span>
      <FontAwesomeIcon className={"mr-2"} icon={faLocationDot} />
      {children}
    </span>
  )
}