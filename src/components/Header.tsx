import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { CAMPAIGN_ASSETS } from '../data/campaignData';
import { Heart, Globe, ChevronDown, Menu, X, FileText, User } from 'lucide-react';

interface HeaderProps {
  onOpenTaxModal: () => void;
  onDonateClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTaxModal, onDonateClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'English' | 'Hindi'>('English');
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Smooth Reading Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks = [
    { label: 'About us', href: '#faq' },
    { label: 'Campaign', href: '#donation-products' },
    { label: 'Our work', href: '#where-money-goes' },
    { label: 'Impact', href: '#rescue-cases' },
    { label: 'Our stories', href: '#rescue-cases' },
    { label: 'Get involved', href: '#give-monthly' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#071F36] text-white border-b border-slate-800 shadow-md">
      {/* Animated Scroll Progress Bar at the Header Base */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-[#FF6B00] to-orange-500 origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Left: Foundation Logo & Tagline */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
          className="flex items-center gap-3 group min-w-0"
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 rounded-full overflow-hidden bg-white/5 p-1 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <img
              src={CAMPAIGN_ASSETS.logo}
              alt="Punyakart Foundation"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="min-w-0">
            <span className="font-display font-extrabold text-base sm:text-lg text-white tracking-tight block leading-snug">
              Punyakart Foundation
            </span>
            <span className="text-[10px] sm:text-xs text-slate-300 font-medium tracking-wide block truncate">
              People | Animals | A Better Tomorrow
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-5 text-xs lg:text-sm font-medium text-slate-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-amber-400 transition-colors py-1 cursor-pointer"
            >
              {link.label}
            </a>
          ))}

          {/* 80G Tax Exemption Pill Button */}
          <button
            type="button"
            onClick={onOpenTaxModal}
            className="flex items-center gap-1 bg-[#FF6B00] hover:bg-[#E85D04] text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>80G</span>
            <ChevronDown className="w-3 h-3 ml-0.5" />
          </button>
        </nav>

        {/* Right: Language + Donor Login + Donate CTA */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* Language Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 text-xs text-slate-200 hover:text-white px-2 py-1.5 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-amber-300" />
              <span>{language}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
            {isLangOpen && (
              <div className="absolute right-0 mt-1 w-28 bg-[#0F2942] border border-slate-700 rounded-lg shadow-xl py-1 text-xs z-50">
                <button
                  type="button"
                  onClick={() => { setLanguage('English'); setIsLangOpen(false); }}
                  className="w-full text-left px-3 py-1.5 hover:bg-white/10 text-white"
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => { setLanguage('Hindi'); setIsLangOpen(false); }}
                  className="w-full text-left px-3 py-1.5 hover:bg-white/10 text-white"
                >
                  हिंदी (Hindi)
                </button>
              </div>
            )}
          </div>

          {/* Donor Login */}
          <button
            type="button"
            onClick={onOpenTaxModal}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
          >
            <User className="w-3.5 h-3.5 text-slate-300" />
            <span>Donor Login</span>
          </button>

          {/* Primary Donate CTA */}
          <motion.button
            id="nav-donate-cta"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            type="button"
            onClick={onDonateClick}
            className="flex items-center gap-1.5 bg-[#FF6B00] hover:bg-[#E85D04] active:scale-95 text-white text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-full transition-all shadow-md shadow-orange-950/40 cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-white text-white" />
            <span>Donate</span>
          </motion.button>
        </div>

        {/* Mobile Hamburger & Quick Donate */}
        <div className="flex xl:hidden items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={onDonateClick}
            className="flex items-center gap-1 bg-[#FF6B00] text-white text-xs font-bold px-3 py-1.5 rounded-full"
          >
            <Heart className="w-3.5 h-3.5 fill-white text-white" />
            <span>Donate</span>
          </motion.button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden overflow-hidden bg-[#0A2540] border-t border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-xl"
          >
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => { onOpenTaxModal(); setMobileMenuOpen(false); }}
                className="flex items-center justify-center gap-1.5 py-2 bg-[#FF6B00] text-white rounded-lg font-bold"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>80G Tax Exemption</span>
              </button>
              <button
                type="button"
                onClick={() => { onOpenTaxModal(); setMobileMenuOpen(false); }}
                className="flex items-center justify-center gap-1.5 py-2 bg-slate-800 text-slate-200 rounded-lg font-medium"
              >
                <User className="w-3.5 h-3.5" />
                <span>Donor Login</span>
              </button>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/10 hover:text-amber-400 font-medium text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
