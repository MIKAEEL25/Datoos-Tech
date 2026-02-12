const Arrow: React.FC<{ onClick: () => void , direction : 'left' | 'right' }> = ({ onClick, direction }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 md:w-12 md:h-12 w-10 h-10 flex items-center justify-center rounded-full bg-violet-900/80 hover:bg-purple-600 text-white transition-all duration-300 backdrop-blur-sm ${direction === 'left' ? '-left-[13%]' : '-right-[13%]'}`}
    >
      <span className="text-2xl">{direction === 'left' ? '←' : '→'}</span>
    </button>
  );
};

export default Arrow;
