import Link from "next/link";

type ArrowLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export function ArrowLink({ href, label, className = "" }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-brand-ink underline-offset-4 hover:underline ${className}`}
    >
      {label}
      <span
        aria-hidden="true"
        className="transition-transform duration-150 group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </Link>
  );
}
