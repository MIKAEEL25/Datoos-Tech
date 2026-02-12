import {
  Bookeh,
  ColoredBorder,
  FootNote,
  ImageSlider,
  OfferArticle,
} from '@/components';
import { IMAGES } from '@/util/studio';

const Offer = () => {
  return (
    <>
      <div className="relative mt-80 text-center bg-linear-to-b from-transparent via-violet-950/40 w-full m-auto to-transparent">
        <Bookeh />
        <OfferArticle />
      </div>
      <div className="w-9/12 m-auto bg-linear-to-r from-violet-950/20 via-transparent to-violet-950/10">
        <ImageSlider images={IMAGES.slice(1)} />
        <ColoredBorder className="w-1/2" />
      </div>
      <h2 className="colored-text text-2xl sm:text-5xl w-2/3 m-auto text-center my-20 font-bold">
        We Provide Professional-Grade Equipment <br /> You Can Trust
      </h2>
      <div className="colored-bg--offer h-160">
        <ImageSlider images={IMAGES.slice(2)} />
      </div>
      <FootNote />
    </>
  );
};

export default Offer;
