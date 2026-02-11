import {
  ColoredBorder,
  FootNote,
  ImageSlider,
  OfferArticle,
} from '@/components';
import { IMAGES } from '@/util/studio';

const Offer = () => {
  return (
    <>
      <div className="mt-40 text-center colored-bg">
        <OfferArticle />
      </div>
      <div className="w-2/6 m-auto">
        <ImageSlider images={IMAGES} />
        <ColoredBorder className="w-full" />
      </div>
      <h2 className="colored-text text-5xl w-1/2 m-auto text-center my-20 font-bold">
        We Provide Professional-Grade Equipment You Can Trust
      </h2>
      <div className="colored-bg--offer">
        <ImageSlider images={IMAGES} />
      </div>
      <FootNote />
    </>
  );
};

export default Offer;
