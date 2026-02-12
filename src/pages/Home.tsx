import {
  Faq,
  FootNote,
  HomeHeadSection,
  LogosSection,
  Moon,
  ProfileCard,
  Wraper,
} from '@/components';
import { FAQ_DATA } from '@/util/faq';
import { SERVICES_DATA } from '@/util/services';

const Home: React.FC = () => {
  return (
    <>
      <div className="relative">
        <HomeHeadSection />
        <LogosSection />
      </div>
      <div className="flex flex-col mt-20">
        <Wraper>
          <ProfileCard data={SERVICES_DATA[0]} index={0} />
          <ProfileCard data={SERVICES_DATA[1]} index={1} />
        </Wraper>
        <div className="bg-linear-to-t from-transparent via-violet-950/30 to-transparent">
          <ProfileCard data={SERVICES_DATA[2]} index={2} />
          <article className="text-center w-2/3 m-auto mt-30 space-y-5">
            <p className="text-center font-bold text-2xl md:text-3xl lg:text-5xl mb-20">
              A world class international team.
            </p>
            <p className="text-center md:text-2xl">
              Web3 Productions is powered by an elite international team of
              virtual production specialists, filmmakers, and creatives hailing
              from Italy, Russia, France, UK, US, and many other countries. With
              decades of combined experience from the world’s top studios and
              blockbuster productions, our experts deliver unmatched technical
              precision, artistic vision, and innovative workflows ensuring
              every project exceeds expectations.
            </p>
          </article>
        </div>
      </div>
      <Moon />
      <Faq data={FAQ_DATA} />
        <FootNote />
    </>
  );
};

export default Home;
