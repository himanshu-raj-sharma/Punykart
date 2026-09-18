import React from 'react';
import { motion } from 'motion/react';
import heroImage from '../assets/images/regenerated_image_1789631745062.jpg';
import { Sparkles, Heart } from 'lucide-react';

interface HeroSectionProps {
  onDonateClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section id="top" className="relative bg-[#FFFBF5] text-slate-900 pt-6 pb-8 sm:py-10 md:py-12 overflow-hidden border-b border-orange-100">
      
      <div className="relative max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* White / Warm Card Container matching the screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-orange-200/60 rounded-3xl p-5 sm:p-7 md:p-8 shadow-xl shadow-orange-950/5 relative overflow-hidden"
        >
          
          {/* Foundation Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-orange-800 text-xs font-bold tracking-wide">
              <Heart className="w-3.5 h-3.5 text-[#FF6B00] fill-[#FF6B00]" />
              <span>Punyakart Foundation</span>
            </div>
          </div>

          {/* Headline matching screenshot font & styling */}
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-[1.3] tracking-tight mb-3"
          >
            You're Flying to Your Next Destination.<br />
            They're Waiting for a New Beginning.
          </motion.h1>

          {/* Subtext description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
            As you travel to your next destination, take a moment to change the destination of a life that cannot ask for help. Your contribution provides food, medical care and shelter to rescued animals in need.
          </p>

          {/* Hero Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/80 aspect-[16/10] bg-slate-100"
          >
            <img
              src={heroImage}
              alt="Rescued animal with caregiver"
              className="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
