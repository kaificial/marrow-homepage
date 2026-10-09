import Link from "next/link";
import { nav } from "@/content/copy";
import { Wordmark } from "@/components/brand/Wordmark";
import { GithubGlyph } from "@/components/brand/GithubGlyph";
import { ThemeToggle } from "./ThemeToggle";

const primary = nav.links.filter((link) => !("external" in link && link.external));
const external = nav.links.filter((link) => "external" in link && link.external);

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg" data-theme-box="">
      <div className="flex h-16 items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-5 sm:gap-9">
          <Wordmark compact />
          <nav aria-label="Primary">
            <ul className="flex items-center gap-4 sm:gap-6">
              {primary.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.8125rem] text-muted transition-colors hover:text-ink sm:text-[0.875rem]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          {external.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 border border-line px-2 py-1.5 text-[0.8125rem] text-muted transition-colors hover:border-line-strong hover:text-ink sm:px-3"
            >
              <GithubGlyph />
              <span className="hidden sm:inline">{link.label}</span>
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
