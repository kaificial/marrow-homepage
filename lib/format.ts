const compact = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

const plain = new Intl.NumberFormat("en-US");

export function formatLineCount(lines: number): string {
  return lines >= 1_000_000 ? compact.format(lines) : plain.format(lines);
}

export function formatDays(days: number | null): string {
  if (days === null) return "not reached";
  return `${plain.format(days)} ${days === 1 ? "day" : "days"}`;
}

export function formatSurvival(survival: number): string {
  const percent = (survival * 100).toFixed(1).replace(/\.0$/, "");
  return `${percent}%`;
}
