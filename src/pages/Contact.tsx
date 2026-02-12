import { Form } from '@/components';

const Contact = () => {
  return (
    <div className="mt-40">
      <article className="text-center flex flex-col gap-10">
        <h1 className="font-bold lg:text-5xl text-2xl sm:text-4xl">
          Need Assistance?
          <br />
          <span className="colored-text">Solid Company is here for you!</span>
        </h1>
        <p className='text-[1rem] w-2/4 m-auto'>
          We're here to help! If you have any questions or need support, please
          fill out the contact form below. Our dedicated team will get back to
          you as soon as possible.
        </p>
      </article>

      <div className='relative w- mt-10 p-10 bg-linear-to-t from-sky-950/50 to-transparent'>
      <div className='absolute h-20 w-80 bg-sky-300 rotate-60 blur-[150px] right-150 top-100'></div>
      <div className='absolute h-20 w-60 bg-sky-100 rotate-60 rounded-full blur-[200px] right-120 top-180'></div>
      <div className='absolute h-20 w-60 bg-white rotate-60 rounded-full blur-[180px] right-60 top-180'></div>
      <div className='absolute h-96 w-96 bg-blue-600/50 rotate-60 rounded-full blur-[200px] left-135 top-110'></div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
