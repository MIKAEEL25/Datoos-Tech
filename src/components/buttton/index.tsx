import type { ReactNode } from 'react';

const Button: React.FC<{
  children: ReactNode;
  type: 'submit' | 'reset' | 'button';
}> = ({ children, type }) => {
  return (
    <button
      type={type}
      className="btn-group relative h-14 w-44 overflow-hidden rounded-full bg-(--background-primary) transition-all"
    >
      <div className="showreel-animation absolute inset-[-150%]" />
      <div className="absolute inset-[3px] rounded-full bg-(--background-primary) flex items-center justify-center">
        <span className="text-white">{children}</span>
      </div>
    </button>
  );
};

export default Button;
