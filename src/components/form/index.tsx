import { useForm, type SubmitHandler } from "react-hook-form";
import Input  from "../input/index";
import ColoredBorder from "../coloredBorder";
import Button from "../buttton";
import type { IFormInput } from "./types";



const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-3/4 xl:w-1/2 mx-auto">
      <Input 
        type="text" 
        placeHolder="Enter Your Name" 
        {...register("name", { required: "Name is required" })} 
      />
      {errors.name && <span className="text-red-500">{errors.name.message}</span>}

      <Input 
        type="email" 
        placeHolder="Enter Your Email" 
        {...register("email", { required: "Email is required" })} 
      />

      <div className="relative z-0 w-full mb-5 p-10">
        <label htmlFor="message" className="absolute text-2xl text-body -translate-y-6 top-3">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Enter Your Message"
          className="input h-96 w-full"
          {...register("message", { required: "Message cannot be empty" })}
        ></textarea>
      </div>

      <div className="flex flex-col items-center gap-20 w-full">
        <Button type="submit">
          Submit
        </Button>
        <ColoredBorder className="w-full" />
      </div>
    </form>
  );
};

export default Form;