import type { SurvivalCurve } from "@/content/sample-data";
import { createScales, stepPath, type Box } from "@/lib/survival";

type Variant = "compact" | "full";

type VariantConfig = {
  box: Box;
  xTicks: number[];
  fontSize: number;
  axisFontSize: number;
  strokeWidth: number;
};

/**
 * Two variants rather than one scaled SVG. A single viewBox would shrink the
 * tick labels below legible size on a 320px viewport.
 */
const VARIANTS: Record<Variant, VariantConfig> = {
  compact: {
    box: { width: 340, height: 252, padTop: 12, padRight: 10, padLeft: 42, padBottom: 42 },
    xTicks: [0, 50, 100, 150],
    fontSize: 11,
    axisFontSize: 10,
    strokeWidth: 1.8,
  },
  full: {
    box: { width: 720, height: 400, padTop: 16, padRight: 16, padLeft: 58, padBottom: 52 },
    xTicks: [0, 30, 60, 90, 120, 150],
    fontSize: 12,
    axisFontSize: 11,
    strokeWidth: 2.1,
  },
};

const Y_TICKS = [0, 0.25, 0.5, 0.75, 1];

function formatYTick(value: number): string {
  if (value === 1) return "1.0";
  if (value === 0) return "0";
  return value.toFixed(2).slice(1);
}

type SurvivalPlotProps = {
  curve: SurvivalCurve;
  variant: Variant;
  axisX: string;
  axisY: string;
};

export function SurvivalPlot({ curve, variant, axisX, axisY }: SurvivalPlotProps) {
  const config = VARIANTS[variant];
  const scales = createScales(config.box, curve.maxDays);
  const midY = (scales.plotTop + scales.plotBottom) / 2;

  return (
    <svg
      viewBox={`0 0 ${config.box.width} ${config.box.height}`}
      className="block h-auto w-full"
      aria-hidden="true"
      focusable="false"
    >
      <g fontFamily="var(--font-mono)" fill="var(--text-muted)">
        <g fontSize={config.fontSize}>
          {Y_TICKS.map((value) => {
            const y = scales.y(value);
            const isMedian = value === 0.5;
            return (
              <g key={value}>
                <line
                  x1={scales.plotLeft}
                  x2={scales.plotRight}
                  y1={y}
                  y2={y}
                  stroke={isMedian ? "var(--border-strong)" : "var(--border)"}
                  strokeWidth="1"
                  strokeDasharray={isMedian ? "3 3" : undefined}
                />
                <text x={scales.plotLeft - 8} y={y} textAnchor="end" dominantBaseline="middle">
                  {formatYTick(value)}
                </text>
              </g>
            );
          })}

          {config.xTicks.map((day) => (
            <text
              key={day}
              x={scales.x(day)}
              y={scales.plotBottom + config.fontSize + 8}
              textAnchor={day === 0 ? "start" : day === curve.maxDays ? "end" : "middle"}
            >
              {day}
            </text>
          ))}
        </g>

        <g fontSize={config.axisFontSize}>
          <text x={scales.plotRight} y={config.box.height - 5} textAnchor="end">
            {axisX}
          </text>
          <text
            x={0}
            y={0}
            textAnchor="middle"
            transform={`translate(${config.axisFontSize + 1} ${midY}) rotate(-90)`}
          >
            {axisY}
          </text>
        </g>
      </g>

      {curve.series.map((series, index) => {
        const crossing = series.points.find((point) => point.s <= 0.5);
        return (
          <g key={series.cohort}>
            <path
              d={stepPath(series.points, scales)}
              pathLength={1}
              fill="none"
              stroke={`var(--series-${series.cohort})`}
              strokeWidth={config.strokeWidth}
              strokeLinejoin="round"
              strokeLinecap="round"
              className={`marrow-curve ${index > 0 ? "marrow-curve--delayed" : ""}`}
            />
            {crossing && (
              <g className="marrow-marker">
                <line
                  x1={scales.x(crossing.t)}
                  x2={scales.x(crossing.t)}
                  y1={scales.y(0.5)}
                  y2={scales.plotBottom}
                  stroke={`var(--series-${series.cohort})`}
                  strokeWidth="1"
                  strokeDasharray="2 3"
                  opacity="0.5"
                />
                <circle
                  cx={scales.x(crossing.t)}
                  cy={scales.y(0.5)}
                  r={config.strokeWidth + 1.4}
                  fill="var(--surface)"
                  stroke={`var(--series-${series.cohort})`}
                  strokeWidth={config.strokeWidth}
                />
              </g>
            )}
          </g>
        );
      })}

      <line
        x1={scales.plotLeft}
        x2={scales.plotLeft}
        y1={scales.plotTop}
        y2={scales.plotBottom}
        stroke="var(--border-strong)"
        strokeWidth="1"
      />
    </svg>
  );
}
