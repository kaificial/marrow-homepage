import { DashedRail } from "./DashedRail";

type RuledBandProps = {
  /** Tailwind height class. Keeps the ruled rhythm between sections. */
  height?: string;
};

/** An empty band that keeps the horizontal rules and the rail going. */
export function RuledBand({ height = "h-16 sm:h-24" }: RuledBandProps) {
  return (
    <div
      aria-hidden="true"
      data-theme-box=""
      className={`relative border-t border-dashed border-line ${height}`}
    >
      <DashedRail />
    </div>
  );
}
