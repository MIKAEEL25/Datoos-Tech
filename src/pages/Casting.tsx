import { CastingArticle, Form } from '@/components';

const Casting = () => {
  return (
    <div className="mt-40">
      <article className="colored-bg text-center tracking-widest flex flex-col gap-10 w-1/2 m-auto">
        <h1 className="text-5xl font-bold">
          CASTING CALL: <br />
          <span className="colored-text">Solid Company</span>
        </h1>
        <CastingArticle />
      </article>
      <Form />
    </div>
  );
};

export default Casting;
