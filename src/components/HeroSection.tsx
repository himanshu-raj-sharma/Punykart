import React, { useState } from 'react';
import { CAMPAIGN_ASSETS, CAMPAIGN_METRICS, CURRENCIES } from '../data/campaignData';
import { Currency } from '../types';
import { 
  Heart, 
  ShieldCheck, 
  Lock, 
  Share2, 
  MessageCircle, 
  Check, 
  MapPin, 
  AlertCircle, 
  FileCheck,
  TrendingUp,
  CreditCard
} from 'lucide-react';

interface HeroSectionProps {
  onDirectDonate: (amount: number, currency: Currency) => void;
  onOpenTaxModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDirectDonate, onOpenTaxModal }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(CURRENCIES[0]);
  const [selectedAmount, setSelectedAmount] = useState<number>(3000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const presetAmountsINR = [1000, 2000, 3000, 5000, 10000];

  const getPresetDisplay = (inrAmount: number) => {
    const converted = Math.round(inrAmount * selectedCurrency.rateFromINR);
    return `${selectedCurrency.symbol}${converted.toLocaleString()}`;
  };

  const currentDonationAmount = customAmount && !isNaN(Number(customAmount)) && Number(customAmount) > 0
    ? Number(customAmount)
    : selectedAmount;

  const currentDonationINR = selectedCurrency.code === 'INR'
    ? currentDonationAmount
    : Math.round(currentDonationAmount / selectedCurrency.rateFromINR);

  const handleSelectPreset = (inrAmount: number) => {
    const converted = Math.round(inrAmount * selectedCurrency.rateFromINR);
    setSelectedAmount(converted);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
  };

  const handleCurrencyChange = (curr: Currency) => {
    const inrValue = currentDonationINR;
    setSelectedCurrency(curr);
    if (customAmount) {
      setCustomAmount(Math.round(inrValue * curr.rateFromINR).toString());
    } else {
      setSelectedAmount(Math.round(inrValue * curr.rateFromINR));
    }
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `🙏 Please support Punyakart Foundation in rescuing critically injured Gaumatas across Uttarakhand. Every donation gets an 80G tax exemption. Donate here: ${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const getImpactMessage = (inr: number) => {
    if (inr >= 10000) return 'Provides comprehensive surgical extraction and 1 month of intensive veterinary care.';
    if (inr >= 5000) return 'Sponsors 12 days of sterile wound dressing, pain relief, and dry/green fodder.';
    if (inr >= 3000) return 'Popular Choice: Covers 7 days of high-protein feed, antibiotics, and clean shelter bed.';
    if (inr >= 2000) return 'Provides emergency medical trauma kit, maggot treatment spray, and saline IVs.';
    return 'Provides 2 nutritious bundles of fresh green fodder and clean drinking water.';
  };

  return (
    <section id="overview" className="py-6 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Narrative & Contribution Engine */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold">
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-full">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                Section 8 NGO
              </span>
              <button
                type="button"
                onClick={onOpenTaxModal}
                className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 px-2.5 py-1 rounded-full cursor-pointer transition-colors min-h-[30px]"
              >
                <FileCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-700" />
                80G Tax Exemption (50% Benefit)
              </button>
              <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-800 border border-blue-200 px-2.5 py-1 rounded-full">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600" />
                Uttarakhand
              </span>
            </div>

            {/* Campaign Headline */}
            <div>
              <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2942] tracking-tight leading-[1.2] sm:leading-[1.15]">
                Be the Reason She Survives.
              </h1>
              <p className="mt-2.5 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
                Punyakart Foundation rescues critically injured and abandoned Gaumatas across Uttarakhand.
                Hit by speeding vehicles or suffering from deep septic wounds, these gentle beings have nowhere to go.
                Your immediate contribution funds emergency trauma surgery, sterile dressings, fresh green fodder, and life-long sanctuary.
              </p>
            </div>

            {/* Donation Card */}
            <div className="bg-white rounded-2xl border-2 border-[#EAE5DD] p-4 sm:p-7 shadow-md">
              <div className="flex items-center justify-between flex-wrap gap-2.5 pb-3.5 border-b border-slate-100">
                <span className="font-display font-bold text-slate-900 text-sm sm:text-lg">
                  Choose Contribution Amount
                </span>

                {/* Currency Switcher */}
                <div className="flex items-center bg-slate-100 p-0.5 sm:p-1 rounded-xl border border-slate-200">
                  {CURRENCIES.map((curr) => (
                    <button
                      key={curr.code}
                      type="button"
                      onClick={() => handleCurrencyChange(curr)}
                      className={`px-2 sm:px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer min-h-[32px] sm:min-h-[auto] ${
                        selectedCurrency.code === curr.code
                          ? 'bg-white text-[#0F2942] shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {curr.code} ({curr.symbol})
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Presets */}
              <div className="mt-4 sm:mt-5">
                <label className="block text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Select Preset Amount
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
                  {presetAmountsINR.map((inr, idx) => {
                    const converted = Math.round(inr * selectedCurrency.rateFromINR);
                    const isSelected = !customAmount && selectedAmount === converted;
                    const isPopular = inr === 3000;

                    return (
                      <button
                        key={inr}
                        type="button"
                        onClick={() => handleSelectPreset(inr)}
                        className={`relative py-2.5 sm:py-3 px-1.5 sm:px-2 rounded-xl text-center font-display font-bold text-xs sm:text-base min-h-[44px] transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-[#9F3D00] text-white border-[#9F3D00] shadow-sm scale-102 ring-2 ring-[#9F3D00]/30'
                            : 'bg-[#FDFBF7] text-slate-800 border-slate-200 hover:border-amber-400 hover:bg-amber-50/50'
                        } ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
                      >
                        {isPopular && (
                          <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[8px] sm:text-[9px] font-black uppercase px-1.5 sm:px-2 py-0.5 rounded-full shadow-xs whitespace-nowrap">
                            Most Popular
                          </span>
                        )}
                        <div>{getPresetDisplay(inr)}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom Input */}
              <div className="mt-4 sm:mt-5">
                <label htmlFor="hero-custom-amount-input" className="block text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                  Or Enter Custom Amount ({selectedCurrency.symbol})
                </label>
                <div className="relative rounded-xl shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-3.5 sm:pl-4 flex items-center pointer-events-none text-slate-400 font-bold text-base sm:text-lg">
                    {selectedCurrency.symbol}
                  </div>
                  <input
                    id="hero-custom-amount-input"
                    type="text"
                    inputMode="numeric"
                    value={customAmount}
                    onChange={handleCustomChange}
                    placeholder={`e.g. ${Math.round(7500 * selectedCurrency.rateFromINR)}`}
                    className="block w-full pl-9 sm:pl-10 pr-14 sm:pr-16 py-3 sm:py-3.5 text-base sm:text-lg font-bold text-slate-900 bg-[#FDFBF7] border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#9F3D00] focus:border-transparent outline-none transition-all"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3.5 sm:pr-4 flex items-center pointer-events-none text-xs font-semibold text-slate-400">
                    {selectedCurrency.code}
                  </div>
                </div>
              </div>

              {/* Dynamic Impact Statement */}
              <div className="mt-3.5 sm:mt-4 p-2.5 sm:p-3 bg-amber-50/80 rounded-xl border border-amber-200/80 flex items-start gap-2 text-xs sm:text-sm text-amber-900">
                <TrendingUp className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  <strong>Your Impact:</strong> {getImpactMessage(currentDonationINR)}
                </span>
              </div>

              {/* CTA Button */}
              <div className="mt-4 sm:mt-5">
                <button
                  id="hero-donate-now-cta"
                  type="button"
                  onClick={() => onDirectDonate(currentDonationAmount, selectedCurrency)}
                  className="w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl bg-[#9F3D00] hover:bg-[#863300] text-white font-display font-bold text-base sm:text-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 sm:gap-3 cursor-pointer transform active:scale-98 min-h-[48px] sm:min-h-[52px]"
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white animate-pulse" />
                  <span>
                    Donate {selectedCurrency.symbol}{currentDonationAmount.toLocaleString()} Now
                  </span>
                </button>
              </div>

              {/* Payment Security Badges */}
              <div className="mt-3.5 sm:mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-1.5 text-[11px] sm:text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  256-Bit SSL Encrypted
                </span>
                <span className="flex items-center gap-1">
                  <CreditCard className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
                  UPI • Cards • NetBanking
                </span>
                <span className="text-slate-600">
                  Instant 80G Certificate
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Media Rescue Card */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white rounded-2xl border border-[#EAE5DD] overflow-hidden shadow-md">
              {/* Media Container with Live Badge */}
              <div className="relative aspect-4/3 sm:aspect-16/11 bg-slate-900 overflow-hidden">
                <img
                  src={CAMPAIGN_ASSETS.heroRescue}
                  alt="Critical rescue in progress by Punyakart Foundation team"
                  className="w-full h-full object-cover transform hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

                {/* Pulsing Live Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-600/90 text-white text-xs font-extrabold uppercase px-3 py-1.5 rounded-full shadow-lg backdrop-blur-xs">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  <span>Critical Rescue In Progress</span>
                </div>

                {/* Location Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 text-slate-100 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-xs">
                  <MapPin className="w-3 h-3 text-red-400" />
                  <span>Rishikesh, UK</span>
                </div>

                {/* Caption overlay */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-xs sm:text-sm font-medium text-slate-200 line-clamp-2">
                    Trauma Case #489: Severe collision on highway bypass. Immediate veterinary intervention ongoing.
                  </p>
                </div>
              </div>

              {/* Progress & Fundraising Metrics */}
              <div className="p-5 sm:p-6 space-y-4">
                {/* Financial Progress Numbers */}
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Raised So Far
                    </span>
                    <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#0F2942]">
                      ₹ {CAMPAIGN_METRICS.raisedINR.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-medium text-slate-500 block">Goal Target</span>
                    <span className="font-semibold text-slate-700 text-sm sm:text-base">
                      ₹ {CAMPAIGN_METRICS.targetINR.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Visual Progress Bar */}
                <div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 via-[#9F3D00] to-[#E85D04] rounded-full transition-all duration-1000 shadow-xs"
                      style={{ width: `${CAMPAIGN_METRICS.percentAchieved}%` }}
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-slate-500 font-semibold">
                    <span className="text-[#9F3D00] font-bold">
                      {CAMPAIGN_METRICS.percentAchieved}% Achieved
                    </span>
                    <span>{CAMPAIGN_METRICS.donorsCount} Generous Donors</span>
                    <span className="text-amber-700">{CAMPAIGN_METRICS.daysLeft} Days Remaining</span>
                  </div>
                </div>

                {/* Share Actions */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-3">
                  <button
                    id="hero-whatsapp-share-btn"
                    type="button"
                    onClick={handleShareWhatsApp}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Share</span>
                  </button>

                  <button
                    id="hero-copy-link-btn"
                    type="button"
                    onClick={handleCopyLink}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                    <span>{copiedLink ? 'Link Copied!' : 'Share Link'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Tax Alert Pill */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-emerald-900 leading-relaxed">
                <strong>Tax Exemption Guaranteed:</strong> Punyakart Foundation is an officially registered Section 8 non-profit with 12A &amp; 80G certification. Get 50% deduction under Indian Tax Laws.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
