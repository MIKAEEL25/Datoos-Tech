import { IMAGE_LOGOS } from '@/util/logos';
import img from '@/assets/images/Studio A - cover photo clean 1.jpg';

import LogoLoop from '../logoLoop/LogoLoop';
import Button from '../buttton';

const HomeHeadSection = () => {
  return (
    <>
      <div className="absolute top-[-40px] bg-linear-to-b from-neutral-900 to-transparent w-full h-45"></div>
      <section className="text-center bg-linear-to-t from-(--background-primary) to-transparent z-30 flex flex-col items-center gap-20">
        <div className="relative">
          <img src={img} alt="Studio A" />
          <h1 className="absolute text-7xl text-left bottom-[50px] z-30">
            Where Virtual Meets Reality – <br />
            <span className="colored-text font-bold">The Most Advanced XR</span>
            <br />
            <span className="colored-text font-bold">
              & Virtual Production Studio
            </span>
          </h1>
        </div>
        <LogoLoop logos={IMAGE_LOGOS} gap={100} />
        <Button to="">Showreel</Button>
        <p className="text-6xl font-bold">
          <span className="colored-text">Reliable, High Performance</span>
          <br /> Studio for Visionary Creators
        </p>
        <p className="text-3xl">
          Elevate your vision at Solid Company — a world-class creative <br />
          space built for powerful production and bold ideas.
        </p>
      </section>
    </>
  );
};

export default HomeHeadSection;
