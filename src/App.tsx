import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { NavigationTabs } from './components/NavigationTabs';
import { UnifiedDonationHero } from './components/UnifiedDonationHero';
import { CompactImpactAndTrust } from './components/CompactImpactAndTrust';
import { DonorWall } from './components/DonorWall';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LiveDonationToast } from './components/LiveDonationToast';
import { MobileStickyBar } from './components/MobileStickyBar';
import { CheckoutDrawer } from './components/CheckoutDrawer';
import { TaxReceiptModal } from './components/TaxReceiptModal';
import { TaxExemptModal } from './components/TaxExemptModal';

import { DonationCartItem, ProductItem, Currency, TaxReceiptData, Donor } from './types';
import { CURRENCIES, INITIAL_DONORS } from './data/campaignData';

export default function App() {
  const [cart, setCart] = useState<DonationCartItem[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [checkoutDirectAmount, setCheckoutDirectAmount] = useState<number | null>(null);
  const [checkoutDirectCurrency, setCheckoutDirectCurrency] = useState<Currency>(CURRENCIES[0]);
  const [checkoutFrequency, setCheckoutFrequency] = useState<'one-time' | 'monthly'>('one-time');

  const [isTaxExemptModalOpen, setIsTaxExemptModalOpen] = useState<boolean>(false);
  const [activeReceipt, setActiveReceipt] = useState<TaxReceiptData | null>(null);
  const [donors, setDonors] = useState<Donor[]>(INITIAL_DONORS);

  // Cart total count
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Handle product quantity change in wishlist
  const handleUpdateProductQuantity = (product: ProductItem, delta: number) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (!existing) {
        if (delta > 0) {
          return [...prevCart, { product, quantity: delta }];
        }
        return prevCart;
      }
      const newQty = existing.quantity + delta;
      if (newQty <= 0) {
        return prevCart.filter((item) => item.product.id !== product.id);
      }
      return prevCart.map((item) =>
        item.product.id === product.id ? { ...item, quantity: newQty } : item
      );
    });
  };

  // Direct donation from hero
  const handleDirectDonate = (amount: number, currency: Currency) => {
    setCheckoutDirectAmount(amount);
    setCheckoutDirectCurrency(currency);
    setCheckoutFrequency('one-time');
    setIsCheckoutOpen(true);
  };

  // Sponsoring from Monthly Guardian plan
  const handleSelectMonthlyPlan = (amount: number) => {
    setCheckoutDirectAmount(amount);
    setCheckoutDirectCurrency(CURRENCIES[0]);
    setCheckoutFrequency('monthly');
    setIsCheckoutOpen(true);
  };

  // Open checkout for products cart
  const handleOpenCartOrDonate = () => {
    if (cart.length > 0) {
      setCheckoutDirectAmount(null); // Indicates cart checkout
    } else {
      setCheckoutDirectAmount(3000);
      setCheckoutDirectCurrency(CURRENCIES[0]);
    }
    setCheckoutFrequency('one-time');
    setIsCheckoutOpen(true);
  };

  // When checkout is successfully processed
  const handleCompleteDonation = (receipt: TaxReceiptData) => {
    setIsCheckoutOpen(false);
    setActiveReceipt(receipt);

    // Add donor to wall
    const newDonor: Donor = {
      id: `d-${Date.now()}`,
      name: receipt.donorName,
      amount: receipt.amount,
      timeAgo: 'Just now',
      panNumberMasked: receipt.panNumber && receipt.panNumber.length === 10
        ? `${receipt.panNumber.slice(0, 5)}***${receipt.panNumber.slice(-1)}`
        : undefined,
      note: 'Sacred Gauseva Contribution',
      isRecent: true,
      isTop: receipt.amount >= 10000
    };

    setDonors((prev) => [newDonor, ...prev]);

    // Clear cart if it was a cart checkout
    if (checkoutDirectAmount === null) {
      setCart([]);
    }
  };

  // Add blessing prayer
  const handleAddBlessing = (name: string, message: string) => {
    const newBlessing: Donor = {
      id: `b-${Date.now()}`,
      name,
      amount: 1000,
      timeAgo: 'Just now',
      note: message,
      isRecent: true
    };
    setDonors((prev) => [newBlessing, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#111c2d] selection:bg-amber-200 selection:text-amber-900">
      {/* Top Govt Verified & 80G Announcement Ticker */}
      <AnnouncementBar onOpenTaxModal={() => setIsTaxExemptModalOpen(true)} />

      {/* Main Brand Header */}
      <Header
        cartItemCount={cartItemCount}
        onOpenCartOrDonate={handleOpenCartOrDonate}
        onOpenTaxModal={() => setIsTaxExemptModalOpen(true)}
      />

      {/* Sticky Navigation Tabs */}
      <NavigationTabs />

      {/* Main Campaign Content */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* Priority Donation Hub & Hero Section */}
        <UnifiedDonationHero
          cart={cart}
          onUpdateQuantity={handleUpdateProductQuantity}
          onDirectDonate={handleDirectDonate}
          onSelectMonthlyPlan={handleSelectMonthlyPlan}
          onOpenCheckoutWithCart={handleOpenCartOrDonate}
          onOpenTaxModal={() => setIsTaxExemptModalOpen(true)}
        />

        {/* Compact Real Rescues & 100% Transparency Section */}
        <CompactImpactAndTrust
          onOpenTaxModal={() => setIsTaxExemptModalOpen(true)}
          onDonateClick={handleOpenCartOrDonate}
        />

        {/* Donor Wall of Gratitude & Prayers */}
        <DonorWall donors={donors} onAddBlessing={handleAddBlessing} />

        {/* Frequently Asked Questions & Sanctuary Visit */}
        <FaqSection />
      </main>

      {/* Comprehensive Official Footer */}
      <Footer onOpenTaxModal={() => setIsTaxExemptModalOpen(true)} />

      {/* Mobile Sticky Bottom Action Bar */}
      <MobileStickyBar
        cart={cart}
        onOpenDonate={handleOpenCartOrDonate}
        isModalOpen={isCheckoutOpen || !!activeReceipt || isTaxExemptModalOpen}
      />

      {/* Floating WhatsApp Support Bubble */}
      <FloatingWhatsApp />

      {/* Live Recent Donor Activity Toast Notification */}
      <LiveDonationToast onDonateClick={handleOpenCartOrDonate} />

      {/* Slide-over Checkout Drawer */}
      <CheckoutDrawer
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        directAmount={checkoutDirectAmount}
        directCurrency={checkoutDirectCurrency}
        cart={cart}
        onUpdateCartQty={handleUpdateProductQuantity}
        onCompleteDonation={handleCompleteDonation}
        initialFrequency={checkoutFrequency}
      />

      {/* 80G Tax Exemption Certificate Preview Modal */}
      <TaxReceiptModal
        receipt={activeReceipt}
        onClose={() => setActiveReceipt(null)}
      />

      {/* 80G Tax Information and Registrations Modal */}
      <TaxExemptModal
        isOpen={isTaxExemptModalOpen}
        onClose={() => setIsTaxExemptModalOpen(false)}
      />
    </div>
  );
}
