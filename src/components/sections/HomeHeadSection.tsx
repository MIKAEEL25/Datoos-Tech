import img from '@/assets/images/Studio A - cover photo clean 1.jpg';



const HomeHeadSection = () => {
  return (
    <>
      <div className="absolute -top-5 bg-linear-to-b from-neutral-800 to-transparent w-full h-45 z-40"></div>
      <div className='relative'>
        <img src={img} alt="Studio A" />
        <h1 className="absolute font-inter font-bold text-left left-40 lg:text-6xl md:text-5xl sm:text-4xl text-l sm:bottom-12.5 z-30">
          Where Virtual Meets Reality – <br />
          <span className="colored-text font-bold">The Most Advanced XR</span>
          <br />
          <span className="colored-text font-bold">
            & Virtual Production Studio
          </span>
        </h1>
      </div>
    </>
  );
};

export default HomeHeadSection;
