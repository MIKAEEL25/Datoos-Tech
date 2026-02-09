import { Link } from 'react-router-dom';

const Map = () => {
  return (
    <div className="relative w-70 h-40 rounded-2xl overflow-hidden border border-gray-800">
      <Link to="https://www.google.com/maps?q=San+Francisco" target="_blank">
        <iframe
          src="https://www.google.com/maps?q=San+Francisco&output=embed"
          className="w-full h-full"
          loading="lazy"
        />
      </Link>
    </div>
  );
};

export default Map;
