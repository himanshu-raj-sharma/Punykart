import React, { useState, useEffect } from 'react';
import { Sparkles, Package, PieChart, BookOpen, Repeat, RefreshCw, HelpCircle, Users } from 'lucide-react';

export const NavigationTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Sparkles },
    { id: 'products', label: 'Products to Donate', icon: Package },
    { id: 'transparency', label: 'Where Money Goes', icon: PieChart },
    { id: 'story', label: 'Rescue Story', icon: BookOpen },
    { id: 'monthly-hero', label: 'Monthly Hero', icon: Repeat },
    { id: 'updates', label: 'Updates & Gallery', icon: RefreshCw },
    { id: 'donors', label: 'Donor Wall', icon: Users },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = tabs.length - 1; i >= 0; i--) {
        const el = document.getElementById(tabs[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveTab(tabs[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-16 sm:top-20 z-30 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EAE5DD] shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-2 sm:py-2.5 scroll-smooth overscroll-x-contain">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap min-h-[36px] transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0F2942] text-white shadow-xs font-semibold'
                    : 'bg-white/90 text-slate-600 hover:bg-white hover:text-slate-900 border border-slate-200/80 active:bg-slate-100'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
