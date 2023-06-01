import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RepoCTA({ children, url }) {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank" className="mt-3 text-s font-medium text-black cursor-pointer">
      {`${children}`} <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" />
    </a>
  );
};