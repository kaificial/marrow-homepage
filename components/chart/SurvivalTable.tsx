import type { SurvivalSeries } from "@/content/sample-data";
import { formatSurvival } from "@/lib/format";

type SurvivalTableProps = {
  series: SurvivalSeries;
  scope: string;
};

/**
 * Visually hidden, so the curve is not lost to a screen reader. The wrapper
 * carries sr-only because the utility does not clip a table element itself.
 */
export function SurvivalTable({ series, scope }: SurvivalTableProps) {
  return (
    <div className="sr-only">
      <table>
        <caption>
          {series.label} line survival. {scope}.
        </caption>
        <thead>
          <tr>
            <th scope="col">Days since written</th>
            <th scope="col">Surviving</th>
            <th scope="col">Lines at risk</th>
          </tr>
        </thead>
        <tbody>
          {series.points.map((point) => (
            <tr key={point.t}>
              <th scope="row">{point.t}</th>
              <td>{formatSurvival(point.s)}</td>
              <td>{point.atRisk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
