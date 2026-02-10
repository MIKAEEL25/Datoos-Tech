import React from 'react';
import Image from '../image';
import type { Props } from './type';
import Description from './Description';

const ProfileCard: React.FC<Props> = ({ data, index, className }) => {
  const isEven = index % 2 === 0;

  return (
    <section
      className={`text-white px-8 md:px-20 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <Description
          isEven={isEven}
          id={data.id}
          title={data.title}
          category={data.category}
          items={data.items}
          link={data.link}
        />
        <div
          className={`border-2 rounded-[5%] border-purple-500 overflow-hidden aspect-[16/10] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <Image src={data.image} alt={data.title} />
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
