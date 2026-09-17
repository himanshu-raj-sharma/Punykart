import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CauseContributionSection } from './components/CauseContributionSection';
import { ImpactBanner } from './components/ImpactBanner';
import { RescueStoriesCarousel } from './components/RescueStoriesCarousel';
import { RescueRecoverySection } from './components/RescueRecoverySection';
import { WhereYourMoneyGoes } from './components/WhereYourMoneyGoes';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LiveDonationToast } from './components/LiveDonationToast';
import { CheckoutDrawer } from './components/CheckoutDrawer';
import { TaxReceiptModal } from './components/TaxReceiptModal';
import { TaxExemptModal } from './components/TaxExemptModal';
import { MobileStickyBar } from './components/MobileStickyBar';

import { DonationCartItem, ProductItem, Currency, TaxReceiptData, Donor } from './types';
import { CURRENCIES, INITIAL_DONORS } from './data/campaignData';

export default function App() {
  const [cart, setCart] = useState<DonationCartItem[]>([
    {
      product: {
        id: "prod-dry-grass",
        name: "Dry Grass",
        unitPrice: 416,
        unitLabel: "Set",
        fundedUnits: 142,
        targetUnits: 500,
        image: "https://lh3.googleusercontent.com/aida/AEtjO1XRF87H5zfs5HhP7C0Pi8LLxya1m6xjBRJwGDoM_krFzE_q42Vkpj3aOIAJ_L45Z1qGJr-NNATd03Sqr0OvM-W5nJqxPM6oN-UhYqN_AoqjjiT2Sw2uRMgYS9rydXL5T-d5URz7h3EKfUE3MiN8j99mYarDYPc2rKsPHzjwgDGzbtTiJ2QUjYVA4rwAFYrglTBvH0zIkmRepz16_HkYkFWoeGpblpIkqX0Lvn_7_in7Ku4DWCf_iqO9fw",
        description: "Nutritious dry grass for cows and animals",
      },
      quantity: 1
    }
  ]);

  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [checkoutDirectAmount, setCheckoutDirectAmount] = useState<number | null>(null);
  const [checkoutDirectCurrency, setCheckoutDirectCurrency] = useState<Currency>(CURRENCIES[0]);
  const [checkoutFrequency, setCheckoutFrequency] = useState<'one-time' | 'monthly'>('one-time');

  const [isTaxExemptModalOpen, setIsTaxExemptModalOpen] = useState<boolean>(false);
  const [activeReceipt, setActiveReceipt] = useState<TaxReceiptData | null>(null);
  const [, setDonors] = useState<Donor[]>(INITIAL_DONORS);

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

  // Open checkout modal directly with specified amount
  const handleCheckoutDirect = (
    amount: number,
    currency: Currency = CURRENCIES[0],
    frequency: 'one-time' | 'monthly' = 'one-time'
  ) => {
    setCheckoutDirectAmount(amount);
    setCheckoutDirectCurrency(currency);
    setCheckoutFrequency(frequency);
    setIsCheckoutOpen(true);
  };

  // Open general checkout
  const handleOpenGeneralDonate = () => {
    setCheckoutDirectAmount(1000); // Default ₹1,000 as seen in PDF
    setCheckoutDirectCurrency(CURRENCIES[0]);
    setCheckoutFrequency('one-time');
    setIsCheckoutOpen(true);
  };

  // When checkout is successfully processed
  const handleCompleteDonation = (receipt: TaxReceiptData) => {
    setIsCheckoutOpen(false);
    setActiveReceipt(receipt);

    const newDonor: Donor = {
      id: `d-${Date.now()}`,
      name: receipt.donorName,
      amount: receipt.amount,
      timeAgo: 'Just now',
      panNumberMasked: receipt.panNumber && receipt.panNumber.length === 10
        ? `${receipt.panNumber.slice(0, 5)}***${receipt.panNumber.slice(-1)}`
        : undefined,
      note: 'Gau Seva Blessing',
      isRecent: true,
      isTop: receipt.amount >= 5000
    };

    setDonors((prev) => [newDonor, ...prev]);

    // If it was cart-based, reset cart
    if (checkoutDirectAmount === null) {
      setCart([]);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F4F7FA] text-neutral-900 selection:bg-[#FF6B00] selection:text-white font-sans antialiased overflow-x-hidden pb-20 lg:pb-0">
      
      {/* 1. Official Header matching PDF */}
      <Header
        onOpenTaxModal={() => setIsTaxExemptModalOpen(true)}
        onDonateClick={handleOpenGeneralDonate}
      />

      <main className="flex-1">
        {/* 2. Hero Section: "Together We Change Lives" matching PDF */}
        <HeroSection onDonateClick={handleOpenGeneralDonate} />

        {/* 3. CHOOSE A CAUSE + Contribution Grid (2x2) matching PDF */}
        <CauseContributionSection
          onDonateAmount={handleCheckoutDirect}
          onOpenTaxModal={() => setIsTaxExemptModalOpen(true)}
        />

        {/* 4. "One donation. Multiple lives changed." Banner matching PDF */}
        <ImpactBanner />

        {/* 5. "About the Campaign" / "PROJECT DETAILS" section */}
        <RescueStoriesCarousel
          onSupportStory={handleCheckoutDirect}
        />

        {/* 6. "RESCUE & RECOVERY" Before & After Stories matching Screenshot 1 */}
        <RescueRecoverySection
          onSupportStory={handleCheckoutDirect}
        />

        {/* 7. "Where Your Money Goes?" Table matching Screenshot 2 */}
        <WhereYourMoneyGoes />

        {/* 8. "Frequently asked questions" & Quote Banner matching Screenshot 3 */}
        <FaqSection />
      </main>

      {/* 8. Official Dark Navy Footer matching PDF */}
      <Footer
        onOpenTaxModal={() => setIsTaxExemptModalOpen(true)}
        onDonateClick={handleOpenGeneralDonate}
      />

      {/* Slide-over Checkout Drawer for seamless payment */}
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

      {/* 80G Official Certificate Modal */}
      <TaxReceiptModal
        receipt={activeReceipt}
        onClose={() => setActiveReceipt(null)}
      />

      {/* 80G Tax Exemption & Govt Registration Info Modal */}
      <TaxExemptModal
        isOpen={isTaxExemptModalOpen}
        onClose={() => setIsTaxExemptModalOpen(false)}
      />

      {/* Real-time donor activity ticker */}
      <LiveDonationToast onDonateClick={handleOpenGeneralDonate} />

      {/* Floating WhatsApp Support Bubble */}
      <FloatingWhatsApp />

      {/* Persistent Mobile Bottom Sticky Donation Bar */}
      <MobileStickyBar
        cart={cart}
        onOpenDonate={handleOpenGeneralDonate}
        isModalOpen={isCheckoutOpen || isTaxExemptModalOpen || activeReceipt !== null}
      />

    </div>
  );
}
