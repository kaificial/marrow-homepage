import { INSTALL_COMMAND, hero } from "@/content/copy";
import { heroCurve } from "@/content/sample-data";
import { SurvivalChart } from "@/components/chart/SurvivalChart";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Bracket } from "@/components/ui/Bracket";
import { CopyCommand } from "@/components/ui/CopyCommand";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="grid lg:grid-cols-2">
      <div
        data-theme-box=""
        className="border-b border-line px-5 py-14 sm:px-8 lg:border-r lg:border-b-0 lg:py-24 lg:pr-14 lg:pl-[var(--rail-content)]"
      >
        <Bracket>{hero.eyebrow}</Bracket>
        <h1 id="hero-heading" className="mt-5 text-display font-semibold text-balance">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-[46ch] text-lede text-muted">{hero.lede}</p>
        <div className="mt-8 max-w-md">
          <CopyCommand command={INSTALL_COMMAND} />
        </div>
        <div className="mt-5">
          <ArrowLink href={hero.secondaryLink.href} label={hero.secondaryLink.label} />
        </div>
      </div>
      <div
        data-theme-box=""
        className="relative px-5 py-10 sm:px-8 lg:py-24 lg:pr-[var(--rail-content)] lg:pl-14"
      >
        <Construction />
        <div className="relative">
          <SurvivalChart
            curve={heroCurve}
            title={hero.chartTitle}
            axisX={hero.axisX}
            axisY={hero.axisY}
          />
        </div>
      </div>
    </section>
  );
}

/** Dashed construction lines behind the chart, in the spirit of a drawing sheet. */
function Construction() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
      <span className="absolute inset-x-0 top-12 border-t border-dashed border-line" />
      <span className="absolute inset-x-0 bottom-12 border-t border-dashed border-line" />
    </span>
  );
}
