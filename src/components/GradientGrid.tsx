import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import GradientPreview from "./GradientPreview";
import gradients from "../data/gradient";

export default function GradientGrid() {
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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
    >
      {gradients.map((gradient, index) => (
        <motion.div
          key={gradient.name}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="relative group"
        >
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="flex items-stretch h-48">
              <div className="w-1/3 p-4 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  {gradient.name}
                </h3>
                <p className="text-sm text-gray-600 break-all">
                  {gradient.class}
                </p>
              </div>
              <div className={`w-2/3 ${gradient.class}`}></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-xl">
              <div className="space-x-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="secondary"
                        size="icon"
                        onClick={() => copyToClipboard(gradient.class, index)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{copiedIndex === index ? "Copied!" : "Copy class"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <GradientPreview
                        gradientClass={gradient.class}
                        gradientName={gradient.name}
                      />
                        
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Preview gradient</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
