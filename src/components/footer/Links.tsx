import { Link } from 'react-router-dom';
import type { LinksProps } from './types';

const Links: React.FC<LinksProps> = ({ title, links, to }) => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-gray-400 font-medium text-sm">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link}>
            <Link
              className="underline decoration-gray-400 hover:decoration-white transition-all"
              to={link === 'Casting Call' ? '/casting' : `/${to}`}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
