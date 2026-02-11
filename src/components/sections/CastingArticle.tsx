import { CASTING_DATA } from '@/util/casting';
import FeaturesList from './FeaturesList';

const CastingArticle = () => {
  return (
    <article>
      <FeaturesList data={CASTING_DATA} />
    </article>
  );
};

export default CastingArticle;
