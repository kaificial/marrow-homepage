"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { hero } from "@/content/copy";

type CopyCommandProps = {
  command: string;
};

export function CopyCommand({ command }: CopyCommandProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [command]);

  return (
    <div className="flex items-stretch overflow-hidden border border-line bg-surface">
      <code className="flex w-0 flex-1 items-center gap-2 overflow-x-auto px-3.5 py-3 font-mono text-[0.8125rem] leading-none whitespace-nowrap sm:text-[0.875rem]">
        <span aria-hidden="true" className="text-muted select-none">
          $
        </span>
        <span>{command}</span>
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={hero.copyLabel}
        className="flex shrink-0 items-center gap-1.5 border-l border-line px-3.5 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted transition-colors hover:bg-sunken hover:text-ink"
      >
        <CopyGlyph copied={copied} />
        <span className="hidden sm:inline">{copied ? hero.copiedLabel : "Copy"}</span>
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? hero.copiedLabel : ""}
      </span>
    </div>
  );
}

function CopyGlyph({ copied }: { copied: boolean }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {copied ? (
        <path d="M3 8.5 6.2 12 13 4.5" />
      ) : (
        <>
          <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
          <path d="M10.5 3.5A1.5 1.5 0 0 0 9 2H3.5A1.5 1.5 0 0 0 2 3.5V9a1.5 1.5 0 0 0 1.5 1.5" />
        </>
      )}
    </svg>
  );
}
