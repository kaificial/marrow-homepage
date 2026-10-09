"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { nav } from "@/content/copy";
import {
  playThemeTransition,
  prefersReducedMotion,
  type ThemeTransition,
} from "@/lib/theme-transition";

const STORAGE_KEY = "marrow-theme";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  const attribute = document.documentElement.getAttribute("data-theme");
  if (attribute === "light" || attribute === "dark") return attribute;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const button = useRef<HTMLButtonElement>(null);
  const shift = useRef<ThemeTransition | null>(null);

  useEffect(() => {
    setTheme(currentTheme());
    return () => shift.current?.finish();
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";

    const apply = () => {
      document.documentElement.setAttribute("data-theme", next);
      setTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // A blocked storage API only costs the choice its persistence.
      }
    };

    shift.current?.finish();
    shift.current = null;

    if (prefersReducedMotion()) {
      apply();
      return;
    }

    const rect = button.current?.getBoundingClientRect();
    shift.current = playThemeTransition(
      rect
        ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
        : { x: window.innerWidth, y: 0 },
      apply,
    );
  }, []);

  return (
    <button
      ref={button}
      type="button"
      onClick={toggle}
      aria-label={nav.themeToggleLabel}
      className="flex size-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-sunken hover:text-ink"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        aria-hidden="true"
      >
        {theme === "dark" ? (
          <path d="M13.2 9.6A5.6 5.6 0 0 1 6.4 2.8a5.6 5.6 0 1 0 6.8 6.8Z" />
        ) : (
          <>
            <circle cx="8" cy="8" r="3" />
            <path d="M8 1v1.6M8 13.4V15M15 8h-1.6M2.6 8H1M12.9 3.1l-1.1 1.1M4.2 11.8l-1.1 1.1M12.9 12.9l-1.1-1.1M4.2 4.2 3.1 3.1" />
          </>
        )}
      </svg>
    </button>
  );
}
