/**
 * One segment of the dashed inner rail. Blocks draw their own so a block can
 * leave it out, which is what the hero does.
 */
export function DashedRail() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-[var(--rail)] hidden border-l border-dashed border-line lg:block"
    />
  );
}
