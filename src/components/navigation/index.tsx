import { Link, useLocation } from 'react-router-dom';
import Button from '../buttton';

const Navigation = () => {
  const location = useLocation();
  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-100 flex justify-between items-center w-[90%]">
      <h1 className="font-bold text-6xl">
        <Link to="/">Solid Company</Link>
      </h1>
      <ul className="flex justify-between items-center w-2/6">
        <Link to="/studios">Our Studios</Link>
        <Link to="/offer">What We Offer</Link>
        <Link to="/contact">
          {location.pathname !== '/contact' && <Button type='button'>Contact Us</Button>}
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
