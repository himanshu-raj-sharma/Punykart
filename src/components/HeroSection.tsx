import React from 'react';
import { motion } from 'motion/react';
import heroImage from '../assets/images/regenerated_image_1789631745062.jpg';

interface HeroSectionProps {
  onDonateClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section id="top" className="relative bg-[#0B1B2B] text-white pt-5 pb-8 sm:py-12 md:py-14 overflow-hidden border-b border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-radial from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-2 sm:mb-3"
        >
          <span className="text-[#FFC107] text-[10.5px] sm:text-xs font-black uppercase tracking-wider block">
            YOUR SMALL DONATION CAN CREATE A BIG CHANGE
          </span>
        </motion.div>

        {/* Display Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="font-display text-[1.75rem] sm:text-3xl md:text-5xl font-black text-white leading-[1.18] tracking-tight mb-4 sm:mb-6"
        >
          Together We <span className="text-[#FF6B00]">Change Lives</span>
        </motion.h1>

        {/* Hero Photo Card (matching PDF screenshot) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative max-w-xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10.5] bg-slate-900 mb-4 sm:mb-6"
        >
          <img
            src={heroImage}
            alt="Smiling children supported by Punyakart relief operations"
            className="w-full h-full object-cover"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          {/* Subtle bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Mission Subtext below image */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-[12px] sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed max-w-xl mx-auto px-1 sm:px-2"
        >
          Whether it's a flood survivor, an injured animal, a hungry child, or a family rebuilding after disaster — your crowd donation reaches them within 24 hours.
        </motion.p>

      </div>
    </section>
  );
};
