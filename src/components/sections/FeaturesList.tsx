type FeaturesListProps = {
  title: string;
  features: string;
};

const FeaturesList: React.FC<{ data: FeaturesListProps[] }> = ({ data }) => {
  return (
    <ul className={'text-left text-[0.8rem] md:text-[1rem] list-disc list-inside xl:leading-loose'}>
      {data.map((item) => (
        <li
          key={item.title}
          className={`${item.features === '' ? 'list-none' : ''}`}
        >
          <strong>{item.title}:</strong> {item.features}
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;
