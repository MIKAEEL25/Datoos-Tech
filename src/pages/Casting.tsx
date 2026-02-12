import { CastingArticle, Form } from '@/components';

const Casting = () => {
  return (
    <div className="relative mt-40 bg-linear-to-t from-transparent via-sky-950/70 to-transparent">
      <div className="absolute h-20 w-80 bg-sky-300 rotate-60 blur-[9.3rem] right-150 top-100"></div>
      <div className="absolute h-20 w-80 bg-sky-300 rotate-120 blur-[9.3rem] right-150 bottom-100"></div>
      <div className="absolute h-20 w-60 bg-sky-100 rotate-60 rounded-full blur-[200px] right-120 top-180"></div>
      <div className="absolute h-20 w-80 bg-blue-800 rotate-60 rounded-full blur-[150px] left-80 top-180"></div>
      <article className="text-center tracking-widest flex flex-col gap-10 w-5/6 m-auto">
        <h1 className="xl:text-5xl text-xl sm:text-3xl font-bold">
          CASTING CALL: <br />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-[#4d27f5] to-sky-400">
            Solid Company
          </span>
        </h1>
        <div className="mb-10 xl:w-10/12 2xl:w-8/12 m-auto">
          <CastingArticle />
        </div>
      </article>
      <Form />
    </div>
  );
};

export default Casting;
