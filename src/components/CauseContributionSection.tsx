import React, { useState } from 'react';
import { Lock, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { Currency } from '../types';
import { CURRENCIES } from '../data/campaignData';
import medicalKitImg from '../assets/images/medical_kit.png';
import cowFoodImg from '../assets/images/cow_food.png';
import greenGrassImg from '../assets/images/green_grass.png';
import dryGrassImg from '../assets/images/dry_grass.png';

interface CauseContributionSectionProps {
  onDonateAmount: (amount: number, currency: Currency) => void;
  onOpenTaxModal: () => void;
}

interface ImpactCard {
  id: string;
  price: number;
  unit: string;
  title: string;
  subtitle: string;
  image: string;
  icon: string;
}

const CONTRIBUTION_CARDS: ImpactCard[] = [
  {
    id: 'c-1',
    price: 416,
    unit: '/ Set',
    title: 'Dry Grass',
    subtitle: 'Nutritious dry grass for cows and animals',
    image: dryGrassImg,
    icon: '🌾',
  },
  {
    id: 'c-2',
    price: 416,
    unit: '/ Set',
    title: 'Fresh Green Grass',
    subtitle: 'Fresh green grass for daily nutrition',
    image: greenGrassImg,
    icon: '🌱',
  },
  {
    id: 'c-3',
    price: 1317,
    unit: '/ Set',
    title: 'Cow Food 50 KG',
    subtitle: 'High quality balanced nutrition for cows',
    image: cowFoodImg,
    icon: '🐄',
  },
  {
    id: 'c-4',
    price: 416,
    unit: '/ Set',
    title: 'Medical Kit',
    subtitle: 'Medicines & first aid for injured animals',
    image: medicalKitImg,
    icon: '🩺',
  },
];

export const CauseContributionSection: React.FC<CauseContributionSectionProps> = ({
  onDonateAmount,
}) => {
  const [activeTab, setActiveTab] = useState<string>('c-1');
  const [highlightedCardId, setHighlightedCardId] = useState<string | null>(null);

  // Quantities currently added to the donation pool for each card
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'c-1': 0,
    'c-2': 0,
    'c-3': 0,
    'c-4': 0,
  });

  // Local stepper values for the card counter [- 1 +] (default 1)
  const [stepperValues, setStepperValues] = useState<Record<string, number>>({
    'c-1': 1,
    'c-2': 1,
    'c-3': 1,
    'c-4': 1,
  });

  // Quick preset donation buttons: ₹1,000 | ₹2,000 | ₹5,000 | ₹10,000
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);

  // Custom amount value
  const [customAmountValue, setCustomAmountValue] = useState<string>('');

  // Handle clicking sliding marquee tabs
  const handleSelectTab = (cardId: string) => {
    setActiveTab(cardId);
    setHighlightedCardId(cardId);

    const el = document.getElementById(`impact-card-${cardId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    setTimeout(() => {
      setHighlightedCardId((curr) => (curr === cardId ? null : curr));
    }, 1200);
  };

  // Stepper increment / decrement
  const handleStepperChange = (id: string, delta: number) => {
    setStepperValues((prev) => {
      const current = prev[id] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  };

  // Add + button clicked
  const handleAddToCart = (id: string) => {
    const addCount = stepperValues[id] || 1;
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + addCount,
    }));
    setActiveTab(id);
    setHighlightedCardId(id);
    setTimeout(() => {
      setHighlightedCardId((curr) => (curr === id ? null : curr));
    }, 1000);
  };

  // Preset button clicked
  const handlePresetClick = (amount: number) => {
    if (selectedPreset === amount) {
      setSelectedPreset(null);
    } else {
      setSelectedPreset(amount);
      setCustomAmountValue('');
    }
  };

  // Custom amount change
  const handleCustomAmountChange = (val: string) => {
    setCustomAmountValue(val);
    if (val) {
      setSelectedPreset(null);
    }
  };

  // Calculate total amount
  const productsTotal = CONTRIBUTION_CARDS.reduce((sum, card) => {
    const qty = quantities[card.id] || 0;
    return sum + card.price * qty;
  }, 0);

  const customAmountNum = Number(customAmountValue) || 0;
  const directDonation = customAmountNum > 0 ? customAmountNum : (selectedPreset || 0);

  const totalAmount = productsTotal + directDonation;
  const displayAmount = totalAmount > 0 ? totalAmount : 1000;

  const handleDonateClick = () => {
    onDonateAmount(displayAmount, CURRENCIES[0]);
  };

  return (
    <section id="choose-cause" className="py-4 sm:py-6 bg-white border-b border-slate-100">
      <div className="max-w-md sm:max-w-lg md:max-w-xl mx-auto px-3 sm:px-4">

        {/* Continuous Horizontal Sliding Contribution Tabs (Sliding Right-to-Left) */}
        <div className="relative overflow-hidden w-full py-0.5 mb-2 sm:mb-3 group">
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div
            className="flex w-max animate-continuous-rtl group-hover:[animation-play-state:paused] gap-2 py-1"
            style={{ '--marquee-duration': '22s' } as React.CSSProperties}
          >
            {[...CONTRIBUTION_CARDS, ...CONTRIBUTION_CARDS].map((card, idx) => {
              const inCart = (quantities[card.id] || 0) > 0;
              const isSelected = inCart || activeTab === card.id;
              return (
                <button
                  key={`${card.id}-${idx}`}
                  type="button"
                  onClick={() => handleSelectTab(card.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border flex-shrink-0 select-none shadow-2xs ${
                    isSelected
                      ? 'bg-[#FFF0E6] border-[#FF6B00] text-[#C84800] ring-2 ring-[#FF6B00]/25 shadow-xs'
                      : 'bg-white border-slate-200/90 text-slate-700 hover:border-[#FF6B00] hover:text-[#002D62] hover:bg-[#FFF0E6]/30'
                  }`}
                  aria-label={`Select ${card.title} contribution`}
                >
                  <span className="text-xs">{card.icon}</span>
                  <span className="whitespace-nowrap">{card.title}</span>
                  <span
                    className={`text-[10px] font-black px-1.5 py-0.5 rounded-full border ${
                      isSelected
                        ? 'bg-[#FF6B00] text-white border-[#E05300]'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    ₹{card.price.toLocaleString()}
                  </span>
                  {isSelected && <Check className="w-3 h-3 text-[#FF6B00] stroke-[2.5]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Heading & Subtitle Matching Screenshot */}
        <div className="text-left mb-3">
          <span className="text-[#FF6B00] font-black text-[11px] tracking-wider uppercase block mb-0.5">
            DONATION PRODUCTS
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-black text-[#002D62] tracking-tight leading-tight">
            Choose your <span className="text-[#FF6B00]">contribution</span>
          </h2>
          <p className="text-[#5A6E85] text-xs mt-0.5 font-medium">
            Pick an impact — see exactly what it funds.
          </p>
        </div>

        {/* 2x2 Grid of Compact Contribution Cards */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {CONTRIBUTION_CARDS.map((card) => {
            const inCartQty = quantities[card.id] || 0;
            const stepperVal = stepperValues[card.id] || 1;
            const isHighlighted = highlightedCardId === card.id;
            return (
              <div
                key={card.id}
                id={`impact-card-${card.id}`}
                className={`border-2 border-[#FF6B00] rounded-xl bg-white p-2 flex flex-col justify-between transition-all duration-300 shadow-2xs hover:shadow-sm ${
                  isHighlighted ? 'ring-2 ring-[#FF6B00]/30 scale-[1.01]' : ''
                }`}
              >
                {/* Image */}
                <div className="w-full h-16 sm:h-20 flex items-center justify-center mb-1 overflow-hidden bg-white">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <h3 className="font-extrabold text-xs text-[#002D62] leading-tight truncate">
                      {card.title}
                    </h3>
                    <p className="text-[10px] text-[#5A6E85] mt-0.5 leading-snug line-clamp-1">
                      {card.subtitle}
                    </p>
                    <div className="mt-1 font-black text-xs sm:text-sm text-[#FF6B00] leading-none flex items-baseline gap-1">
                      ₹{card.price.toLocaleString()} <span className="text-[10px] font-bold text-[#FF6B00]">{card.unit}</span>
                    </div>
                  </div>

                  {/* Action Controls: Stepper + Add Button */}
                  <div className="mt-2 pt-0.5 flex items-center justify-between gap-1.5">
                    {/* Stepper Pill */}
                    <div className="bg-[#F0F5FA] border border-[#D5E3F0] rounded-lg px-1.5 py-1 flex items-center justify-between gap-2 text-xs flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => handleStepperChange(card.id, -1)}
                        className="text-[#002D62] hover:text-[#FF6B00] active:scale-90 font-black text-xs px-0.5 select-none cursor-pointer"
                        aria-label={`Decrease quantity of ${card.title}`}
                      >
                        -
                      </button>
                      <span className="text-[#002D62] font-black text-xs min-w-[10px] text-center select-none">
                        {stepperVal}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleStepperChange(card.id, 1)}
                        className="text-[#002D62] hover:text-[#FF6B00] active:scale-90 font-black text-xs px-0.5 select-none cursor-pointer"
                        aria-label={`Increase quantity of ${card.title}`}
                      >
                        +
                      </button>
                    </div>

                    {/* Add Button */}
                    <button
                      type="button"
                      onClick={() => handleAddToCart(card.id)}
                      className="bg-[#FF6B00] hover:bg-[#E05300] active:scale-95 text-white font-extrabold text-[11px] px-2 py-1 rounded-lg shadow-2xs transition-all flex items-center justify-center cursor-pointer select-none flex-1 h-7 whitespace-nowrap"
                    >
                      {inCartQty > 0 ? `Add (${inCartQty})` : 'Add +'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MAKE A DONATION Section */}
        <div className="mt-2 pt-1">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[#47607D] font-extrabold text-[11px] tracking-wider uppercase">
              MAKE A DONATION
            </span>
            <span className="font-handwritten text-[#FF6B00] text-xs font-bold">
              Every rupee creates a kinder tomorrow 🧡
            </span>
          </div>

          {/* 4 Preset Buttons */}
          <div className="grid grid-cols-4 gap-2 mb-2">
            {[1000, 2000, 5000, 10000].map((amt) => {
              const isSelected = selectedPreset === amt;
              return (
                <button
                  key={amt}
                  type="button"
                  onClick={() => handlePresetClick(amt)}
                  className={`border-2 rounded-xl py-1.5 px-1 text-center font-extrabold text-xs transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#FF6B00] bg-[#FFF0E6] text-[#FF6B00] ring-1 ring-[#FF6B00]/30 shadow-2xs'
                      : 'border-slate-300 bg-white text-[#002D62] hover:border-[#FF6B00] hover:bg-[#FFF0E6]/30 active:scale-95'
                  }`}
                >
                  ₹{amt.toLocaleString()}
                </button>
              );
            })}
          </div>

          {/* Enter Custom Amount Input */}
          <div className="relative mb-2.5">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FF6B00] font-black text-sm">
              ₹
            </span>
            <input
              type="number"
              min="100"
              step="100"
              placeholder="Enter custom amount"
              value={customAmountValue}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              className="w-full pl-7 pr-8 py-2 bg-white border-2 border-slate-300 focus:border-[#FF6B00] rounded-xl text-xs font-bold text-[#002D62] placeholder:text-slate-400 focus:outline-hidden transition-colors shadow-2xs"
            />
            {customAmountValue && (
              <button
                type="button"
                onClick={() => setCustomAmountValue('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Big Orange CTA Button: Donate Now -> */}
          <button
            type="button"
            onClick={handleDonateClick}
            className="w-full bg-[#FF6B00] hover:bg-[#E05300] active:bg-[#C84800] text-white font-black text-sm sm:text-base py-3 rounded-xl shadow-sm hover:shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>🧡</span>
            <span>Donate Now</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </button>

          {/* Dual Trust Badges */}
          <div className="grid grid-cols-2 gap-2 mt-2 pt-0.5">
            <div className="flex items-center gap-1.5 text-left">
              <Lock className="w-3 h-3 text-emerald-600 flex-shrink-0" />
              <span className="text-[10px] font-semibold text-emerald-800 leading-tight">
                100% Secure &amp; Tax-Deductible
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-left">
              <ShieldCheck className="w-3 h-3 text-teal-600 flex-shrink-0" />
              <span className="text-[10px] font-semibold text-teal-800 leading-tight">
                Brings real change
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
