import React from 'react';
import { motion } from 'framer-motion';

type Logos = {
  src: string;
  alt: string;
};
interface LogoCarouselProps {
  logos: Logos[];
}

const LogoLoop: React.FC<LogoCarouselProps> = ({ logos }) => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      className="relative w-10/12 overflow-hidden bg-transparent py-10"
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        maskImage:
          'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
      }}
    >
      <div className="absolute inset-y-0 left-0 w-32 z-10" />
      <div className="absolute inset-y-0 right-0 w-32" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          ease: 'linear',
          duration: 8,
          repeat: Infinity,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-12 min-w-37.5"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoLoop;
