import type { ImageType } from "../Gallery/Gallery";

import { useCallback, useEffect, useRef, useState } from "react";

function useScrollLock(isOpen: boolean) {
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);
}

interface ControlsOptions {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function useKeyboardControls({
  isOpen,
  onClose,
  onNext,
  onPrev,
}: ControlsOptions) {
  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.repeat) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);
}

function useSwipeGestures({
  isOpen,
  onNext,
  onPrev,
}: Omit<ControlsOptions, "onClose">) {
  useEffect(() => {
    if (!isOpen) return;
    let startX: number | null = null;

    function handleTouchStart(e: TouchEvent) {
      startX = e.touches[0].clientX;
    }

    function handleTouchEnd(e: TouchEvent) {
      if (startX === null) return;
      const dX = e.changedTouches[0].clientX - startX;
      if (dX > 50) onPrev();
      if (dX < -50) onNext();
      startX = null;
    }

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isOpen, onNext, onPrev]);
}

interface UseFocusTrapOptions {
  containerRef: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
}

function useFocusTrap({ containerRef, isOpen }: UseFocusTrapOptions) {
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const focusable = Array.from(
      containerRef.current.querySelectorAll("button"),
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    function handleTab(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isOpen, containerRef]);
}

function useLightbox() {
  const containerRef = useRef(null);

  interface LightboxState {
    isOpen: boolean;
    images: ImageType[] | [];
    index: number;
  }

  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    images: [],
    index: 0,
  });

  const openLightbox = useCallback((images: ImageType[], index: number) => {
    setLightbox({ isOpen: true, images, index });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const goToNext = useCallback(() => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length,
    }));
  }, []);

  const goToPrev = useCallback(() => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length,
    }));
  }, []);

  useScrollLock(lightbox.isOpen);
  useKeyboardControls({
    isOpen: lightbox.isOpen,
    onClose: closeLightbox,
    onNext: goToNext,
    onPrev: goToPrev,
  });
  useSwipeGestures({
    isOpen: lightbox.isOpen,
    onNext: goToNext,
    onPrev: goToPrev,
  });
  useFocusTrap({ containerRef, isOpen: lightbox.isOpen });

  return {
    containerRef,
    ...lightbox,
    openLightbox,
    onClose: closeLightbox,
    onNext: goToNext,
    onPrev: goToPrev,
  };
}

export { useLightbox };
