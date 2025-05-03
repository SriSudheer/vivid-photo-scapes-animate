
import React from 'react';
import { motion } from 'framer-motion';

interface ImageSkeletonProps {
  height?: string;
}

export const ImageSkeleton: React.FC<ImageSkeletonProps> = ({ height = "h-72" }) => {
  return (
    <div className={`w-full ${height} rounded-lg overflow-hidden bg-photo-gray/20`}>
      <motion.div
        className="w-full h-full bg-gradient-to-r from-photo-gray/10 via-photo-gray/20 to-photo-gray/10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default ImageSkeleton;
