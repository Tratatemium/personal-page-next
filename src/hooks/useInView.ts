import { useEffect, useState, useRef } from "react";
import { subscribe, getDirection } from "./scrollDirection";

interface UseInViewReturnType {
  ref: React.RefObject<HTMLElement | null>;
  isInView: boolean;
  isScrollingUp: boolean;
}

function useInView(): UseInViewReturnType {
  const ref = useRef<HTMLElement | null>(null);

  const [isInView, setIsInView] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(getDirection());

  useEffect(() => {
    return subscribe(setIsScrollingUp);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.25) {
          setIsInView(true);
        }

        if (entry.intersectionRatio < 0.15) {
          setIsInView(false);
        }
      },
      { threshold: [0.15, 0.25] },
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return { ref, isInView, isScrollingUp };
}

export default useInView;
