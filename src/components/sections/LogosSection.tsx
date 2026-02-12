import { IMAGE_LOGOS } from '@/util/logos';
import Button from '../buttton';
import LogoLoop from '../logoLoop/index';

const LogosSection = () => {
  return (
    <section className="text-center relative home mx-auto w-10/12 z-30 flex flex-col items-center gap-20">
      <div className="absolute bg-pink-300/80 rounded-full blur-[80px] bottom-50 right-90 h-30 w-30"></div>
      <div className="absolute bg-pink-300/30 rounded-full blur-[80px] bottom-50 left-120 h-30 w-30"></div>
      <LogoLoop logos={IMAGE_LOGOS} />
      <Button type="button">Showreel</Button>
      <p className="xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold">
        <span className="colored-text">Reliable, High Performance</span>
        <br /> Studio for Visionary Creators
      </p>
      <p className="md:text-3xl text-xl">
        Elevate your vision at Solid Company — a world-class creative <br />
        space built for powerful production and bold ideas.
      </p>
    </section>
  );
};

export default LogosSection;
