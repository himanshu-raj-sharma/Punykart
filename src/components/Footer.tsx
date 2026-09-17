import React from 'react';
import { CAMPAIGN_ASSETS } from '../data/campaignData';
import { Phone, Mail, Globe, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenTaxModal: () => void;
  onDonateClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTaxModal }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#021429] text-slate-300 text-xs sm:text-sm border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        
        {/* Top Row: Logo + Foundation Name + DEHRADUN UTTARAKHAND & Buttons on Right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center flex-shrink-0 shadow-2xs">
              <img
                src={CAMPAIGN_ASSETS.logo}
                alt="Punyakart Foundation Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="font-display font-black text-base sm:text-lg text-white tracking-tight">
                Punyakart Foundation
              </h3>
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-wider uppercase">
                DEHRADUN, UTTARAKHAND
              </p>
            </div>
          </div>

          {/* Action Buttons: 80G certificate & Our work */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenTaxModal}
              className="bg-[#0D223B] hover:bg-[#152E4D] border border-slate-700/80 text-white font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-2 transition-colors cursor-pointer shadow-2xs"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>80G certificate</span>
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo('choose-cause')}
              className="bg-[#0D223B] hover:bg-[#152E4D] border border-slate-700/80 text-white font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-2 transition-colors cursor-pointer shadow-2xs"
            >
              <Globe className="w-4 h-4 text-orange-400" />
              <span>Our work</span>
            </button>
          </div>

        </div>

        {/* Middle Row: Phone & Email */}
        <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-slate-300 font-medium text-xs sm:text-sm">
            <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <a href="tel:+919105155556" className="hover:text-white transition-colors">
              +91 9105155556
            </a>
          </div>

          <div className="flex items-center gap-2 text-slate-300 font-medium text-xs sm:text-sm">
            <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <a href="mailto:info@punyakart.org" className="hover:text-white transition-colors">
              info@punyakart.org
            </a>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 text-center text-[11px] sm:text-xs text-slate-400">
          © 2026 Punyakart Foundation. Made with ♥ for voiceless souls
        </div>

      </div>
    </footer>
  );
};
