import React from 'react';
import { CAMPAIGN_ASSETS } from '../data/campaignData';
import { MapPin, Phone, Mail, Globe, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenTaxModal: () => void;
  onDonateClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTaxModal, onDonateClick }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#05172C] text-slate-300 text-xs sm:text-sm border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-28 sm:py-14">
        
        {/* Main Grid: Left Brand info + Middle EXPLORE + Right CONTACT matching Screenshot 4 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand, Tagline, & 80G Green Pill Badge */}
          <div className="md:col-span-5 lg:col-span-5 space-y-4">
            
            {/* Logo + Foundation Name */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white p-1.5 flex items-center justify-center flex-shrink-0 shadow-xs">
                <img
                  src={CAMPAIGN_ASSETS.logo}
                  alt="Punyakart Foundation Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-tight">
                Punyakart Foundation
              </h3>
            </div>

            {/* Tagline */}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Shelter, heal, and feed 1,187+ rescued animals in Dehradun — service to animals is service to the Divine.
            </p>

            {/* 80G Certified Green Pill Badge matching Screenshot 4 */}
            <div className="pt-1">
              <div
                onClick={onOpenTaxModal}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpenTaxModal()}
                className="inline-flex items-center gap-1.5 xs:gap-2 bg-[#022A1E] text-[#10B981] border border-[#059669]/60 hover:border-[#10B981] px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] xs:text-[11px] sm:text-xs font-bold cursor-pointer transition-colors shadow-2xs leading-snug"
              >
                <ShieldCheck className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                <span>80G Certified • 50% Tax Relief &nbsp;|&nbsp; 80G: AAPCP5662BF20251</span>
              </div>
            </div>

          </div>

          {/* Col 2: EXPLORE Section with Two Sub-Columns */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-white font-black text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              EXPLORE
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 sm:gap-y-2 text-xs sm:text-sm text-slate-300">
              <div className="space-y-1">
                <div>
                  <button
                    type="button"
                    onClick={onDonateClick}
                    className="hover:text-white transition-colors cursor-pointer text-left py-1 inline-block"
                  >
                    Donate
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={onOpenTaxModal}
                    className="hover:text-white transition-colors cursor-pointer text-left py-1 inline-block"
                  >
                    80G certificate
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => handleScrollTo('rescue-stories')}
                    className="hover:text-white transition-colors cursor-pointer text-left py-1 inline-block"
                  >
                    About us
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => handleScrollTo('choose-cause')}
                    className="hover:text-white transition-colors cursor-pointer text-left py-1 inline-block"
                  >
                    Our work
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <div>
                  <button
                    type="button"
                    onClick={() => handleScrollTo('rescue-and-recovery')}
                    className="hover:text-white transition-colors cursor-pointer text-left py-1 inline-block"
                  >
                    Impact
                  </button>
                </div>
                <div>
                  <span className="hover:text-white transition-colors cursor-pointer py-1 inline-block">
                    Privacy
                  </span>
                </div>
                <div>
                  <span className="hover:text-white transition-colors cursor-pointer py-1 inline-block">
                    Terms
                  </span>
                </div>
                <div>
                  <span className="hover:text-white transition-colors cursor-pointer py-1 inline-block">
                    Refunds
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: CONTACT Section */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-white font-black text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              CONTACT
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              
              {/* Address */}
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  59/22, Near SBI Bank, Moti Bazar, Dehradun - 248001
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                <a
                  href="tel:+919105155556"
                  className="hover:text-white transition-colors py-0.5"
                >
                  +91 9105155556
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FBBF24] flex-shrink-0" />
                <a
                  href="mailto:info@punyakart.com"
                  className="hover:text-white transition-colors py-0.5"
                >
                  info@punyakart.com
                </a>
              </li>

              {/* Website */}
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#38BDF8] flex-shrink-0" />
                <a
                  href="https://punyakart.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors py-0.5"
                >
                  punyakart.org
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Tax Exemption */}
        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-[11px] text-slate-500 text-center sm:text-left">
          <p>Govt Reg: AAPCP5662BF20251 • Section 80G Tax-Exempt Status Approved</p>
          <p>© {new Date().getFullYear()} Punyakart Foundation. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
