import React from "react";

interface ExampleSiteProps {
  gradientClass: string;
}

export default function ExampleSite({ gradientClass }: ExampleSiteProps) {
  return (
    <div className={`min-h-screen ${gradientClass}`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Our Site
        </h1>
        <p className="text-xl text-white mb-8">
          This is an example page showcasing the selected gradient background.
        </p>
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Features</h2>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>Responsive design</li>
            <li>Beautiful gradient background</li>
            <li>Modern glassmorphism effect</li>
            <li>Easy to customize</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
