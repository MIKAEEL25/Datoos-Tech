import {
  Bookeh,
  ColoredBorder,
  FootNote,
  ImageSlider,
  ProfileCard,
  StudioTabel,
  Wraper,
} from '@/components';

import { IMAGES, STUDIO_CARDS, STUDIO_TABEL } from '@/util/studio';

const Studios = () => {
  return (
    <>
      <div className="mt-40">
        <h1 className="colored-text text-2xl sm:text-5xl text-center font-bold">
          Our Studios
        </h1>
        <div className="bg-linear-to-t from-transparent w-10/12 m-auto via-violet-950/40 to-transparent relative">
          <Bookeh />
          <ProfileCard data={STUDIO_CARDS[0]} index={0} />
          <StudioTabel
            data={STUDIO_TABEL}
            headers={['Components', 'Dimensions', 'Specs']}
          />
          <ImageSlider images={IMAGES} />
        </div>
        <Wraper clasName="flex flex-col gap-5">
          <ProfileCard data={STUDIO_CARDS[1]} index={0} />
          <ColoredBorder className="scale-3d w-4/12" />
          <ProfileCard data={STUDIO_CARDS[2]} index={0} />
          <ProfileCard data={STUDIO_CARDS[3]} index={1} />
          <ColoredBorder className="scale-3d w-4/12" />
          <ProfileCard data={STUDIO_CARDS[4]} index={0} />
          <ColoredBorder className="scale-3d w-4/12" />
        </Wraper>
        <Wraper>
          <ProfileCard
            data={STUDIO_CARDS[5]}
            index={0}
            className="aspect-11/10"
          />
        </Wraper>
        <ColoredBorder />
      </div>
      <FootNote />
    </>
  );
};

export default Studios;
