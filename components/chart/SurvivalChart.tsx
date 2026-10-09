import type { SurvivalCurve } from "@/content/sample-data";
import { assertSeries } from "@/lib/survival";
import { ChartFrame } from "./ChartFrame";
import { SurvivalLegend } from "./SurvivalLegend";
import { SurvivalPlot } from "./SurvivalPlot";
import { SurvivalTable } from "./SurvivalTable";

type SurvivalChartProps = {
  curve: SurvivalCurve;
  title: string;
  axisX: string;
  axisY: string;
};

export function SurvivalChart({ curve, title, axisX, axisY }: SurvivalChartProps) {
  if (process.env.NODE_ENV !== "production") {
    curve.series.forEach(assertSeries);
  }

  return (
    <ChartFrame title={title} caption={curve.scope}>
      <div className="sm:hidden">
        <SurvivalPlot curve={curve} variant="compact" axisX={axisX} axisY={axisY} />
      </div>
      <div className="hidden sm:block">
        <SurvivalPlot curve={curve} variant="full" axisX={axisX} axisY={axisY} />
      </div>
      <SurvivalLegend series={curve.series} />
      {curve.series.map((series) => (
        <SurvivalTable key={series.cohort} series={series} scope={curve.scope} />
      ))}
    </ChartFrame>
  );
}
