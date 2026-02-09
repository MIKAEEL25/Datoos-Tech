import Image from '@/components/image';

import img from '@/assets/images/Studio A - cover photo clean 1.jpg';

const Home: React.FC = () => {
  return (
    <>
      <div className="absolute top-[-40px] bg-linear-to-b from-neutral-900 to-transparent w-full h-45"></div>
      <Image src={img} alt="Studio A" />
    </>
  );
};

export default Home;
