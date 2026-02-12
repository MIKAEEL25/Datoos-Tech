import { Link } from 'react-router-dom';
import Button from '../buttton/index';
import Glassmorphism from '../glassmorphism/index';
import FeaturesList from './FeaturesList';
import { OFFER_DATA } from '@/util/offer';

const OfferArticles = () => {
  return (
    <>
      <article>
        <h1 className="font-bold lg:text-4xl text-[1rem] sm:text-xl xl:text-6xl w-10/12 m-auto">
          <span className="colored-text">
            When booking with Solid Company, you're not just securing space —
          </span>
          you are unlocking a powerhouse ally that fuels innovation, streamlines
          shoots, and elevates every project to pro-level mastery.
        </h1>
      </article>
      <article className="mt-20 text-center flex flex-col gap-4">
        <h2 className=" colored-text font-bold lg:text-4xl sm:text-2xl text-[1rem] ">
          What We Offer
        </h2>
        <p className="font-bold lg:text-3xl text-[1rem] sm:text-xl">
          Complete Studio <br /> Rental Package
        </p>
        <p className="md:text-xl text-xs w-1/2 m-auto mt-5">
          Flexible bookings tailored to your schedule and production needs.
          Hour-long shoots or all-day epics—customize your package. Full access
          to premium facilities, gear, and support staff included. Book what you
          need, when you need it. No compromises. Just production-ready space,
          your way.
        </p>
        <div className="w-11/12 lg:w-8/12 m-auto flex justify-between mt-10">
          <Glassmorphism
            initialText="Half - Day Sessions"
            hoverText="Perfect for mid-sized products or content batching"
          />
          <Glassmorphism
            initialText="Full - Day Access"
            hoverText="Best for large-scale productions,commercial work,or multi-scene setups."
          />
        </div>
        <div className="w-fit m-auto mt-10">
          <Button type="button">
            <Link to={'/contact'}>Book Now</Link>
          </Button>
        </div>
      </article>
      <article className="mt-20 w-11/12 m-auto">
        <h2 className="font-bold text-2xl sm:text-5xl">
          Other Features <br /> And Facilities
        </h2>
        <div className="flex justify-evenly text-center mt-10">
          <FeaturesList data={OFFER_DATA} />
          <p className="text-left text-xs sm:text-[20px]">
            We know great work requires more than just great gear.
            <br /> That’s why our space is thoughtfully equipped with
            <br /> amenities that support both creativity and comfort—so your
            <br />
            team stays energized, organized, and on schedule.
            <br /> It’s more than a studio. It’s a full- service creative
            environment.
          </p>
        </div>
      </article>
    </>
  );
};

export default OfferArticles;
