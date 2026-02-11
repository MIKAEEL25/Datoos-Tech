import { useState } from 'react';
import Button from '../buttton';
import ColoredBorder from '../coloredBorder';
import Input from './Input';
import type { SignUpFormState } from './types';
import { hasMinLength, isEmail, isNotEmpty } from '@/util/validation';

const Form = () => {
  const [formData, setFormData] = useState<SignUpFormState>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<string[]>([]);
  const onChangeHadnler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  function onSubmitHandler(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const newErrors: string[] = [];
    if (!isEmail(formData.email)) {
      newErrors.push('Invalid Email');
    }
    if (!isNotEmpty(formData.name)) {
      newErrors.push('Please Enter Your Name');
    }
    if (!isNotEmpty(formData.message)) {
      newErrors.push('Please Enter Your Message');
    }
    if (!hasMinLength(formData.message, 5)) {
      newErrors.push('Your Message Should Be More Than 5 Characters');
    }
    setErrors(newErrors);

    console.log(formData);
  }
  return (
    <form onSubmit={onSubmitHandler} className="w-1/2 mx-auto">
      {errors && (
        <ul className="m-15 text-red-500 text-xl list-disc">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <Input
        name="name"
        type="name"
        placeHolder="Enter Your Name"
        handleChange={onChangeHadnler}
        value={formData.name}
      />
      <Input
        name="email"
        type="email"
        placeHolder="Enter Your Email"
        handleChange={onChangeHadnler}
        value={formData.email}
      />
      <div className="relative z-0 w-full mb-5 p-10">
        <label
          htmlFor="message"
          className="absolute text-2xl text-body -translate-y-6 top-3"
        >
          Message
        </label>
        <textarea
          id="message"
          placeholder="Enter Your Message"
          className="input h-96"
          onChange={onChangeHadnler}
          defaultValue={formData.message}
        ></textarea>
      </div>
      <div className="flex flex-col items-center gap-20 w-full">
        <Button type="submit">Submit</Button>
        <ColoredBorder className="w-full" />
      </div>
    </form>
  );
};

export default Form;
