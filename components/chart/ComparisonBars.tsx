import type { ComparisonChart } from "@/content/sample-data";
import { ChartFrame } from "./ChartFrame";

type ComparisonBarsProps = {
  chart: ComparisonChart;
};

export function ComparisonBars({ chart }: ComparisonBarsProps) {
  return (
    <ChartFrame title={chart.title}>
      <dl className="space-y-5">
        {chart.bars.map((bar) => (
          <div key={bar.label}>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-[0.8125rem]">{bar.label}</dt>
              <dd className="font-mono text-[0.8125rem] tabular-nums text-muted">
                {bar.value} {chart.unit}
              </dd>
            </div>
            <div className="mt-2 h-1.5 w-full bg-sunken">
              <div
                className="h-full"
                style={{
                  width: `${(bar.value / chart.max) * 100}%`,
                  backgroundColor: `var(--series-${bar.cohort})`,
                }}
              />
            </div>
          </div>
        ))}
      </dl>
    </ChartFrame>
  );
}
