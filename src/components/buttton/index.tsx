import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const Button: React.FC<{ children: ReactNode; to?: string }> = ({
  children,
  to,
}) => {
  return (
    <button className="btn-group relative h-14 w-44 overflow-hidden rounded-full bg-(--background-primary) transition-all">
      <Link to={`${to}`}>
        <div className="showreel-animation absolute inset-[-150%]" />
        <div className="absolute inset-[3px] rounded-full bg-(--background-primary) flex items-center justify-center">
          <span className="text-white uppercase">{children}</span>
        </div>
      </Link>
    </button>
  );
};

export default Button;
