export default function ContactPage() {
  return (
    <section className="container py-16 md:py-24">
      <div className="max-w-2xl">
        <h1 className="text-2xl md:text-3xl font-semibold text-zinc-900">Start Your Free Growth Plan</h1>
        <p className="mt-2 text-zinc-600">Tell us about your brand and goals. A specialist will follow up within one business day.</p>
        <form className="mt-8 grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-zinc-800">Full name</label>
            <input id="name" name="name" className="h-10 rounded-lg border border-zinc-300 bg-white px-3 text-sm outline-none ring-0 focus:border-zinc-400" placeholder="Jane Doe" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-800">Work email</label>
            <input id="email" name="email" type="email" className="h-10 rounded-lg border border-zinc-300 bg-white px-3 text-sm outline-none ring-0 focus:border-zinc-400" placeholder="jane@company.com" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="company" className="text-sm font-medium text-zinc-800">Company</label>
            <input id="company" name="company" className="h-10 rounded-lg border border-zinc-300 bg-white px-3 text-sm outline-none ring-0 focus:border-zinc-400" placeholder="Company Inc." />
          </div>
          <div className="grid gap-2">
            <label htmlFor="goals" className="text-sm font-medium text-zinc-800">What would you like to improve?</label>
            <textarea id="goals" name="goals" rows={5} className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-zinc-400" placeholder="Share context, platforms, timelines, and any constraints."></textarea>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs text-zinc-500">By submitting, you agree to be contacted about your request. No spam.</p>
            <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-zinc-900 text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-zinc-800">Request Plan</button>
          </div>
        </form>
      </div>
    </section>
  );
}
