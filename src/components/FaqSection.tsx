import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection: React.FC = () => {
  // First item open by default as shown in Page 6 screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How is my donation utilized?',
      a: 'Your contribution directly funds food, medical care, disaster relief kits, and sanctuary operations. We publish impact updates so you can see the difference.',
    },
    {
      q: 'Will I get an 80G tax receipt?',
      a: 'Yes, every donor receives an instant 80G Tax Exemption Certificate with official registration number (80G: AAPCP5662BF20251), allowing you to claim a 50% tax deduction on your taxable income under Section 80G of the Indian Income Tax Act.',
    },
    {
      q: 'Can I donate from outside India?',
      a: 'Yes! We warmly welcome international devotees and gausevaks. We accept contributions in USD, EUR, and AED via international debit/credit cards with instant transaction confirmations.',
    },
    {
      q: 'Is my online transaction safe?',
      a: 'Absolutely. All donations are handled through 256-bit encrypted bank-grade payment channels (PhonePe, Google Pay, Paytm, BHIM, UPI, and major banks) with zero card data stored on our servers.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex((curr) => (curr === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-12 sm:py-16 bg-[#F6F8FB] border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header with Orange Question Circle Icon */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-[#FF6B00] shadow-2xs">
            <HelpCircle className="w-5 h-5 text-[#FF6B00]" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-amber-300 ring-2 ring-amber-100/70 shadow-sm'
                    : 'border-slate-200 shadow-2xs hover:border-slate-300'
                }`}
              >
                <motion.button
                  whileTap={{ scale: 0.99 }}
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                >
                  <span className={`font-display font-bold text-sm sm:text-base transition-colors ${
                    isOpen ? 'text-[#FF4A22]' : 'text-[#0B2545]'
                  }`}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="text-amber-600 flex-shrink-0"
                  >
                    <ChevronDown className={`w-4 h-4 transition-colors ${
                      isOpen ? 'text-[#FF6B00]' : 'text-slate-400'
                    }`} />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quote Banner (Page 6) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 text-center shadow-xs">
          <p className="font-display font-medium text-xs sm:text-sm text-slate-700 italic">
            &ldquo;Shelter, feed, and heal 1,187+ rescued animals in Dehradun — service to animals is service to the Divine.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
};
