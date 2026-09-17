import React, { useState } from 'react';
import { CAMPAIGN_ASSETS } from '../data/campaignData';
import { Heart, ShoppingBag, Menu, X, Shield, Users } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onOpenCartOrDonate: () => void;
  onOpenTaxModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemCount, onOpenCartOrDonate, onOpenTaxModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Donate Seva', href: '#donation-hub' },
    { label: 'Rescues & Impact', href: '#impact-transparency' },
    { label: 'Donor Blessings', href: '#donors' },
    { label: 'FAQ & Visit', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 130;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EAE5DD] shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
        {/* Logo & Foundation Name */}
        <a
          href="#donation-hub"
          onClick={(e) => handleNavClick(e, '#donation-hub')}
          className="flex items-center gap-2 sm:gap-3 group min-w-0"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full overflow-hidden border border-amber-200 bg-amber-50 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <img
              src={CAMPAIGN_ASSETS.logo}
              alt="Punyakart Foundation Official Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
              <span className="font-display font-extrabold text-base sm:text-xl text-[#0F2942] tracking-tight truncate">
                Punyakart
              </span>
              <span className="hidden sm:inline font-display font-extrabold text-xl text-[#0F2942] tracking-tight">
                Foundation
              </span>
              <span className="inline-flex items-center text-[10px] sm:text-[11px] font-semibold text-emerald-800 bg-emerald-100/90 px-1.5 py-0.5 rounded">
                <Shield className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 text-emerald-700" />
                Verified
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-wide truncate">
              Emergency Gauseva • Uttarakhand
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#9F3D00] transition-colors py-1 hover:border-b-2 hover:border-[#9F3D00] cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
          {cartItemCount > 0 && (
            <button
              id="header-cart-btn"
              type="button"
              onClick={onOpenCartOrDonate}
              className="relative p-2 sm:p-2.5 rounded-full bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200 transition-colors flex items-center justify-center cursor-pointer min-w-[40px] min-h-[40px]"
              title="View selected donation items"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-[#9F3D00]" />
              <span className="absolute -top-1 -right-1 bg-[#9F3D00] text-white text-[10px] sm:text-[11px] font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center shadow-xs">
                {cartItemCount}
              </span>
            </button>
          )}

          <button
            id="header-donate-btn"
            type="button"
            onClick={onOpenCartOrDonate}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#9F3D00] hover:bg-[#863300] text-white font-semibold text-xs sm:text-base px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer transform active:scale-98 min-h-[40px] sm:min-h-[44px]"
          >
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white animate-pulse" />
            <span>Donate</span>
            <span className="hidden sm:inline">Now</span>
          </button>

          {/* Mobile menu hamburger */}
          <button
            id="header-mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#EAE5DD] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2.5 rounded-xl bg-slate-50 text-slate-700 hover:bg-amber-50 hover:text-[#9F3D00] font-medium min-h-[44px] flex items-center cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              id="mobile-tax-info-btn"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTaxModal();
              }}
              className="w-full text-center py-3 text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-xl min-h-[44px] flex items-center justify-center cursor-pointer"
            >
              View 80G Tax Exemption Certificate Details
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
