import { Link } from 'react-router-dom';
import type { DescriptionProps } from './type';

const Description: React.FC<DescriptionProps> = ({
  isEven,
  id,
  title,
  category,
  items,
  link,
}) => {
  return (
    <div className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
      <div>
        <span className="colored-text text-xl font-bold">{id}</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">
          {title}
        </h2>
      </div>
      <div className="space-y-3">
        <h3 className="colored-text text-xl">{category}</h3>
        <ul className="grid grid-cols-2 text-white text-l ml-8">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Link
        to={`/${link}`}
        className="inline-block border-b border-blue-500 pb-1 text-sm hover:text-blue-400 transition-all"
      >
        Learn More ↗
      </Link>
    </div>
  );
};

export default Description;
