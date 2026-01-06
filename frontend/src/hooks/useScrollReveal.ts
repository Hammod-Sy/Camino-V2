import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(threshold: number = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasChecked = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasChecked.current) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      hasChecked.current = true;
      return;
    }

    // Check if element is already in viewport immediately
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const isInViewport = rect.top < windowHeight * 1.5 && rect.bottom > -200;
    
    if (isInViewport) {
      // Element is already visible, show it immediately
      setIsVisible(true);
      hasChecked.current = true;
      return;
    }

    // Element is not in viewport, set up observer
    hasChecked.current = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold,
        rootMargin: '100px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

