import { scrollHint } from "@/content/copy";
import { Bracket } from "@/components/ui/Bracket";
import { Gutter } from "@/components/ui/Gutter";

/** The band between the hero and the argument. Marks the transition, nothing else. */
export function ScrollBand() {
  return (
    <div className="border-y border-line" data-theme-box="">
      <Gutter>
        <div className="flex items-center gap-4 py-4">
          <span aria-hidden="true" className="flex gap-2 text-muted">
            <span>&darr;</span>
            <span className="opacity-60">&darr;</span>
            <span className="opacity-30">&darr;</span>
          </span>
          <Bracket tone="muted">{scrollHint}</Bracket>
        </div>
      </Gutter>
    </div>
  );
}
