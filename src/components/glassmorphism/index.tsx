import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HoverButtonProps {
  initialText: string;
  hoverText: string;
  onClick?: () => void;
}

const Glassmorphism: React.FC<HoverButtonProps> = ({
  initialText,
  hoverText,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden max-w-35 md:max-w-70 h-30 rounded-[1.7rem] border-2 border-purple-400 border-b-0 bg-(--background-primary) backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.2)]"
    >
      <AnimatePresence mode="wait">
        {!isHovered ? (
          <motion.span
            key="initial"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-white text-xs md:text-4xl font-bold tracking-tight px-6 text-center"
          >
            {initialText}
          </motion.span>
        ) : (
          <motion.span
            key="hover"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0 }}
            className="text-white text-xs md:text-xl whitespace-pre-line px-6"
          >
            {hoverText}
          </motion.span>
        )}
      </AnimatePresence>
      {isHovered && (
        <motion.div
          layoutId="glow"
          className="absolute inset-0 blur-xl rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}
    </motion.button>
  );
};

export default Glassmorphism;
