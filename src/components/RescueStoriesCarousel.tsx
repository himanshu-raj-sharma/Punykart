import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { Currency } from '../types';
import { CURRENCIES } from '../data/campaignData';
import rescueStory1 from '../assets/images/rescue_story_1.jpg'; // Huge open flank wound
import rescueStory2 from '../assets/images/rescue_story_2.jpg'; // Torn open neck wound
import rescueStory3 from '../assets/images/rescue_story_3.jpg'; // Painful open back wound

interface RescueStoriesCarouselProps {
  onSupportStory: (amount: number, currency: Currency) => void;
}

interface RescueCard {
  id: string;
  image: string;
  line1: string;
  line2: string;
  line3: string;
  supportAmount: number;
}

const RESCUE_CARDS: RescueCard[] = [
  {
    id: 'story-1',
    image: rescueStory2, // White bull receiving emergency clinic care for severe torn neck wound
    line1: 'His Neck Was Torn',
    line2: 'Open... Yet He Never',
    line3: 'Stopped Fighting.',
    supportAmount: 1000,
  },
  {
    id: 'story-2',
    image: rescueStory1, // Black cow on roadside with large severe open wound on side
    line1: 'A Huge Open Wound',
    line2: 'Was Slowly Taking',
    line3: 'Her Life.',
    supportAmount: 1000,
  },
  {
    id: 'story-3',
    image: rescueStory3, // Cow in shelter pen with severe open wound along spine/back
    line1: 'Her Back Was Reduced',
    line2: 'to A Painful Open',
    line3: 'Wound.',
    supportAmount: 1000,
  },
];

export const RescueStoriesCarousel: React.FC<RescueStoriesCarouselProps> = ({ onSupportStory }) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="rescue-stories" className="py-6 sm:py-10 bg-[#FAF7F2] border-b border-[#F0EAE1]">
      <div className="max-w-4xl lg:max-w-5xl mx-auto px-3 sm:px-6">
        
        {/* Eyebrow Label */}
        <div className="text-left mb-1">
          <span className="text-[#FF5500] font-black text-[11px] sm:text-[13px] tracking-wider uppercase block">
            PROJECT DETAILS
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-left mb-3 sm:mb-4">
          <h2 className="font-slab font-black text-xl sm:text-2xl md:text-3xl lg:text-[34px] text-[#002D62] tracking-tight leading-tight">
            About the Campaign
          </h2>
        </div>

        {/* Top Urgency Banner Box */}
        <div className="border border-[#FF7A00] sm:border-2 bg-[#FFF6EE] rounded-xl sm:rounded-2xl py-3 px-2.5 sm:py-5 sm:px-6 mb-3 sm:mb-5 shadow-2xs">
          <h3 className="font-slab font-black text-[#9E1B1B] text-center text-xs xs:text-sm sm:text-lg md:text-xl lg:text-[24px] leading-snug sm:leading-tight max-w-3xl mx-auto">
            She Is Fighting for Her Life She Can&apos;t Even<br className="hidden sm:inline" />
            {' '}Stand You Can Be the Reason She Survives.
          </h3>
        </div>

        {/* 3 Cards Grid (always 3 columns matching the uploaded mockup image) */}
        <div className="grid grid-cols-3 gap-1.5 xs:gap-2.5 sm:gap-4 lg:gap-5">
          {RESCUE_CARDS.map((card) => {
            const hasError = imageErrors[card.id];

            return (
              <div
                key={card.id}
                onClick={() => onSupportStory(card.supportAmount, CURRENCIES[0])}
                className="border border-[#FF7A00] sm:border-2 rounded-xl sm:rounded-2xl bg-white p-1.5 xs:p-2 sm:p-3.5 shadow-2xs hover:shadow-md hover:border-[#FF5500] transition-all duration-300 flex flex-col justify-between cursor-pointer group select-none min-w-0"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onSupportStory(card.supportAmount, CURRENCIES[0]);
                  }
                }}
                aria-label={`Support story: ${card.line1} ${card.line2} ${card.line3}`}
              >
                {/* Image Container with Soft Rounded Corners */}
                <div className="w-full aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden bg-[#E2E8F0] mb-1.5 sm:mb-3 flex items-center justify-center relative">
                  {!hasError ? (
                    <img
                      src={card.image}
                      alt={`${card.line1} ${card.line2} ${card.line3}`}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(card.id)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#DFE4EA] text-slate-400">
                      <ImageIcon className="w-5 h-5 sm:w-10 sm:h-10 opacity-60" />
                    </div>
                  )}
                </div>

                {/* Story Title with Exact Line Breaks */}
                <div className="flex-1 flex flex-col justify-start min-w-0">
                  <h4 className="font-slab font-black text-[10px] xs:text-[11px] sm:text-sm md:text-base text-[#9E1B1B] leading-tight sm:leading-snug break-normal">
                    <span className="block">{card.line1}</span>
                    <span className="block">{card.line2}</span>
                    <span className="block">{card.line3}</span>
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
