import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Location({ children }) {
  return (
    <span>
      <FontAwesomeIcon icon={faLocationDot} />
      {children}
    </span>
  )
}