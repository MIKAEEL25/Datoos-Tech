import React from 'react';
import type { Props } from './type';
import Description from './Description';

const ProfileCard: React.FC<Props> = ({ data, index, className }) => {
  const isEven = index % 2 === 0;

  return (
    <section className="relative w-10/12 m-auto py-6 overflow-hidden">
      <div className="max-w-7xl relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <Description
          isEven={isEven}
          id={data.id}
          title={data.title}
          category={data.category}
          items={data.items}
          link={data.link}
        />
        <div
          className={`border-2 rounded-[5%] border-purple-500 overflow-hidden ${isEven ? 'lg:order-2' : 'lg:order-1'} ${className ? className : 'aspect-16/10'}`}
        >
          <img src={data.image} alt={data.title} className='w-full h-full' />
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
