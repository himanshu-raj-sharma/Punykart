import React from 'react';
import { CAMPAIGN_ASSETS } from '../data/campaignData';
import { ShieldCheck, Mail, Phone, MapPin, Heart, ExternalLink, Globe } from 'lucide-react';

interface FooterProps {
  onOpenTaxModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTaxModal }) => {
  return (
    <footer className="bg-[#0A1D30] text-slate-300 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Col 1: Foundation Info & Credentials */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={CAMPAIGN_ASSETS.logo}
                alt="Punyakart Foundation Logo"
                className="w-12 h-12 object-cover rounded-full border border-amber-400 p-0.5"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-display font-extrabold text-lg text-white block">
                  Punyakart Foundation
                </span>
                <span className="text-xs text-amber-300 font-medium">
                  Section 8 Non-Profit Registered Organization
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              Punyakart Foundation is a dedicated charitable organization committed to the rescue, emergency surgical care, nutrition, and lifelong sanctuary of critically injured, abandoned, and diseased Gaumatas across the Himalayan foothills of Uttarakhand.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="bg-slate-800 text-slate-200 px-2.5 py-1 rounded border border-slate-700 font-mono">
                80G: AADTP2149NF20214
              </span>
              <span className="bg-slate-800 text-slate-200 px-2.5 py-1 rounded border border-slate-700 font-mono">
                Darpan: UA/2021/0284719
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#overview" className="hover:text-amber-300 transition-colors">Campaign Overview</a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-300 transition-colors">Select Products to Donate</a>
              </li>
              <li>
                <a href="#transparency" className="hover:text-amber-300 transition-colors">Where Your Money Goes</a>
              </li>
              <li>
                <a href="#story" className="hover:text-amber-300 transition-colors">Rescue Field Documentation</a>
              </li>
              <li>
                <a href="#monthly-hero" className="hover:text-amber-300 transition-colors">Monthly Hero Recurring Sponsorship</a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTaxModal}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  80G Tax Exemption FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Rescue Sanctuary &amp; Help Desk
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#9F3D00] flex-shrink-0 mt-0.5" />
                <span>Punyakart Gauseva Ashram, Rishikesh-Dehradun Highway, Uttarakhand 249201, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210 (24x7 Trauma Hotline)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:support@punyakart.org" className="hover:text-white transition-colors">
                  support@punyakart.org
                </a>
              </div>
            </div>

            {/* Live Visitor Counters */}
            <div className="mt-4 p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs flex items-center justify-between">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Total Platform Visitors</span>
                <span className="font-mono font-bold text-amber-300 text-sm">1,338,142</span>
              </div>
              <div className="text-right">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Visiting Today</span>
                <span className="font-mono font-bold text-emerald-400 text-sm">290 Devotees</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Punyakart Foundation. All rights reserved. Registered Section 8 Non-Profit Organization.
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenTaxModal}
              className="hover:text-slate-300 transition-colors"
            >
              Tax Exempt Terms
            </button>
            <span>•</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span>•</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              FCRA &amp; CSR Compliance
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
