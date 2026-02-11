import { Link } from 'react-router-dom';
import Button from '../buttton';
import ColoredBorder from '../coloredBorder';

const FootNote = () => {
  return (
    <div className="w-1/2 text-center items-center mx-auto my-20 flex flex-col gap-10">
      <h1 className="text-6xl font-bold">Let’s talk.</h1>
      <p className="text-xs text-center">
        We love collaborating with passionate creators. If you have a project in
        mind, we’d love to hear about it and explore how we can help.
      </p>
      <Button type="button">
        <Link to="/contact">Get in touch</Link>
      </Button>
      <ColoredBorder className="w-8/12" />
    </div>
  );
};

export default FootNote;
