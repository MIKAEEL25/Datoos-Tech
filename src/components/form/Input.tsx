import type { InputTypeProps } from './types';

const Input: React.FC<InputTypeProps> = ({
  name,
  placeHolder,
  type,
  handleChange,
  value,
}) => {
  return (
    <div className="relative z-0 w-full mb-5 p-10">
      <label
        htmlFor={name}
        className="absolute text-2xl text-body -translate-y-6 top-3"
      >
        {name.toUpperCase()}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="input"
        placeholder={placeHolder}
        required
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default Input;
