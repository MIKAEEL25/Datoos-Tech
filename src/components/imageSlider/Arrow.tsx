const Arrow: React.FC<{ onClick: () => void , direction : 'left' | 'right' }> = ({ onClick, direction }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-purple-600/30 hover:bg-purple-600 text-white transition-all duration-300 backdrop-blur-sm ${direction === 'left' ? 'left-4' : 'right-4'}`}
    >
      <span className="text-2xl">{direction === 'left' ? '←' : '→'}</span>
    </button>
  );
};

export default Arrow;
