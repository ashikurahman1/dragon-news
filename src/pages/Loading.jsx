import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200">
      {/* Animated logo or icon */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
        className="text-primary mb-6"
      >
        <Loader2 size={80} strokeWidth={2.5} />
      </motion.div>

      {/* Animated text */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="text-2xl font-semibold text-secondary tracking-wider"
      >
        Loading News Feed...
      </motion.h2>

      {/* Smooth progress bar */}
      <div className="w-60 mt-6 h-2 bg-base-300 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ x: '-100%' }}
          animate={{ x: ['-100%', '0%', '100%'] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </div>

      {/* Optional hint text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 1.2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="text-gray-500 mt-4"
      >
        Please wait while we load the latest headlines 📰
      </motion.p>
    </div>
  );
};

export default Loading;
