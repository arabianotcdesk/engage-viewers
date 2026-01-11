import Link from "next/link";
import { cn } from "@/lib/utils";
import LogoMark from "@/components/logo-mark";

const nav = [
  { href: "/", label: "Home" },
  { href: "/google-reviews-growth", label: "Google Reviews Growth" },
  { href: "/twitter-growth", label: "Twitter Growth" },
  { href: "/youtube-growth", label: "YouTube Growth" },
  { href: "/brand-management", label: "Influencer Management" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2">
            <LogoMark className="h-7 w-7" />
            <span className="text-sm font-semibold tracking-tight text-zinc-900">Engage Viewers</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm text-zinc-700 hover:text-zinc-900 smooth-transition",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/20"
          >
            Get Free Growth Plan
          </Link>
        </div>
      </div>
    </header>
  );
}
