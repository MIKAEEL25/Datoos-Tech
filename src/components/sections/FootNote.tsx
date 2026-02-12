import { Link } from 'react-router-dom';
import Button from '../buttton';
import ColoredBorder from '../coloredBorder';

const FootNote = () => {
  return (
    <div className="w-1/2 text-center items-center mx-auto my-20 flex flex-col gap-10">
      <h1 className="sm:text-6xl text-2xl font-bold">Let’s talk.</h1>
      <p className="text-l text-center w-full xl:w-2/3">
        We love collaborating with passionate creators. If you have a project in
        mind, we’d love to hear about it and explore how we can help.
      </p>
      <Button type="button">
        <Link to="/contact">Get in touch</Link>
      </Button>
      <ColoredBorder className="w-full" />
    </div>
  );
};

export default FootNote;
