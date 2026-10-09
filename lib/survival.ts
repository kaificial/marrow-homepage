import type { SurvivalPoint, SurvivalSeries } from "@/content/sample-data";

export type Box = {
  width: number;
  height: number;
  padTop: number;
  padRight: number;
  padBottom: number;
  padLeft: number;
};

export type Scales = {
  x: (t: number) => number;
  y: (s: number) => number;
  plotLeft: number;
  plotRight: number;
  plotTop: number;
  plotBottom: number;
};

export function createScales(box: Box, maxDays: number): Scales {
  const plotLeft = box.padLeft;
  const plotRight = box.width - box.padRight;
  const plotTop = box.padTop;
  const plotBottom = box.height - box.padBottom;
  const plotWidth = plotRight - plotLeft;
  const plotHeight = plotBottom - plotTop;

  return {
    x: (t) => plotLeft + (t / maxDays) * plotWidth,
    y: (s) => plotTop + (1 - s) * plotHeight,
    plotLeft,
    plotRight,
    plotTop,
    plotBottom,
  };
}

/**
 * Kaplan-Meier estimates are step functions. Drawing them as a smooth line
 * would misstate the estimator, so each interval is held flat and the drop
 * happens at the event time.
 */
export function stepPath(points: readonly SurvivalPoint[], scales: Scales): string {
  const first = points[0];
  if (!first) return "";

  let d = `M ${scales.x(first.t)} ${scales.y(first.s)}`;
  let previous = first;

  for (let i = 1; i < points.length; i += 1) {
    const point = points[i];
    if (!point) continue;
    d += ` L ${scales.x(point.t)} ${scales.y(previous.s)}`;
    d += ` L ${scales.x(point.t)} ${scales.y(point.s)}`;
    previous = point;
  }

  return d;
}

/** The step path closed down to the axis, used for the faint fill under a curve. */
export function stepAreaPath(points: readonly SurvivalPoint[], scales: Scales): string {
  const line = stepPath(points, scales);
  if (!line) return "";

  const first = points[0];
  const last = points[points.length - 1];
  if (!first || !last) return "";

  return `${line} L ${scales.x(last.t)} ${scales.plotBottom} L ${scales.x(first.t)} ${scales.plotBottom} Z`;
}

export function assertSeries(series: SurvivalSeries): void {
  const { points, label, halfLifeDays } = series;
  const first = points[0];

  if (!first || first.t !== 0 || first.s !== 1) {
    throw new Error(`${label}: survival series must begin at t 0 with s 1.`);
  }

  for (let i = 1; i < points.length; i += 1) {
    const point = points[i];
    const previous = points[i - 1];
    if (!point || !previous) continue;
    if (point.t <= previous.t) {
      throw new Error(`${label}: t must strictly increase at index ${i}.`);
    }
    if (point.s > previous.s) {
      throw new Error(`${label}: survival must not increase at t ${point.t}.`);
    }
    if (point.atRisk > previous.atRisk) {
      throw new Error(`${label}: lines at risk must not increase at t ${point.t}.`);
    }
  }

  const crossing = points.find((point) => point.s <= 0.5);
  const observed = crossing ? crossing.t : null;
  if (observed !== halfLifeDays) {
    throw new Error(
      `${label}: halfLifeDays is ${String(halfLifeDays)} but the curve crosses 0.5 at ${String(observed)}.`,
    );
  }
}
