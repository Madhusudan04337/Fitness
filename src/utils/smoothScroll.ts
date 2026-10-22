/**
 * Fast, responsive, athletic smooth scroll.
 * Replaces the sluggish 1.5s+ native browser scroll with a snappy,
 * high-performance ~320-400ms ease-out glide.
 */

let currentAnimationId: number | null = null;

export function fastSmoothScrollTo(
  target: HTMLElement | string | number,
  options?: {
    offset?: number;
    duration?: number;
    onComplete?: () => void;
  }
) {
  if (typeof window === 'undefined') return;

  // Cancel any running scroll animation
  if (currentAnimationId !== null) {
    cancelAnimationFrame(currentAnimationId);
    currentAnimationId = null;
  }

  let targetY = 0;
  const headerOffset = options?.offset ?? 64; // accounts for fixed navbar

  if (typeof target === 'number') {
    targetY = target;
  } else if (typeof target === 'string') {
    const cleanId = target.replace(/^#/, '');
    const el = document.getElementById(cleanId);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    targetY = window.pageYOffset + rect.top - headerOffset;
  } else if (target instanceof HTMLElement) {
    const rect = target.getBoundingClientRect();
    targetY = window.pageYOffset + rect.top - headerOffset;
  }

  // Clamp within page boundaries
  const maxScroll = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  ) - window.innerHeight;
  targetY = Math.max(0, Math.min(targetY, maxScroll));

  const startY = window.pageYOffset;
  const distance = targetY - startY;

  // If already at target position
  if (Math.abs(distance) < 2) {
    window.scrollTo(0, targetY);
    options?.onComplete?.();
    return;
  }

  // Snappy athletic curve: 260ms to 380ms max
  const customDuration = options?.duration;
  const duration = customDuration ?? Math.min(380, Math.max(240, Math.abs(distance) * 0.14));
  const startTime = performance.now();

  // Cancel smoothly if user intervenes with touch or wheel
  const cancelOnUserInteraction = () => {
    if (currentAnimationId !== null) {
      cancelAnimationFrame(currentAnimationId);
      currentAnimationId = null;
    }
    window.removeEventListener('wheel', cancelOnUserInteraction);
    window.removeEventListener('touchstart', cancelOnUserInteraction);
  };

  window.addEventListener('wheel', cancelOnUserInteraction, { passive: true, once: true });
  window.addEventListener('touchstart', cancelOnUserInteraction, { passive: true, once: true });

  // Athletic ease-out cubic curve (starts swiftly, settles with zero delay)
  const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = easeOutCubic(progress);

    window.scrollTo(0, startY + distance * easeProgress);

    if (progress < 1) {
      currentAnimationId = requestAnimationFrame(step);
    } else {
      window.scrollTo(0, targetY);
      currentAnimationId = null;
      window.removeEventListener('wheel', cancelOnUserInteraction);
      window.removeEventListener('touchstart', cancelOnUserInteraction);
      options?.onComplete?.();
    }
  };

  currentAnimationId = requestAnimationFrame(step);
}
