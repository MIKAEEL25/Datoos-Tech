import { ProfileCard } from '@/components';
import { ImageSlider } from '@/components';
import { StudioFootNote } from '@/components';
import { StudioTabel } from '@/components';

import { IMAGES, STUDIO_CARDS, STUDIO_TABEL } from '@/util/studio';

const Studios = () => {
  return (
    <>
      <div className="mt-40">
        <h1 className="colored-text text-5xl text-center font-bold">
          Our Studios
        </h1>
        <ProfileCard data={STUDIO_CARDS[0]} index={0} />
        <div className="colored-bg">
          <StudioTabel
            data={STUDIO_TABEL}
            headers={['Components', 'Dimensions', 'Specs']}
          />
          <ImageSlider images={IMAGES} />
        </div>
        <div className="colored-bg flex flex-col gap-20 mt-20">
          {STUDIO_CARDS.slice(1).map((card, index) => (
            <>
              <ProfileCard
                data={card}
                index={card.id === '05 /' ? 2 : index + 1}
                className="bg-transparent"
              />
              {card.id !== '03 /' && (
                <span className="colored-border rounded-full w-2/6 h-1 m-auto"></span>
              )}
            </>
          ))}
        </div>
      </div>
      <StudioFootNote />
    </>
  );
};

export default Studios;
