import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Coins } from 'lucide-react';

export const ImpactBanner: React.FC = () => {
  return (
    <section className="py-4 px-3.5 sm:px-4 bg-[#F4F7FA]">
      <div className="max-w-md sm:max-w-lg md:max-w-xl mx-auto">
        
        {/* Soft pale cream card matching PDF */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-r from-[#FFFDF7] via-[#FFF6EE] to-[#FFFDF7] border border-[#FFD9BE] rounded-2xl p-4 sm:p-5 shadow-xs overflow-hidden"
        >
          
          <div className="flex items-center justify-between gap-2">
            
            {/* Left Graphic: Glowing Heart with sparkle */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#FFF0E6] border border-[#FFD9BE] shadow-inner">
              <span className="text-2xl sm:text-3xl select-none" role="img" aria-label="Heart">
                ❤️
              </span>
            </div>

            {/* Center Text Block */}
            <div className="flex-1 text-center px-1 sm:px-2 min-w-0">
              
              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-1 text-[10px] sm:text-[11px] font-black text-[#FF6B00] uppercase tracking-widest mb-1">
                <Sparkles className="w-2.5 h-2.5 text-[#FFB347]" />
                <span>EVERY RUPEE MATTERS</span>
                <Sparkles className="w-2.5 h-2.5 text-[#FFB347]" />
              </div>

              {/* Headline */}
              <h3 className="font-display font-black text-sm sm:text-base text-[#002D62] leading-snug">
                One donation. Multiple lives changed.
              </h3>

              {/* Subtext */}
              <p className="text-[10.5px] sm:text-xs text-slate-600 mt-1 leading-relaxed max-w-xs mx-auto">
                From flood survivors to injured animals — your crowd contribution reaches those who need it most, fast.
              </p>
            </div>

            {/* Right Graphic: Golden Rupee Coins */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-amber-100/70 border border-amber-200 shadow-inner">
              <span className="text-2xl sm:text-3xl select-none" role="img" aria-label="Coins">
                🪙
              </span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
