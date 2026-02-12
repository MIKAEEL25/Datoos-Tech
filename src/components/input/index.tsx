import { forwardRef } from 'react';
import { type InputProps } from './types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, type, placeHolder, ...rest }, ref) => {
    return (
      <div className="relative z-0 w-full mb-5 p-5 sm:p-10">
        <label
          htmlFor={name}
          className="absolute sm:text-2xl -translate-y-6 top-3"
        >
          {name.toUpperCase()}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          className="input"
          placeholder={placeHolder}
          ref={ref}
          {...rest}
          required
        />
      </div>
    );
  },
);

export default Input;
