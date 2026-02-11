import { Form } from '@/components';

const Contact = () => {
  return (
    <div className="mt-40">
      <article className="text-center flex flex-col gap-10">
        <h1 className="font-bold text-5xl">
          Need Assistance?
          <br />
          <span className="colored-text">Solid Company is here for you!</span>
        </h1>
        <p className='text-2xl w-1/4 m-auto'>
          We're here to help! If you have any questions or need support, please
          fill out the contact form below. Our dedicated team will get back to
          you as soon as possible.
        </p>
      </article>

      <div className='colored-bg mt-10 p-10'>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
