import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check,
  Zap,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Flame,
  Clock,
  Lock,
  X,
  CreditCard,
  UserCheck,
} from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  highlight?: boolean;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  accessCode: string;
}

const TIERS: PricingTier[] = [
  {
    id: 'baseline',
    name: 'Floor Access',
    tagline: 'OPEN GYM ACCESS',
    monthlyPrice: 149,
    annualPrice: 119,
    description:
      'Full gym floor and lifting platform access for self-directed athletes and fitness enthusiasts.',
    accessCode: 'STANDARD',
    features: [
      'Full access to Indiranagar gym floor (6 AM – 11 PM)',
      'Olympic barbells, bumper plates & power lifting racks',
      'Full range of strength & cardio conditioning equipment',
      'Complimentary initial movement screening & body scan',
      'Sauna & cold plunge recovery access (2 sessions/week)',
      'Member mobile app for workout and habit tracking',
    ],
    notIncluded: [
      '1-on-1 personal training sessions',
      'Personalized nutrition & meal plans',
    ],
    ctaText: 'CHOOSE PLAN',
  },
  {
    id: 'coached',
    name: 'Coached Training',
    tagline: 'PERSONAL COACHING',
    badge: 'MOST POPULAR',
    highlight: true,
    monthlyPrice: 289,
    annualPrice: 229,
    description:
      'Our most popular plan: dedicated 1-on-1 personal coaching, custom nutrition, and unlimited recovery.',
    accessCode: 'COACHED',
    features: [
      'Everything in Floor Access, plus:',
      '4 one-on-one personal training sessions per month',
      'Customized monthly training program updated to your goals',
      'Unlimited sauna, cold plunge & recovery lounge access',
      'Personalized meal plan and practical nutrition guidance',
      'Direct chat support with your assigned personal coach',
      'Monthly progress check-ins and body composition scans',
      'Complimentary towel service & assigned private locker',
    ],
    ctaText: 'START COACHED PLAN',
  },
  {
    id: 'atelier',
    name: 'All-Inclusive Elite',
    tagline: 'PREMIUM VIP',
    badge: 'LIMITED TO 25 MEMBERS',
    monthlyPrice: 490,
    annualPrice: 390,
    description:
      'The comprehensive fitness experience with unlimited personal training, physiotherapy, and VIP amenities.',
    accessCode: 'VIP ELITE',
    features: [
      'Everything in Coached Training, plus:',
      'Unlimited 1-on-1 private coaching sessions with head trainers',
      'Priority access to dedicated private training zones',
      'Comprehensive fitness, mobility, and posture assessments',
      'On-site sports physiotherapy & massage (2 sessions/month)',
      'Full access across all Bangalore and partner locations',
      'Complimentary protein shakes & private executive shower suite',
      'Reserved parking space & complimentary gym bag and gear',
    ],
    ctaText: 'JOIN ALL-INCLUSIVE',
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleOpenModal = (tier: PricingTier) => {
    setSelectedTier(tier);
    setModalSuccess(false);
  };

  const handleCloseModal = () => {
    setSelectedTier(null);
    setModalSuccess(false);
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setModalSuccess(true);
  };

  return (
    <section
      id="pricing"
      className="relative w-full py-20 lg:py-28 px-6 lg:px-12 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300"
    >
      <div className="relative max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--theme-surface)] border border-[var(--theme-border)] text-[11px] font-mono tracking-[0.25em] text-[var(--theme-accent)] uppercase mb-4 shadow-xs">
            <Flame className="w-3.5 h-3.5" />
            <span>MEMBERSHIP PLANS</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[var(--theme-text-main)] leading-tight">
            SIMPLE, TRANSPARENT{' '}
            <span className="font-editorial italic font-normal text-[var(--theme-accent)]">
              Pricing
            </span>
          </h2>

          <p className="mt-4 text-[var(--theme-text-muted)] text-sm sm:text-base leading-relaxed">
            No hidden fees, no long contracts, and full access to modern equipment and recovery amenities.
            Every plan includes our 14-day zero-risk trial.
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-[var(--theme-surface)] border border-[var(--theme-border)] backdrop-blur-md shadow-xs">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`relative px-5 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[var(--theme-surface-solid)] text-[var(--theme-text-main)] shadow-sm border border-[var(--theme-border)]'
                  : 'text-[var(--theme-text-muted)] hover:text-[var(--theme-text-main)]'
              }`}
            >
              MONTHLY BILLING
            </button>

            <button
              onClick={() => setBillingCycle('annual')}
              className={`relative px-5 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] shadow-xs'
                  : 'text-[var(--theme-text-muted)] hover:text-[var(--theme-text-main)]'
              }`}
            >
              <span>ANNUAL BILLING</span>
              <span
                className={`text-[9px] px-2 py-0.5 rounded-full font-black ${
                  billingCycle === 'annual'
                    ? 'bg-black/20 text-[var(--theme-accent-contrast)]'
                    : 'bg-[var(--theme-accent-badge)] text-[var(--theme-accent)]'
                }`}
              >
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
          {TIERS.map((tier) => {
            const price =
              billingCycle === 'annual' ? tier.annualPrice : tier.monthlyPrice;
            const savings = (tier.monthlyPrice - tier.annualPrice) * 12;

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 lg:p-8 hover:-translate-y-1.5 transition-all duration-200 ${
                  tier.highlight
                    ? 'bg-[var(--theme-surface)] border-2 border-[var(--theme-accent)] shadow-md'
                    : 'bg-[var(--theme-surface)] border border-[var(--theme-border)] hover:border-[var(--theme-accent)] shadow-xs'
                }`}
              >
                {/* Highlight Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase shadow-sm ${
                        tier.highlight
                          ? 'bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)]'
                          : 'bg-[var(--theme-surface-solid)] text-[var(--theme-text-muted)] border border-[var(--theme-border)]'
                      }`}
                    >
                      <Sparkles className="w-3 h-3" />
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Sub-tag */}
                  <div className="flex items-center justify-between text-[11px] font-mono tracking-widest mb-2">
                    <span className="text-[var(--theme-accent)] font-bold">{tier.tagline}</span>
                    <span className="text-[var(--theme-text-muted)] opacity-60">{tier.accessCode}</span>
                  </div>

                  {/* Tier Title */}
                  <h3 className="font-heading text-2xl font-black uppercase text-[var(--theme-text-main)] tracking-tight">
                    {tier.name}
                  </h3>

                  <p className="mt-2 text-xs text-[var(--theme-text-muted)] min-h-[36px] leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Price Block */}
                  <div className="mt-6 pt-6 border-t border-[var(--theme-border)] flex items-baseline gap-2">
                    <span className="font-heading text-4xl lg:text-5xl font-black text-[var(--theme-text-main)]">
                      ${price}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-mono text-[var(--theme-text-muted)] uppercase tracking-wider">
                        / MONTH
                      </span>
                      {billingCycle === 'annual' && (
                        <span className="text-[10px] font-mono text-[var(--theme-text-muted)] opacity-80">
                          Billed ${price * 12}/yr (Save ${savings})
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="mt-7 space-y-3.5">
                    <div className="text-[10px] font-mono tracking-widest text-[var(--theme-text-muted)] uppercase font-bold">
                      WHAT'S INCLUDED:
                    </div>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 rounded-full p-0.5 shrink-0 ${
                            tier.highlight
                              ? 'bg-[var(--theme-accent-badge)] text-[var(--theme-accent)]'
                              : 'bg-[var(--theme-border)] text-[var(--theme-text-main)]'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="text-xs text-[var(--theme-text-muted)] leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}

                    {tier.notIncluded && tier.notIncluded.length > 0 && (
                      <div className="pt-2 space-y-2 opacity-50">
                        {tier.notIncluded.map((nFeat, nIdx) => (
                          <div key={nIdx} className="flex items-start gap-3">
                            <div className="mt-0.5 rounded-full p-0.5 shrink-0 bg-transparent text-[var(--theme-text-muted)]">
                              <X className="w-3.5 h-3.5 stroke-[2]" />
                            </div>
                            <span className="text-xs text-[var(--theme-text-muted)] line-through leading-snug">
                              {nFeat}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Call to Action Button */}
                <div className="mt-8 pt-6 border-t border-[var(--theme-border)]">
                  <motion.button
                    onClick={() => handleOpenModal(tier)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3.5 px-5 rounded-xl font-mono text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                      tier.highlight
                        ? 'bg-[var(--theme-accent)] hover:brightness-105 text-[var(--theme-accent-contrast)]'
                        : 'bg-[var(--theme-surface-solid)] hover:border-[var(--theme-accent)] text-[var(--theme-text-main)] border border-[var(--theme-border)]'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </motion.button>

                  <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[10px] font-mono text-[var(--theme-text-muted)]">
                    <ShieldCheck className="w-3 h-3 text-[var(--theme-accent)]" />
                    <span>14-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges & Guarantee Row */}
        <div className="mt-14 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: UserCheck,
              title: 'Never Overcrowded',
              desc: 'We cap active memberships to ensure open platforms and zero waiting for equipment.',
            },
            {
              icon: Clock,
              title: 'Pause Anytime',
              desc: 'Traveling or need time off? Pause your membership for up to 60 days per year.',
            },
            {
              icon: ShieldCheck,
              title: '14-Day Guarantee',
              desc: 'Try our club for 14 days. If it is not right for you, receive a full 100% refund.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 p-6 rounded-2xl bg-[var(--theme-surface)] border border-[var(--theme-border)] shadow-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--theme-accent-badge)] border border-[var(--theme-accent)]/20 flex items-center justify-center text-[var(--theme-accent)] shrink-0">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold uppercase text-[var(--theme-text-main)]">
                  {item.title}
                </h4>
                <p className="text-xs text-[var(--theme-text-muted)] leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Reservation / Inquiry Modal */}
      <AnimatePresence>
        {selectedTier && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl bg-[var(--theme-surface-solid)] border border-[var(--theme-border)] shadow-2xl p-6 sm:p-8 text-[var(--theme-text-main)]"
            >
              {/* Top Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[var(--theme-surface)] hover:brightness-125 flex items-center justify-center text-[var(--theme-text-muted)] hover:text-[var(--theme-text-main)] transition-colors cursor-pointer border border-[var(--theme-border)]"
              >
                <X className="w-4 h-4" />
              </button>

              {!modalSuccess ? (
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--theme-accent)] uppercase tracking-wider mb-1 font-bold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>MEMBERSHIP INQUIRY</span>
                  </div>

                  <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-[var(--theme-text-main)]">
                    {selectedTier.name}
                  </h3>

                  <div className="mt-3 p-3 rounded-xl bg-[var(--theme-bg)] border border-[var(--theme-border)] flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-mono text-[var(--theme-text-muted)] uppercase">
                        SELECTED PLAN
                      </div>
                      <div className="text-sm font-bold text-[var(--theme-text-main)]">
                        {billingCycle === 'annual'
                          ? `$${selectedTier.annualPrice}/mo (Billed Annually)`
                          : `$${selectedTier.monthlyPrice}/mo (Monthly)`}
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[var(--theme-accent-badge)] border border-[var(--theme-accent)]/30 text-[10px] font-mono font-bold text-[var(--theme-accent)]">
                      {selectedTier.accessCode}
                    </span>
                  </div>

                  <form onSubmit={handleSubmitBooking} className="mt-6 space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[var(--theme-text-muted)] mb-1.5 font-bold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--theme-bg)] border border-[var(--theme-border)] focus:border-[var(--theme-accent)] focus:outline-none text-sm text-[var(--theme-text-main)] placeholder-[var(--theme-text-muted)]/50 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[var(--theme-text-muted)] mb-1.5 font-bold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--theme-bg)] border border-[var(--theme-border)] focus:border-[var(--theme-accent)] focus:outline-none text-sm text-[var(--theme-text-main)] placeholder-[var(--theme-text-muted)]/50 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[var(--theme-text-muted)] mb-1.5 font-bold">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--theme-bg)] border border-[var(--theme-border)] focus:border-[var(--theme-accent)] focus:outline-none text-sm text-[var(--theme-text-main)] placeholder-[var(--theme-text-muted)]/50 font-sans"
                      />
                    </div>

                    <div className="pt-2">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3.5 px-6 rounded-xl bg-[var(--theme-accent)] hover:brightness-105 text-[var(--theme-accent-contrast)] font-mono text-xs font-bold tracking-widest uppercase transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
                      >
                        <CreditCard className="w-4 h-4 stroke-[2.5]" />
                        <span>CONFIRM MEMBERSHIP INQUIRY</span>
                      </motion.button>
                    </div>

                    <p className="text-center text-[10px] font-mono text-[var(--theme-text-muted)] flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3 text-[var(--theme-accent)]" />
                      <span>Zero initiation fee. 14-day full refund guarantee.</span>
                    </p>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-[var(--theme-accent-badge)] border border-[var(--theme-accent)] flex items-center justify-center text-[var(--theme-accent)] mx-auto mb-4">
                    <Check className="w-7 h-7 stroke-[3]" />
                  </div>

                  <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-[var(--theme-text-main)]">
                    MEMBERSHIP RESERVED
                  </h3>

                  <p className="mt-2 text-sm text-[var(--theme-text-muted)] leading-relaxed">
                    Thank you, <span className="text-[var(--theme-accent)] font-bold">{formData.name}</span>!
                    Your spot for the{' '}
                    <span className="font-bold text-[var(--theme-text-main)]">{selectedTier.name}</span> plan has
                    been reserved.
                  </p>

                  <div className="mt-5 p-4 rounded-xl bg-[var(--theme-bg)] border border-[var(--theme-border)] text-left text-xs font-mono space-y-1.5 text-[var(--theme-text-muted)]">
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="text-emerald-500 font-bold">CONFIRMATION SENT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Recipient:</span>
                      <span className="text-[var(--theme-text-main)]">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Location:</span>
                      <span className="text-[var(--theme-accent)]">Indiranagar Hub, 100ft Road</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={handleCloseModal}
                      className="w-full py-3 px-6 rounded-xl bg-[var(--theme-surface)] hover:border-[var(--theme-accent)] border border-[var(--theme-border)] text-[var(--theme-text-main)] font-mono text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer"
                    >
                      CLOSE WINDOW
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
