import { Link } from 'react-router-dom';
import Button from '../buttton';

const Navigation = () => {
  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-10 flex justify-between items-center w-[90%]">
      <h1 className="font-bold text-6xl">
        <Link to="/">Solid Company</Link>
      </h1>
      <ul className="flex justify-between items-center w-2/6">
        <Link to="/studios">Our Studios</Link>
        <Link to="/offer">What We Offer</Link>
        <Link to="/contact">
          <Button to="/contact">Contact Us</Button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
