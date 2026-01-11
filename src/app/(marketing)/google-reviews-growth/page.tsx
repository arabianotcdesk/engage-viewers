export default function GoogleReviewsGrowthPage() {
  return (
    <section className="container py-16 md:py-24">
      <div className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-semibold text-zinc-900">Google Reviews Growth</h1>
        <p className="mt-2 text-zinc-600">Increase local visibility and customer trust with review strategies that respect platform policies and reflect real experiences.</p>
        <div className="mt-8 grid gap-4">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-zinc-900">What we focus on</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-600">
              <li>Review generation programs aligned with local guidelines</li>
              <li>Customer journey prompts that encourage authentic feedback</li>
              <li>Profile optimization to improve discovery and trust</li>
              <li>Measured pacing and monitoring of rating trends</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-zinc-900">Getting started</p>
            <p className="mt-2 text-sm text-zinc-600">We’ll review your current listings, brand context, and policies, then propose a phased approach with clear milestones.</p>
            <a href="/contact" className="mt-4 inline-flex items-center justify-center rounded-lg bg-zinc-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-zinc-800">Request your plan</a>
          </div>
        </div>
      </div>
    </section>
  );
}
