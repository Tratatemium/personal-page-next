let isScrollingUp = false;
let lastY = 0;

type DirectionListener = (value: boolean) => void;

const listeners = new Set<DirectionListener>();

function notifyListeners() {
  listeners.forEach((listener) => listener(isScrollingUp));
}

function handleScroll() {
  const y = window.scrollY;
  const newDirectionUp = y < lastY;

  if (newDirectionUp !== isScrollingUp) {
    isScrollingUp = newDirectionUp;
    notifyListeners();
  }

  lastY = y;
}

function subscribe(listener: DirectionListener): () => void {
  listeners.add(listener);

  if (listeners.size === 1) {
    lastY = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
  }

  return () => {
    listeners.delete(listener);

    if (listeners.size === 0) {
      window.removeEventListener("scroll", handleScroll);
    }
  };
}

function getDirection() {
  return isScrollingUp;
}

export { subscribe, getDirection };
