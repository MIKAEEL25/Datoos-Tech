import React from 'react';

// تعریف تایپ برای داده‌ها
interface StatItem {
  value: string | number;
  label: string;
  isInfinite?: boolean;
}
const STATS: StatItem[] = [
  { value: 'infinite', label: 'Locations', isInfinite: true },
  { value: '24', label: 'Golden Hours' },
  { value: '0', label: 'Company Moves' },
  { value: '40%', label: 'Reduction in Cost*' },
  { value: '95%', label: 'Less Carbon Emissions**' },
  { value: '100%', label: 'Happier Crews' },
];

const HomeTabel: React.FC = () => {
  return (
    <div className="w-fit m-auto mt-20 text-white p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">
          {STATS.map((item, index) => (
            <div key={index} className="flex flex-col">
              <p
                className={`text-6xl font-bold colored-text ${item.isInfinite ? 'lowercase' : ''}`}
              >
                {item.value}
              </p>
              <p className="text-xl font-semibold mt-2 leading-tight max-w-[150px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-20 text-gray-400 text-sm space-y-1">
          <p>
            *as compared to traditional methods in film, TV, and commercial
            productions.
          </p>
          <p>
            **up to 95% reduction, as compared to traditional filming methods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeTabel;
