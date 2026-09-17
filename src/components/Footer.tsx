import React from 'react';
import { CAMPAIGN_ASSETS } from '../data/campaignData';
import { ShieldCheck, Mail, Phone, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  onOpenTaxModal: () => void;
  onDonateClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTaxModal, onDonateClick }) => {
  return (
    <footer className="bg-[#0B2545] text-slate-300 text-xs sm:text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Foundation Info, Tagline & 80G Badge */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white/5 p-1 flex-shrink-0 flex items-center justify-center">
                <img
                  src={CAMPAIGN_ASSETS.logo}
                  alt="Punyakart Foundation Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-extrabold text-lg sm:text-xl text-white block">
                Punyakart Foundation
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Shelter, heal, and feed 1,187+ rescued animals in Dehradun — service to animals is service to the Divine.
            </p>

            {/* Green 80G Pill Badge (as seen in Page 6) */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenTaxModal}
                className="inline-flex items-center gap-2 bg-[#093527] border border-emerald-500/50 text-emerald-300 px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer hover:border-emerald-400 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>80G Certified • 50% Tax Relief</span>
                <span className="text-slate-400">|</span>
                <span className="font-mono text-[11px] text-emerald-200">80G: AAPCP5662BF20251</span>
              </button>
            </div>
          </div>

          {/* Column 2: EXPLORE (with 2 sub-columns) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-wider">
              EXPLORE
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={onDonateClick}
                  className="hover:text-amber-300 transition-colors block text-left cursor-pointer"
                >
                  Donate
                </button>
                <button
                  type="button"
                  onClick={onOpenTaxModal}
                  className="hover:text-amber-300 transition-colors block text-left cursor-pointer"
                >
                  80G certificate
                </button>
                <a href="#faq" className="hover:text-amber-300 transition-colors block">
                  About us
                </a>
                <a href="#where-money-goes" className="hover:text-amber-300 transition-colors block">
                  Our work
                </a>
              </div>
              <div className="space-y-2.5">
                <a href="#rescue-cases" className="hover:text-amber-300 transition-colors block">
                  Impact
                </a>
                <button
                  type="button"
                  onClick={onOpenTaxModal}
                  className="hover:text-amber-300 transition-colors block text-left cursor-pointer"
                >
                  Privacy
                </button>
                <button
                  type="button"
                  onClick={onOpenTaxModal}
                  className="hover:text-amber-300 transition-colors block text-left cursor-pointer"
                >
                  Terms
                </button>
                <button
                  type="button"
                  onClick={onOpenTaxModal}
                  className="hover:text-amber-300 transition-colors block text-left cursor-pointer"
                >
                  Refunds
                </button>
              </div>
            </div>
          </div>

          {/* Column 3: CONTACT */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-wider">
              CONTACT
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                <span>59/22, Near SBI Bank, Moti Bazar, Dehradun - 248001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:+919105155556" className="hover:text-white transition-colors">
                  +91 9105155556
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:info@punyakart.com" className="hover:text-white transition-colors">
                  info@punyakart.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="https://punyakart.org" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  punyakart.org
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
