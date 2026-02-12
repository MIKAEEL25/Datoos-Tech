import { type FAQItem } from '@/util/faq';
import { useState } from 'react';

export const Faq : React.FC<{ data: FAQItem[] }> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-2xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-10">
        Frequently Asked <br /> <span className="bg-clip-text text-transparent bg-linear-to-r from-violet-600/80 to-cyan-600">Questions</span>
      </h2>
      <div className="space-y-5">
        {data.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggle(index)}
              className={`cursor-pointer
                rounded-[30px]
                border border-white/20
                bg-linear-to-br from-emerald-950/30 to-purple-950/20
                backdrop-blur-xl
                p-5
                transition-all duration-500`}
            >
              <div className="flex justify-between items-center text-white font-medium p-2">
                <span>{item.question}</span>
                <span
                  className={` text-xl
                    transition-transform duration-500
                    font-extrabold
                    ${isActive ? 'rotate-45' : ''}`}
                >
                  +
                </span>
              </div>
              <div
                className={` grid transition-all duration-500 ease-in-out 
                  ${isActive ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;