import React from 'react';
import { Heart, ShoppingBag, ShieldCheck } from 'lucide-react';
import { DonationCartItem } from '../types';

interface MobileStickyBarProps {
  cart: DonationCartItem[];
  onOpenDonate: () => void;
  isModalOpen: boolean;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  cart,
  onOpenDonate,
  isModalOpen,
}) => {
  if (isModalOpen) return null;

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartAmount = cart.reduce((sum, item) => sum + item.quantity * item.product.unitPrice, 0);

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-white/95 backdrop-blur-md border-t border-[#EAE5DD] px-3.5 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        
        {/* Left Info: Cart or Urgency Progress */}
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {totalCartCount > 0 ? (
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#9F3D00]">
                <ShoppingBag className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{totalCartCount} item{totalCartCount > 1 ? 's' : ''} in cart</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium truncate">
                Total: <strong className="text-slate-900">₹{totalCartAmount.toLocaleString()}</strong>
              </p>
            </div>
          ) : (
            <div className="min-w-0">
              <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0 text-emerald-600" />
                <span>80G Tax Deductible</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium truncate">
                Goal: <strong className="text-slate-900">₹1.25M</strong> (27% Funded)
              </p>
            </div>
          )}
        </div>

        {/* Right CTA Button */}
        <button
          id="mobile-sticky-donate-btn"
          type="button"
          onClick={onOpenDonate}
          className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-[#9F3D00] hover:bg-[#863300] active:scale-95 text-white font-display font-bold text-sm px-4 py-2.5 rounded-xl shadow-md cursor-pointer transition-all min-h-[44px]"
        >
          <Heart className="w-4 h-4 fill-white animate-pulse" />
          <span>{totalCartCount > 0 ? 'Checkout' : 'Donate Now'}</span>
        </button>

      </div>
    </div>
  );
};
