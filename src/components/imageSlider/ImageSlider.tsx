import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Arrow from './Arrow';

interface ImageSliderProps {
  images: string[];
  className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="relative my-20 w-full  max-w-4xl mx-auto flex flex-col items-center group">
      <div className="relative w-full aspect-video overflow-hidden border-2 border-purple-400 rounded-[2rem] bg-transparent shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`${className ? className : 'w-full'} h-full object-cover`}
          />
        </AnimatePresence>
        <Arrow onClick={handlePrev} direction="left" />
        <Arrow onClick={handleNext} direction="right" />
      </div>
      <div className="flex gap-2 mt-6">
        {images.map((_, index) => (
          <motion.div
            key={index}
            onClick={() => setCurrentIndex(index)}
            animate={{
              scale: currentIndex === index ? 1.2 : 1,
              backgroundColor: currentIndex === index ? '#a855f7' : '#3f3f46',
            }}
            className="w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
