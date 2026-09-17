import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, X, MapPin } from 'lucide-react';

interface RecentLiveDonation {
  id: string;
  name: string;
  location: string;
  amountText: string;
  sevaType: string;
  blessing: string;
  timeAgo: string;
}

const LIVE_DONATIONS: RecentLiveDonation[] = [
  {
    id: 'ld-1',
    name: 'Rameshwar Sharma',
    location: 'Jaipur, Rajasthan',
    amountText: '₹5,100',
    sevaType: 'Accident Surgery & Splint Care',
    blessing: '“May Gaumata recover swiftly and walk without pain. Har Har Mahadev.”',
    timeAgo: '3 minutes ago',
  },
  {
    id: 'ld-2',
    name: 'Pooja Agarwal',
    location: 'South Mumbai',
    amountText: '₹3,000',
    sevaType: '1 Week Complete ICU Recovery',
    blessing: '“Dedicated in the loving memory of my beloved grandmother.”',
    timeAgo: '6 minutes ago',
  },
  {
    id: 'ld-3',
    name: 'Dr. Arvind Patel',
    location: 'Ahmedabad',
    amountText: '₹2,100',
    sevaType: 'Trauma Dressing & Anti-Maggot Spray',
    blessing: '“Gau Seva is the highest duty. Thank you Punyakart team for 24/7 care.”',
    timeAgo: '11 minutes ago',
  },
  {
    id: 'ld-4',
    name: 'Sunita & Deepak Verma',
    location: 'Bengaluru',
    amountText: '₹2,100/mo',
    sevaType: 'Monthly Guardian Adoption',
    blessing: '“Pledged as monthly guardian to protect an injured calf.”',
    timeAgo: '15 minutes ago',
  },
  {
    id: 'ld-5',
    name: 'Meenakshi Sundaram',
    location: 'Chennai',
    amountText: '₹1,100',
    sevaType: 'Auspicious Gau Puja & Lucerne Feed',
    blessing: '“Sending prayers and nutritious food to all rescued souls in Rishikesh.”',
    timeAgo: '19 minutes ago',
  },
];

interface LiveDonationToastProps {
  onDonateClick: () => void;
}

export const LiveDonationToast: React.FC<LiveDonationToastProps> = ({ onDonateClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      // Fade out briefly then change
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % LIVE_DONATIONS.length);
        setIsVisible(true);
      }, 400);
    }, 6500);

    return () => clearInterval(interval);
  }, [isDismissed]);

  if (isDismissed) return null;

  const current = LIVE_DONATIONS[currentIndex];

  return (
    <div className="fixed bottom-20 lg:bottom-6 left-4 lg:left-6 z-35 max-w-xs sm:max-w-sm w-[calc(100%-2rem)] sm:w-auto pointer-events-none">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pointer-events-auto bg-white/95 backdrop-blur-md rounded-2xl border border-orange-200/90 p-3.5 shadow-lg shadow-slate-900/10 relative overflow-hidden"
          >
            {/* Top Amber Accent Beam */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-[#FF6B00] to-orange-500" />

            {/* Dismiss Button */}
            <button
              type="button"
              onClick={() => setIsDismissed(true)}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-start gap-3 pr-4">
              {/* Pulsing Avatar */}
              <div className="relative flex-shrink-0 mt-0.5">
                <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6B00] shadow-xs">
                  <Heart className="w-4 h-4 fill-[#FF6B00] animate-pulse" />
                </div>
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
              </div>

              {/* Content */}
              <div className="min-w-0 text-xs">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-bold text-slate-900 truncate">{current.name}</span>
                  <span className="text-[10px] text-slate-500 flex items-center gap-0.5">
                    <MapPin className="w-2.5 h-2.5 text-slate-400" />
                    {current.location}
                  </span>
                </div>

                <div className="mt-0.5 flex items-center gap-1.5 flex-wrap">
                  <span className="font-extrabold text-[#FF6B00] bg-orange-50 px-1.5 py-0.5 rounded text-[11px]">
                    {current.amountText}
                  </span>
                  <span className="text-slate-600 font-medium truncate text-[11px]">
                    • {current.sevaType}
                  </span>
                </div>

                <p className="mt-1 text-[11px] text-slate-600 italic line-clamp-1">
                  {current.blessing}
                </p>

                <div className="mt-1.5 flex items-center justify-between gap-2 pt-1 border-t border-slate-100 text-[10px]">
                  <span className="text-slate-400">{current.timeAgo}</span>
                  <button
                    type="button"
                    onClick={onDonateClick}
                    className="font-bold text-[#FF6B00] hover:text-[#E85D04] hover:underline cursor-pointer flex items-center gap-0.5"
                  >
                    <span>Offer Seva Too</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
