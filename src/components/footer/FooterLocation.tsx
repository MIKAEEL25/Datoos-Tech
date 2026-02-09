import { Link } from 'react-router-dom';
import Map from './Map';

const FooterLocation = () => {
  return (
    <>
      <Map />
      <div className="flex justify-center text-xs text-gray-400 space-x-4">
        <Link to="#" className="underline hover:text-white transition-colors">
          Privacy Policy
        </Link>
        <span>|</span>
        <Link to="#" className="underline hover:text-white transition-colors">
          Terms of Use
        </Link>
      </div>
    </>
  );
};

export default FooterLocation;
