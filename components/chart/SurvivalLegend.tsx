import type { SurvivalSeries } from "@/content/sample-data";
import { formatDays, formatLineCount } from "@/lib/format";

type SurvivalLegendProps = {
  series: readonly SurvivalSeries[];
};

export function SurvivalLegend({ series }: SurvivalLegendProps) {
  return (
    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
      {series.map((entry) => (
        <li key={entry.cohort} className="flex items-baseline gap-2.5">
          <span
            aria-hidden="true"
            className="mt-1 h-0.5 w-4 shrink-0 rounded-full"
            style={{ backgroundColor: `var(--series-${entry.cohort})` }}
          />
          <span className="text-[0.8125rem] leading-snug">
            <span className="font-medium">{entry.label}</span>
            <span className="text-muted">
              {" "}
              {formatDays(entry.halfLifeDays)} half-life, {formatLineCount(entry.linesObserved)}{" "}
              lines
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}
