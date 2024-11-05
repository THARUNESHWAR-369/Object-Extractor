import React from 'react';
import { Wand2, Zap, Crown, Layers, Brain, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Advanced AI Model",
    desc: "State-of-the-art segmentation model trained on millions of images"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Results",
    desc: "Get pixel-perfect extractions in milliseconds"
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Multi-Object",
    desc: "Extract multiple objects from a single image simultaneously"
  },
  {
    icon: <Crown className="w-6 h-6" />,
    title: "Edge Refinement",
    desc: "AI-powered edge detection for perfect boundaries"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Background Remove",
    desc: "Automatically remove or replace backgrounds"
  },
  {
    icon: <Wand2 className="w-6 h-6" />,
    title: "Smart Selection",
    desc: "One-click object selection with AI assistance"
  }
];

export function Features() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-cyan-400 font-medium">AI CAPABILITIES</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">Powered by Advanced AI</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our cutting-edge AI technology makes object extraction faster and more accurate than ever
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass p-6 rounded-xl group hover:glow-cyan transition-all duration-500 hover:scale-105"
            >
              <div className="w-12 h-12 glass rounded-lg flex items-center justify-center text-cyan-300 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}