const CORNERS = [
  "left-[var(--rail)] top-0 -translate-x-1/2 -translate-y-1/2",
  "right-[var(--rail)] top-0 translate-x-1/2 -translate-y-1/2",
  "left-[var(--rail)] bottom-0 -translate-x-1/2 translate-y-1/2",
  "right-[var(--rail)] bottom-0 translate-x-1/2 translate-y-1/2",
];

/**
 * Crosses where a band's rules meet the dashed rails, the way an engineering
 * drawing marks a registration point. Needs a positioned parent spanning the
 * full shell width. Decorative only.
 */
export function CornerTicks() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
      {CORNERS.map((corner) => (
        <span key={corner} className={`absolute size-[7px] ${corner}`}>
          <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-line-strong" />
          <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-line-strong" />
        </span>
      ))}
    </span>
  );
}
