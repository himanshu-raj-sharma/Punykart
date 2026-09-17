import React from 'react';
import { Stethoscope, Sprout, Home, ShieldCheck } from 'lucide-react';
import { CAMPAIGN_ASSETS } from '../data/campaignData';

interface AllocationRow {
  id: string;
  supportType: string;
  icon: React.ReactNode;
  iconBg: string;
  image: string;
  covers: string;
  amount: string;
  pillBg: string;
  pillText: string;
}

const ALLOCATIONS: AllocationRow[] = [
  {
    id: 'med',
    supportType: 'Medical Treatment',
    icon: <Stethoscope className="w-5 h-5 text-[#FF6B00]" />,
    iconBg: 'bg-[#FFF0E6] border-[#FFD9BE]',
    image: CAMPAIGN_ASSETS.moneyGoes.medical,
    covers: 'Veterinary checkup, medicines, surgery and wound care.',
    amount: '₹416',
    pillBg: 'bg-[#FFF0E6]',
    pillText: 'text-[#FF6B00]',
  },
  {
    id: 'food',
    supportType: 'Nutritious Food',
    icon: <Sprout className="w-5 h-5 text-[#059669]" />,
    iconBg: 'bg-[#EBF7EE] border-[#CDEED6]',
    image: CAMPAIGN_ASSETS.moneyGoes.food,
    covers: 'Dry fodder, green grass and balanced diet.',
    amount: '₹416',
    pillBg: 'bg-[#EAF7EE]',
    pillText: 'text-[#059669]',
  },
  {
    id: 'shelter',
    supportType: 'Shelter & Care',
    icon: <Home className="w-5 h-5 text-[#E11D48]" />,
    iconBg: 'bg-[#FFEAEF] border-[#FFCCD7]',
    image: CAMPAIGN_ASSETS.moneyGoes.shelter,
    covers: 'Clean shelter, daily care, staff support and a safe environment.',
    amount: '₹1,317',
    pillBg: 'bg-[#FFEBF0]',
    pillText: 'text-[#E11D48]',
  },
  {
    id: 'rescue',
    supportType: 'Rescue & Rehabilitation',
    icon: <ShieldCheck className="w-5 h-5 text-[#2563EB]" />,
    iconBg: 'bg-[#EBF2FF] border-[#CCE0FF]',
    image: CAMPAIGN_ASSETS.moneyGoes.rescue,
    covers: 'Rescue operations, transportation and long-term rehabilitation.',
    amount: '₹3,100',
    pillBg: 'bg-[#EBF2FF]',
    pillText: 'text-[#2563EB]',
  },
];

export const WhereYourMoneyGoes: React.FC = () => {
  return (
    <section id="where-money-goes" className="py-7 sm:py-12 bg-[#F4F7FA] border-b border-slate-200/80">
      <div className="max-w-4xl lg:max-w-5xl mx-auto px-3.5 sm:px-6">
        
        {/* Header matching Screenshot 2 */}
        <div className="text-left mb-4 sm:mb-7">
          <h2 className="font-slab font-black text-2xl sm:text-3xl lg:text-4xl text-[#002D62] tracking-tight leading-tight">
            Where Your <span className="text-[#FF6B00]">Money Goes?</span>
          </h2>
          <div className="w-12 h-1 bg-[#FF6B00] rounded-full mt-1 mb-2" />
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
            Your contribution directly helps us rescue, treat and care for injured and abandoned cows.
          </p>
        </div>

        {/* ======================================================== */}
        {/* MOBILE VIEW (block md:hidden): Touch-first Native Cards */}
        {/* ======================================================== */}
        <div className="block md:hidden bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          {/* Royal Navy Mobile Header Bar */}
          <div className="bg-[#002D62] text-white px-4 py-3 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider">
            <span>Support Breakdown</span>
            <span>Your Support</span>
          </div>

          <div className="divide-y divide-slate-100 p-2 space-y-2">
            {ALLOCATIONS.map((row) => (
              <div key={row.id} className="p-2.5 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
                {/* Top Row: Icon + Title on Left, Amount Pill on Right */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 ${row.iconBg}`}>
                      {row.icon}
                    </div>
                    <span className="font-display font-extrabold text-xs sm:text-sm text-[#002D62] truncate">
                      {row.supportType}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-xl font-display font-black text-xs sm:text-sm ${row.pillBg} ${row.pillText} whitespace-nowrap shadow-2xs flex-shrink-0`}>
                    {row.amount}
                  </span>
                </div>

                {/* Bottom Row: Image + What It Covers */}
                <div className="flex items-start gap-3">
                  <div className="w-20 h-14 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0 shadow-2xs">
                    <img
                      src={row.image}
                      alt={row.supportType}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-snug pt-0.5">
                    {row.covers}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================================== */}
        {/* TABLET / DESKTOP VIEW (hidden md:block): Royal Blue Full Table View */}
        {/* =================================================================== */}
        <div className="hidden md:block bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-[#002D62] text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
                  <th className="py-3.5 px-4 sm:px-6 font-extrabold">Support Type</th>
                  <th className="py-3.5 px-4 sm:px-6 font-extrabold text-center">Image</th>
                  <th className="py-3.5 px-4 sm:px-6 font-extrabold">What It Covers</th>
                  <th className="py-3.5 px-4 sm:px-6 font-extrabold text-center">Your Support</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {ALLOCATIONS.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 align-middle">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center flex-shrink-0 ${row.iconBg}`}>
                          {row.icon}
                        </div>
                        <span className="font-display font-bold text-xs sm:text-sm md:text-[15px] text-[#002D62]">
                          {row.supportType}
                        </span>
                      </div>
                    </td>

                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 align-middle text-center">
                      <div className="w-20 sm:w-28 aspect-[16/10] mx-auto rounded-xl overflow-hidden bg-slate-100 shadow-2xs">
                        <img
                          src={row.image}
                          alt={row.supportType}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                      </div>
                    </td>

                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 align-middle">
                      <p className="text-xs sm:text-sm text-slate-600 leading-snug max-w-xs sm:max-w-sm">
                        {row.covers}
                      </p>
                    </td>

                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 align-middle text-center">
                      <span className={`inline-block px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl font-display font-black text-sm sm:text-base ${row.pillBg} ${row.pillText} whitespace-nowrap shadow-2xs`}>
                        {row.amount}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
