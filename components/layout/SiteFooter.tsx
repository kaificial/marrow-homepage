import Link from "next/link";
import { AUTHOR_NAME, AUTHOR_URL, footer } from "@/content/copy";
import { Wordmark } from "@/components/brand/Wordmark";
import { Gutter } from "@/components/ui/Gutter";

export function SiteFooter() {
  return (
    <footer className="border-t border-line" data-theme-box="">
      <Gutter className="py-12 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Wordmark />
            <p className="mt-3 max-w-xs text-[0.875rem] leading-relaxed text-muted">
              {footer.tagline}
            </p>
          </div>
          {footer.groups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                {group.title}
              </p>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="text-[0.875rem] text-ink transition-colors hover:text-brand-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Gutter>
      <div className="border-t border-dashed border-line">
        <Gutter className="py-4">
          <p className="text-[0.8125rem] text-muted">
            {footer.authorPrefix}{" "}
            <a
              href={AUTHOR_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="text-ink underline-offset-4 hover:underline"
            >
              {AUTHOR_NAME}
            </a>
          </p>
        </Gutter>
      </div>
    </footer>
  );
}
