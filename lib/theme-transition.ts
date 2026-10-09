/** How far apart the first section and the last section start changing. */
const SWEEP_MS = 1100;
/** How long one section takes to change. Kept long so neighbours overlap. */
const SHIFT_MS = 700;
const GRACE_MS = 80;

const TOTAL_MS = SWEEP_MS + SHIFT_MS;

export type Point = { x: number; y: number };

export type ThemeTransition = {
  /** Ends the change early. Safe to call twice. */
  finish: () => void;
};

export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Changes theme one section at a time.
 *
 * Each section takes a delay from how far its middle sits from `origin`, so the
 * change starts at the top right, under the toggle, and travels to the bottom
 * left. Custom properties inherit, so everything inside a section turns with it
 * as one piece. The fades are longer than the gap between them, so neighbours
 * overlap and the sweep reads as a gradient rather than a sequence of steps.
 * Nothing is covered and nothing moves.
 */
export function playThemeTransition(origin: Point, apply: () => void): ThemeTransition {
  const root = document.documentElement;
  const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-theme-box]"));

  // Boxes past the fold sit at the end of the sweep rather than beyond it.
  const reach =
    Math.max(origin.x, window.innerWidth - origin.x) +
    Math.max(origin.y, window.innerHeight - origin.y);

  const measured = sections.map((box) => {
    const rect = box.getBoundingClientRect();
    const distance =
      Math.abs(rect.left + rect.width / 2 - origin.x) +
      Math.abs(rect.top + rect.height / 2 - origin.y);
    return { box, distance: Math.min(distance, reach) };
  });

  // Normalized against the boxes actually on screen, so the nearest one starts
  // at once however the layout is arranged.
  const distances = measured.map((entry) => entry.distance);
  const nearest = Math.min(...distances);
  const span = Math.max(...distances) - nearest || 1;

  for (const { box, distance } of measured) {
    const progress = (distance - nearest) / span;
    box.style.setProperty("--theme-delay", `${Math.round(progress * SWEEP_MS)}ms`);
  }

  root.style.setProperty("--theme-shift", `${SHIFT_MS}ms`);
  root.style.setProperty("--theme-ground", `${TOTAL_MS}ms`);
  root.setAttribute("data-theme-shift", "");
  // Settle the transition declaration before the colors under it change.
  void root.offsetHeight;
  apply();

  let timer = 0;

  const clear = () => {
    window.clearTimeout(timer);
    root.removeAttribute("data-theme-shift");
    root.style.removeProperty("--theme-shift");
    root.style.removeProperty("--theme-ground");
    for (const box of sections) box.style.removeProperty("--theme-delay");
  };

  timer = window.setTimeout(clear, TOTAL_MS + GRACE_MS);

  return { finish: clear };
}
