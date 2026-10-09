import type { StoredRecord } from "@/content/sample-data";
import { Bracket } from "./Bracket";
import { SampleDataBadge } from "./SampleDataBadge";

type RecordBlockProps = {
  record: StoredRecord;
  caption: string;
  title: string;
};

function renderValue(value: string | number | null) {
  if (value === null) return <span className="text-muted">null</span>;
  if (typeof value === "number") return <span>{value}</span>;
  return <span>&quot;{value}&quot;</span>;
}

export function RecordBlock({ record, caption, title }: RecordBlockProps) {
  const entries = Object.entries(record) as [string, string | number | null][];

  return (
    <figure className="flex h-full flex-col border border-line bg-bg">
      <figcaption className="flex items-center justify-between gap-3 border-b border-dashed border-line px-4 py-2.5">
        <Bracket tone="muted">{title}</Bracket>
        <SampleDataBadge />
      </figcaption>
      <pre className="flex-1 overflow-x-auto px-4 py-4 font-mono text-[0.8125rem] leading-relaxed">
        <code>
          {"{\n"}
          {entries.map(([key, value], index) => (
            <span key={key}>
              {"  "}
              <span className="text-muted">&quot;{key}&quot;</span>: {renderValue(value)}
              {index < entries.length - 1 ? "," : ""}
              {"\n"}
            </span>
          ))}
          {"}"}
        </code>
      </pre>
      <p className="border-t border-dashed border-line px-4 py-3 text-[0.8125rem] leading-relaxed text-muted">
        {caption}
      </p>
    </figure>
  );
}
