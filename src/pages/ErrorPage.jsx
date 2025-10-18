import React from 'react';
import { motion } from 'framer-motion';
import { Ghost, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200 text-center p-4">
      {/* Floating ghost animation */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="text-error mb-6"
      >
        <Ghost size={100} />
      </motion.div>

      {/* 404 Text Animation */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold text-error"
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg text-gray-600 mt-3"
      >
        Oops! The page you’re looking for doesn’t exist <br /> or the URL is
        incorrect.
      </motion.p>

      {/* Back to Home button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn btn-primary mt-6 flex items-center gap-2"
        onClick={() => navigate('/')}
      >
        <ArrowLeft size={20} />
        Go Back Home
      </motion.button>
    </div>
  );
};

export default ErrorPage;
