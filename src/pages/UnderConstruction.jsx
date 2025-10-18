import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router';

const UnderConstruction = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200 text-center">
      {/* Animated icon */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
        className="text-secondary mb-5"
      >
        <Wrench size={80} />
      </motion.div>

      {/* Animated heading */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-primary mb-3"
      >
        Page Under Construction
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-lg text-gray-500 mb-6"
      >
        We’re working hard to finish the development of this page.
      </motion.p>

      {/* Animated warning icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5,
        }}
      >
        <AlertTriangle className="text-warning" size={40} />
      </motion.div>

      <button className="btn btn-primary mt-5" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default UnderConstruction;
