const ColoredBorder: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <>
      <div
        className={`colored-border rounded-full h-1 m-auto ${className ? className : 'w-2/6'}`}
      ></div>
    </>
  );
};

export default ColoredBorder;
