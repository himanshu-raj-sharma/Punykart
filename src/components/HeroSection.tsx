import React from 'react';
import { motion } from 'motion/react';
import { CAMPAIGN_ASSETS } from '../data/campaignData';
import { Heart, ArrowRight, Home, PlusSquare, Utensils } from 'lucide-react';

interface HeroSectionProps {
  onDonateClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDonateClick }) => {
  return (
    <section id="top" className="relative bg-gradient-to-b from-[#072140] via-[#092B54] to-[#0A2F5C] text-white overflow-hidden py-12 sm:py-16 lg:py-20 border-b border-slate-800">
      
      {/* Subtle Paw Print Background Watermarks */}
      <div className="absolute inset-0 pointer-events-none opacity-5 select-none overflow-hidden" aria-hidden="true">
        <svg className="absolute bottom-4 right-12 w-48 h-48" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="14" r="5" />
          <circle cx="6" cy="7" r="2.2" />
          <circle cx="10" cy="4" r="2.2" />
          <circle cx="14" cy="4" r="2.2" />
          <circle cx="18" cy="7" r="2.2" />
        </svg>
        <svg className="absolute top-10 right-1/3 w-32 h-32" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="14" r="5" />
          <circle cx="6" cy="7" r="2.2" />
          <circle cx="10" cy="4" r="2.2" />
          <circle cx="14" cy="4" r="2.2" />
          <circle cx="18" cy="7" r="2.2" />
        </svg>
        <svg className="absolute -bottom-6 left-10 w-40 h-40" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="14" r="5" />
          <circle cx="6" cy="7" r="2.2" />
          <circle cx="10" cy="4" r="2.2" />
          <circle cx="14" cy="4" r="2.2" />
          <circle cx="18" cy="7" r="2.2" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Impact Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 sm:space-y-7"
          >
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block"
            >
              <span className="text-amber-400 text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                YOUR SMALL DONATION CAN CREATE A BIG CHANGE
              </span>
            </motion.div>

            {/* Display Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Be the Reason <br />
              <span className="text-[#FF6B00]">She Survives</span>
            </h1>

            {/* Mission Subtext */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
              Help us provide food, shelter and medical care for injured and abandoned animals. Your support can give them a second chance at life.
            </p>

            {/* Large Orange CTA Button */}
            <div>
              <motion.button
                id="hero-donate-now-btn"
                whileHover={{ scale: 1.03, boxShadow: "0 12px 28px -4px rgba(255, 107, 0, 0.45)" }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={onDonateClick}
                className="inline-flex items-center gap-2.5 bg-[#FF6B00] hover:bg-[#E85D04] text-white text-base sm:text-lg font-bold px-8 py-3.5 rounded-full transition-all shadow-lg shadow-orange-950/40 cursor-pointer group"
              >
                <Heart className="w-5 h-5 fill-white text-white group-hover:scale-110 transition-transform" />
                <span>Donate Now</span>
                <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            {/* Three Icon Features: Food, Shelter, Medical Care */}
            <div className="pt-4 flex items-center gap-8 sm:gap-12 text-slate-300">
              
              {/* Food */}
              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 text-center group cursor-pointer"
                onClick={onDonateClick}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-amber-300 group-hover:bg-[#FF6B00]/20 group-hover:border-[#FF6B00]/40 group-hover:text-amber-200 transition-all shadow-xs">
                  <Utensils className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-amber-300 transition-colors">Food</span>
              </motion.div>

              {/* Shelter */}
              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 text-center group cursor-pointer"
                onClick={onDonateClick}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-amber-300 group-hover:bg-[#FF6B00]/20 group-hover:border-[#FF6B00]/40 group-hover:text-amber-200 transition-all shadow-xs">
                  <Home className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-amber-300 transition-colors">Shelter</span>
              </motion.div>

              {/* Medical Care */}
              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 text-center group cursor-pointer"
                onClick={onDonateClick}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-amber-300 group-hover:bg-[#FF6B00]/20 group-hover:border-[#FF6B00]/40 group-hover:text-amber-200 transition-all shadow-xs">
                  <PlusSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-amber-300 transition-colors">Medical Care</span>
              </motion.div>

            </div>

          </motion.div>

          {/* Right Column: Man Comforting Rescued Cow Image */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/15 aspect-[4/3] sm:aspect-[16/11] max-w-xl mx-auto lg:max-w-none transition-shadow hover:shadow-orange-950/30"
            >
              <img
                src={CAMPAIGN_ASSETS.heroRescue}
                alt="Rescue volunteer tending to injured Gaumata"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
};
