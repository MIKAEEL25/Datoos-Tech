import { Faq, HomeHeadSection } from '@/components';
import { ProfileCard } from '@/components';
import { FAQ_DATA } from '@/util/faq';
import { SERVICES_DATA } from '@/util/services';

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-20">
        <HomeHeadSection />
        {SERVICES_DATA.map((service, index) => (
          <ProfileCard key={service.id} data={service} index={index} />
        ))}
        <article className="text-center w-2/3 m-auto space-y-5">
          <p className="text-center font-bold text-4xl mb-20">
            A world class international team.
          </p>
          <p className="text-center text-2xl">
            Web3 Productions is powered by an elite international team of
            virtual production specialists, filmmakers, and creatives hailing
            from Italy, Russia, France, UK, US, and many other countries. With
            decades of combined experience from the world’s top studios and
            blockbuster productions, our experts deliver unmatched technical
            precision, artistic vision, and innovative workflows ensuring every
            project exceeds expectations.
          </p>
        </article>
      </div>
      <Faq data={FAQ_DATA} />
    </>
  );
};

export default Home;
