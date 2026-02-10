import Button from "../buttton";

const StudioFootNote = () => {
  return (
    <div className="w-1/2 text-center items-center mx-auto my-20 flex flex-col gap-10">
      <h1 className="text-6xl font-bold">Let’s talk.</h1>
      <p className="text-xs text-center">
        We love collaborating with passionate creators. If you have a project in
        mind, we’d love to hear about it and explore how we can help.
      </p>
      <Button to="/contact">Get in touch</Button>
      <span className="colored-border rounded-full w-2/3 h-1 m-auto mt-20"></span>
    </div>
  );
};

export default StudioFootNote;
