import React from 'react';
import { CAMPAIGN_ASSETS } from '../data/campaignData';
import { BookOpen, Heart, Activity, CheckCircle, ShieldAlert } from 'lucide-react';

export const RescueStories: React.FC = () => {
  return (
    <section id="story" className="py-12 sm:py-16 bg-white border-b border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#9F3D00] bg-amber-50 px-3 py-1 rounded-md mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Field Documentation &amp; Case Journal
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2942]">
            About the Rescue &amp; Care Mission
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Every animal who arrives at Punyakart Foundation carries a harrowing history of neglect or violent roadside collision. Read how our team responds in minutes to pull them back from the edge.
          </p>
        </div>

        {/* Story 1: Emergency roadside extraction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
              <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
              <span>Case #489 • Emergency Extraction</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F2942]">
              "She Is Fighting for Her Life. She Can't Even Stand."
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Found collapsed on the gravel median along the Dehradun-Haridwar bypass, this Gaumata was hit by a heavy vehicle at night. Severely dehydrated, with deep lacerations and fractured hind leg ligaments, she could not lift her head.
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Our rapid ambulance unit was dispatched within minutes. Volunteers stabilized her spine, wrapped pressure dressings to stop internal bleeding, and gently shifted her into our hydraulic transport van.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1">
                <Activity className="w-4 h-4 text-red-500" /> Responded in 28 mins
              </span>
              <span>•</span>
              <span>2 Rescuers + 1 Vet on Site</span>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-4/3 bg-slate-100 group">
              <img
                src={CAMPAIGN_ASSETS.stories.story1}
                alt="Roadside extraction of injured cow by Punyakart Foundation team"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-xs px-3 py-1 rounded-md">
                Field Photo: Highway Extraction Point
              </div>
            </div>
          </div>
        </div>

        {/* Story 2: Intensive care & treatment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-4/3 bg-slate-100 group">
              <img
                src={CAMPAIGN_ASSETS.stories.story2}
                alt="Veterinarian administering saline and antiseptic flush to cow"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-xs px-3 py-1 rounded-md">
                Field Photo: Trauma Intensive Care Unit
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
              <Heart className="w-3.5 h-3.5 text-amber-600" />
              <span>Phase 2 • Intensive Trauma Recovery</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F2942]">
              Round-the-Clock Veterinary Treatment &amp; Nutrition
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Upon reaching our shelter, Dr. Rawat and the medical team immediately began treating her infected trauma wounds. Over 300 maggots were carefully extracted from her pelvic tissue under local anesthesia.
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              She is currently receiving three intravenous bottles daily of dextrose-saline, high-dose multivitamins, pain relievers, and calcium supplements to rebuild her strength.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Daily Antiseptic Cleansing
              </span>
              <span>•</span>
              <span>Custom High-Protein Mash</span>
            </div>
          </div>
        </div>

        {/* Story 3: Long-term healing and sanctuary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Phase 3 • Rehabilitation &amp; Lifelong Sanctuary</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F2942]">
              "Her Back Was Reduced to a Painful Open Wound... Hope Replaces Agony."
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              With compassionate hands, soft straw bedding, and clean daily forage, her appetite is returning. She now lifts her head willingly to eat green fodder and recognizes the soothing voices of her caretakers.
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              With your continued donations, she will never again have to wander dangerous highways or search garbage piles for food. She has a permanent, loving home at Punyakart Foundation.
            </p>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-medium">
              "When you serve a voiceless, helpless being who has no way to repay you, you perform the truest dharma."
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-4/3 bg-slate-100 group">
              <img
                src={CAMPAIGN_ASSETS.stories.story3}
                alt="Cow resting peacefully on clean straw bedding during recovery"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-xs px-3 py-1 rounded-md">
                Field Photo: Safe Sanctuary Shed
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
