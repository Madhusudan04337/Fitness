import React, { useState } from 'react';
import { MessageSquare, Star, Send, CheckCircle2, ThumbsUp, Sparkles, RefreshCw } from 'lucide-react';

interface FeedbackData {
  category: string;
  rating: number;
  name: string;
  email: string;
  memberId: string;
  tags: string[];
  message: string;
  recommend: 'yes' | 'neutral' | 'no';
}

const CATEGORIES = [
  'Equipment & Rigs',
  'Coaching & Form',
  'Sauna & Cold Plunge',
  'Floor Atmosphere',
  'General Suggestion',
];

const PRESET_TAGS = [
  'Cleanliness 10/10',
  'Sauna Temperature',
  'Plunge Refresh Rate',
  'Eleiko Plates Supply',
  'Great Coach Feedback',
  'Locker Room Care',
  'App Booking Flow',
  'Peak Hour Capacity',
];

export default function FeedbackSection() {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [memberId, setMemberId] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [recommend, setRecommend] = useState<'yes' | 'neutral' | 'no'>('yes');
  const [submitted, setSubmitted] = useState(false);
  const [dispatchReceipt, setDispatchReceipt] = useState<string>('');

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() && selectedTags.length === 0) return;

    // Generate random technical reference code
    const receiptCode = `HYPER-FB-${Math.floor(1000 + Math.random() * 9000)}`;
    setDispatchReceipt(receiptCode);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setMessage('');
    setSelectedTags([]);
    setName('');
    setEmail('');
    setMemberId('');
    setRating(5);
  };

  return (
    <section
      id="feedback"
      className="relative w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--theme-surface)] border border-[var(--theme-border)] text-[11px] font-mono tracking-[0.25em] text-[var(--theme-accent)] uppercase mb-3 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>ATHLETE VOICE // PROTOCOL</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--theme-text-main)] leading-tight mb-4">
            MEMBER <span className="text-[var(--theme-accent)]">FEEDBACK</span>
          </h2>

          <p className="text-sm sm:text-base text-[var(--theme-text-muted)] leading-relaxed font-light">
            Help us maintain the highest standard of athletic training and contrast recovery. Your thoughts route directly to our facility director.
          </p>
        </div>

        {/* Interactive Form or Confirmation Card */}
        <div className="rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] backdrop-blur-md shadow-xl overflow-hidden p-6 sm:p-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 1. Category Selector */}
              <div>
                <label className="block text-xs font-mono font-bold tracking-widest text-[var(--theme-text-muted)] uppercase mb-3">
                  1. Focus Area
                </label>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        category === cat
                          ? 'bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] shadow-xs'
                          : 'bg-[var(--theme-surface-solid)] text-[var(--theme-text-muted)] border border-[var(--theme-border)] hover:border-[var(--theme-accent)] hover:text-[var(--theme-text-main)]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Rating Selector */}
              <div className="p-4 sm:p-5 rounded-xl bg-[var(--theme-bg)] border border-[var(--theme-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--theme-text-muted)]">
                    2. Overall Facility Rating
                  </div>
                  <div className="text-sm text-[var(--theme-text-main)] mt-0.5 font-medium">
                    {rating === 5 && 'Benchmark Standard (Exceptional)'}
                    {rating === 4 && 'Good (Solid performance, slight refinements)'}
                    {rating === 3 && 'Average (Needs attention)'}
                    {rating === 2 && 'Sub-standard (Requires review)'}
                    {rating === 1 && 'Unacceptable (Urgent director action)'}
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const active = (hoverRating ?? rating) >= star;
                    return (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(null)}
                        className="p-1 focus:outline-none cursor-pointer transition-transform hover:scale-110"
                        aria-label={`Rate ${star} of 5 stars`}
                      >
                        <Star
                          className={`w-6 h-6 transition-colors ${
                            active
                              ? 'text-[var(--theme-accent)] fill-[var(--theme-accent)]'
                              : 'text-[var(--theme-text-muted)] opacity-30'
                          }`}
                        />
                      </button>
                    );
                  })}
                  <span className="ml-2 font-mono text-sm font-bold text-[var(--theme-text-main)]">
                    {rating}.0
                  </span>
                </div>
              </div>

              {/* 3. Quick Tag Chips */}
              <div>
                <label className="block text-xs font-mono font-bold tracking-widest text-[var(--theme-text-muted)] uppercase mb-2.5">
                  3. Key Topics (Click to highlight)
                </label>
                <div className="flex flex-wrap gap-2">
                  {PRESET_TAGS.map((tag) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className={`text-[11px] font-mono px-3 py-1.5 rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-[var(--theme-accent-badge)] border-[var(--theme-accent)] text-[var(--theme-accent)] font-bold'
                            : 'bg-[var(--theme-bg)] border-[var(--theme-border)] text-[var(--theme-text-muted)] hover:border-[var(--theme-border-hover)] hover:text-[var(--theme-text-main)]'
                        }`}
                      >
                        <span>{isSelected ? '✓' : '+'}</span>
                        <span>{tag}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Detailed Feedback Text */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-mono font-bold tracking-widest text-[var(--theme-text-muted)] uppercase">
                    4. Your Detailed Notes or Suggestions
                  </label>
                  <span className="text-[10px] font-mono text-[var(--theme-text-muted)]">
                    {message.length}/500 chars
                  </span>
                </div>
                <textarea
                  rows={4}
                  maxLength={500}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what worked well or what equipment/amenity could be upgraded. E.g., 'The 4°C cold plunge has been great for leg day recovery, but an extra bench by the Eleiko rack would help...'"
                  className="w-full p-4 rounded-xl bg-[var(--theme-bg)] border border-[var(--theme-border)] focus:border-[var(--theme-accent)] focus:outline-none text-sm text-[var(--theme-text-main)] placeholder-[var(--theme-text-muted)]/50 font-sans leading-relaxed transition-colors resize-none"
                />
              </div>

              {/* 5. Member Identification (Optional) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[var(--theme-text-muted)] mb-1.5">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul S."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--theme-bg)] border border-[var(--theme-border)] focus:border-[var(--theme-accent)] focus:outline-none text-sm text-[var(--theme-text-main)] placeholder-[var(--theme-text-muted)]/50 font-sans transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[var(--theme-text-muted)] mb-1.5">
                    Email / WhatsApp
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="For follow-up response"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--theme-bg)] border border-[var(--theme-border)] focus:border-[var(--theme-accent)] focus:outline-none text-sm text-[var(--theme-text-main)] placeholder-[var(--theme-text-muted)]/50 font-sans transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[var(--theme-text-muted)] mb-1.5">
                    Member ID (Optional)
                  </label>
                  <input
                    type="text"
                    value={memberId}
                    onChange={(e) => setMemberId(e.target.value)}
                    placeholder="e.g. HF-2024-41"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--theme-bg)] border border-[var(--theme-border)] focus:border-[var(--theme-accent)] focus:outline-none text-sm text-[var(--theme-text-main)] placeholder-[var(--theme-text-muted)]/50 font-mono transition-colors"
                  />
                </div>
              </div>

              {/* 6. Recommendation Question */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[var(--theme-border)]">
                <span className="text-xs text-[var(--theme-text-muted)] font-mono">
                  Would you recommend Hyperfit to an athletic peer?
                </span>
                <div className="flex items-center gap-2">
                  {(['yes', 'neutral', 'no'] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setRecommend(opt)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                        recommend === opt
                          ? 'bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)]'
                          : 'bg-[var(--theme-bg)] text-[var(--theme-text-muted)] border border-[var(--theme-border)] hover:border-[var(--theme-accent)]'
                      }`}
                    >
                      {opt === 'yes' ? 'Definitely (Yes)' : opt === 'neutral' ? 'Maybe' : 'Unlikely'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg cursor-pointer hover:brightness-105 active:scale-[0.99] transition-all"
              >
                <Send className="w-4 h-4" />
                TRANSMIT FEEDBACK TO MANAGEMENT
              </button>
            </form>
          ) : (
            /* Confirmation State */
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[var(--theme-accent-badge)] border border-[var(--theme-accent)]/40 flex items-center justify-center text-[var(--theme-accent)] mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="text-[10px] font-mono tracking-widest text-[var(--theme-accent)] uppercase mb-1 font-bold">
                DISPATCH CONFIRMED // {dispatchReceipt}
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-[var(--theme-text-main)] mb-3">
                Thank You For Your Voice.
              </h3>

              <p className="text-sm text-[var(--theme-text-muted)] max-w-lg mb-6 leading-relaxed font-light">
                Your notes for <span className="text-[var(--theme-text-main)] font-semibold">{category}</span> rated{' '}
                <span className="text-[var(--theme-accent)] font-bold">{rating}.0 / 5.0</span> have been logged and routed to the Indiranagar general manager.
              </p>

              {selectedTags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-1.5 mb-6 max-w-md">
                  {selectedTags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[var(--theme-bg)] border border-[var(--theme-border)] text-[10px] font-mono text-[var(--theme-text-main)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="p-4 rounded-xl bg-[var(--theme-bg)] border border-[var(--theme-border)] text-xs text-[var(--theme-text-muted)] max-w-md mb-8 text-left font-mono">
                <div className="flex items-center gap-2 text-[var(--theme-accent)] font-bold mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>DIRECTOR COMMITMENT</span>
                </div>
                <span>Every logged feedback item is reviewed in our Monday staff operational debrief.</span>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface-solid)] hover:border-[var(--theme-accent)] text-[var(--theme-text-main)] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                SUBMIT ANOTHER NOTE
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
