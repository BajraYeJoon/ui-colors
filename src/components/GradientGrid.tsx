import React, { useState } from "react";
import { motion } from "framer-motion";
import gradients from "../data/gradient";

const GradientGrid: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (gradient: string, index: number) => {
    navigator.clipboard.writeText(gradient);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {gradients.map((gradient, index) => (
        <motion.div
          key={gradient.name}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="relative group">
            <div
              className={`w-full h-48 rounded-lg shadow-lg ${gradient.class} transition-transform duration-300 group-hover:scale-105`}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                className="bg-white text-gray-900 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition-colors duration-200"
                onClick={() => copyToClipboard(gradient.class, index)}
              >
                {copiedIndex === index ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="mt-2 text-center text-sm font-medium">
              {gradient.name}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GradientGrid;
