import React from 'react';

interface ContributionTier {
  amount: string;
  purpose: string;
}

const TIER_ROWS: ContributionTier[] = [
  { amount: '₹101', purpose: 'Animal Food & Care' },
  { amount: '₹501', purpose: 'Fodder & Daily Nutrition' },
  { amount: '₹1,001', purpose: 'Medicines & Treatment' },
  { amount: '₹2,501', purpose: 'Special Care & Feeding' },
  { amount: '₹5,001', purpose: 'Larger Seva Contribution' },
  { amount: 'Custom Amount', purpose: 'Seva as per your श्रद्धा' },
];

export const WhereYourMoneyGoes: React.FC = () => {
  return (
    <section id="where-money-goes" className="py-7 sm:py-12 bg-[#F4F7FA] border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto px-3.5 sm:px-6">
        
        {/* Outer Matte Light Orange Container */}
        <div className="bg-[#FFF0E6] border-2 border-[#FF6B00] rounded-2xl sm:rounded-3xl shadow-md overflow-hidden p-2 sm:p-3">
          
          {/* Main Title Banner */}
          <div className="text-center py-3.5 sm:py-4 px-4">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#FF6B00] bg-white px-3 py-1 rounded-full inline-block mb-1.5 border border-[#FF6B00]/30 shadow-2xs">
              Transparency &amp; Allocation
            </span>
            <h2 className="font-display font-black text-[#A82512] text-lg sm:text-2xl md:text-3xl tracking-wide uppercase">
              WHERE YOUR CONTRIBUTION CAN HELP
            </h2>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#FF6B00]/30 shadow-inner">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#FF6B00] text-white text-sm sm:text-lg font-bold">
                  <th className="py-3.5 px-4 sm:px-8 text-center border-r border-white/20 w-1/2">
                    Contribution
                  </th>
                  <th className="py-3.5 px-4 sm:px-8 text-center w-1/2">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-slab">
                {TIER_ROWS.map((row, index) => (
                  <tr 
                    key={index} 
                    className={index % 2 === 0 ? 'bg-orange-50/40 hover:bg-orange-50' : 'bg-white hover:bg-orange-50/50'}
                  >
                    <td className="py-3.5 sm:py-4 px-4 sm:px-8 text-center font-black text-[#FF6B00] text-sm sm:text-lg md:text-xl border-r border-slate-100">
                      {row.amount}
                    </td>
                    <td className="py-3.5 sm:py-4 px-4 sm:px-8 text-center font-semibold text-slate-800 text-xs sm:text-base md:text-lg">
                      {row.purpose}
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
