'use client';

import React, { useState } from 'react';
import { Wand2, Layers, Download, Share2, Scissors } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const [hoveredStep, setHoveredStep] = useState(0);
  const steps = [
    { icon: <Scissors className="w-6 h-6" />, title: "Select Object", desc: "Click on any object" },
    { icon: <Wand2 className="w-6 h-6" />, title: "AI Magic", desc: "Instant segmentation" },
    { icon: <Layers className="w-6 h-6" />, title: "Refine", desc: "Perfect the edges" },
    { icon: <Download className="w-6 h-6" />, title: "Export", desc: "Download or edit" },
    { icon: <Share2 className="w-6 h-6" />, title: "Share", desc: "Use anywhere" }
  ];

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-emerald-600/20 rounded-full blur-3xl animate-pulse-glow animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm text-cyan-300 mb-6">
            <Wand2 className="w-4 h-4 mr-2" />
            AI-Powered Object Extraction
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Extract Any Object
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 animate-gradient"> With AI Magic</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Select any object in your image and let our AI instantly extract it with pixel-perfect precision. No manual masking needed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href='/login' className="glass glow-cyan px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all flex items-center gap-2 hover:scale-105 duration-300 group">
              Try Free Demo
              <Wand2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
            {/* <button className="px-8 py-4 rounded-full font-medium text-lg border border-white/10 hover:bg-white/5 transition-all">
              Watch Tutorial
            </button> */}
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="glass rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-emerald-600/10 animate-gradient"></div>
            <div className="relative">
              <div className="grid grid-cols-5 gap-4">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`relative p-6 rounded-xl transition-all duration-300 cursor-pointer
                      ${index === hoveredStep ? 'glass glow-cyan scale-105' : 'hover:bg-white/5'}
                      ${index < hoveredStep ? 'text-cyan-400' : 'text-white'}`}
                    onMouseEnter={() => setHoveredStep(index)}
                  >
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4
                      ${index === hoveredStep ? 'glass animate-pulse-glow' : 'glass'}`}>
                      {step.icon}
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-400">{step.desc}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-2 w-4 h-0.5 bg-white/10"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="glass px-4 py-2 rounded-full text-sm text-gray-400 animate-float">
              <span className="text-cyan-400">1,234,567</span> objects extracted today
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}