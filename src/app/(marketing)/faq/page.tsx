const faqs = [
  {
    q: "Is this suitable for small businesses and large brands?",
    a: "Yes. We tailor strategies to your goals, industry, and risk profile. Smaller teams get lightweight plans; larger brands receive structured, multi-channel programs.",
  },
  {
    q: "How long does it take to see improvement?",
    a: "Timelines vary by platform and baseline visibility. Many clients notice early signs in a few weeks, with stronger, compounding results over months.",
  },
  {
    q: "Is the process safe for my accounts and listings?",
    a: "We use policy-aware methods and maintain conservative pacing. We do not request sensitive credentials and we align recommendations with platform guidelines.",
  },
  { q: "Do you offer custom plans?", a: "Yes. Every plan is built around your brand position, goals, budget, and timeline — with clear milestones and ongoing review." },
  { q: "Can I speak with a real person before starting?", a: "Absolutely. We’ll discuss your goals and walk through options before any commitment." },
];

export default function FAQPage() {
  return (
    <section className="container py-16 md:py-24">
      <div className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-semibold text-zinc-900">Frequently Asked Questions</h1>
        <div className="mt-8 grid gap-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-zinc-900">{f.q}</p>
              <p className="mt-2 text-sm text-zinc-600">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
