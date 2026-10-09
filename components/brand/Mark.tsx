type MarkProps = {
  size?: number;
  className?: string;
};

/**
 * The area under a survival curve, as one silhouette.
 *
 * Three columns of equal width on a 24 by 24 square. Their heights halve, 24 to
 * 12 to 6, so the shape states the half-life it is named for. Corners are left
 * sharp to sit with the hairline rules the rest of the page is built from.
 */
const SILHOUETTE = "M4 27V3h8v12h8v6h8v6Z";

export function Mark({ size = 22, className }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d={SILHOUETTE} fill="currentColor" />
    </svg>
  );
}
