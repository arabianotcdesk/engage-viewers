import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-100 bg-white">
      <div className="container py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-zinc-900">Engage Viewers</p>
            <p className="text-xs text-zinc-500">New York, USA</p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-600">
            <Link href="/google-reviews-growth" className="hover:text-zinc-900">Google Reviews Growth</Link>
            <Link href="/twitter-growth" className="hover:text-zinc-900">Twitter Growth</Link>
            <Link href="/youtube-growth" className="hover:text-zinc-900">YouTube Growth</Link>
            <Link href="/brand-management" className="hover:text-zinc-900">Brand Management</Link>
            <Link href="/faq" className="hover:text-zinc-900">FAQ</Link>
            <Link href="/contact" className="hover:text-zinc-900">Contact</Link>
          </nav>
        </div>
        <div className="mt-6 text-xs text-zinc-500">
          <p>
            We focus on transparent, policy-aware growth strategies. No promises of instant results.
          </p>
        </div>
      </div>
    </footer>
  );
}
