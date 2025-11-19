import { useState, useEffect, RefObject } from "react";

export default function useInView<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  rootMargin = "0px"
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // animate once
        }
      },
      { rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return isInView;
}
