import { CheckCircle2, Target, MessageSquare, BarChart3, CalendarCheck2, NotebookPen } from "lucide-react";

export default function TwitterGrowthPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1e38]/8 to-white" />
      <div className="container py-16 md:py-24">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-3xl font-semibold text-zinc-900">Twitter Growth for Credibility and Engagement</h1>
          <p className="mt-2 text-zinc-600">
            Our approach to X is content-first and credibility-led. We focus on long‑term awareness, trust, and relevance — not quick wins or follower selling — so your brand becomes part of the conversation that matters.
          </p>
          <div className="mt-6">
            <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-[#0b1e38] text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-[#0a1a2f]">
              Get Your Twitter Growth Plan
            </a>
          </div>
        </div>

        {/* Editorial images (minimal) */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <EditorialImage
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Professional reviewing Twitter dashboard with analytics"
          />
          <EditorialImage
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="New York storefront — modern local retail"
          />
          <EditorialImage
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Planning desk with clean charts and notebooks"
          />
        </div>

        {/* Why different */}
        <div className="mt-10 grid gap-4">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <h2 className="text-lg font-semibold text-zinc-900">Why This Is Different</h2>
            <p className="mt-2 text-sm text-zinc-700">
              Most "growth" services push automation or vanity metrics. Engage Viewers builds durable visibility on X through positioning, content, conversation, and consistent pacing — the foundation of organic Twitter growth.
            </p>
            <ul className="mt-4 grid gap-2">
              <li className="flex items-start gap-2 text-sm text-zinc-700"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Strategy, not scripts — tailored to your brand and audience.</li>
              <li className="flex items-start gap-2 text-sm text-zinc-700"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Content and conversation that build relevance over time.</li>
              <li className="flex items-start gap-2 text-sm text-zinc-700"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Analytics‑informed pacing for trustworthy, natural signals.</li>
            </ul>
          </div>
        </div>

        {/* Detailed breakdown */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card title="Profile positioning & bio clarity" icon={<Target className="h-5 w-5" />}>
            Clear brand line, value proposition, and category keywords. Profile elements (bio, header, link) aligned to your Twitter growth strategy and intended audience.
          </Card>
          <Card title="Content themes & posting structure" icon={<NotebookPen className="h-5 w-5" />}>
            A practical Twitter content plan with 2–4 themes mapped to goals. Post formats, prompts, and cadence designed for organic Twitter growth and brand visibility.
          </Card>
          <Card title="Conversation‑based engagement" icon={<MessageSquare className="h-5 w-5" />}>
            Replies and threads that contribute meaningfully. We prioritize signal‑building conversations over shallow likes — aiming for relevance, not volume.
          </Card>
          <Card title="Analytics‑informed pacing" icon={<BarChart3 className="h-5 w-5" />}>
            Lightweight dashboards and checkpoints. Pacing decisions are guided by post‑level signals, reach quality, and consistency — not arbitrary growth targets.
          </Card>
        </div>

        {/* Process */}
        <div className="mt-10 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
          <h2 className="text-lg font-semibold text-zinc-900">How We Build Sustainable X Engagement Growth</h2>
          <ol className="mt-4 grid gap-3 md:grid-cols-4">
            <Step index={1} title="Account review" description="Assess profile, history, baseline signals, and category context." />
            <Step index={2} title="Strategy map" description="Define positioning, themes, cadence, and conversation lanes." />
            <Step index={3} title="Execution plan" description="Create a week‑by‑week content + engagement schedule." />
            <Step index={4} title="Measure & iterate" description="Track signals, adjust pacing, and refine opportunities." />
          </ol>
        </div>

        {/* Pricing */}
        <div className="mt-10 grid gap-4">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <h2 className="text-lg font-semibold text-zinc-900">Starter Twitter Growth Plan — from $100</h2>
            <p className="mt-2 text-sm text-zinc-700">
              The starter plan is a strategic entry point — not a low‑cost shortcut. It's designed to clarify direction and set a durable, credibility‑oriented path.
            </p>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-zinc-900">What's included</h3>
                <ul className="mt-2 grid gap-2 text-sm text-zinc-700">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> 1:1 strategy session (30–45 minutes)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Positioning & bio clarity recommendations</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Content roadmap (themes, formats, cadence)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Engagement guidance (conversation lanes)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Pacing & measurement checklist</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-900">Ongoing growth</h3>
                <p className="mt-2 text-sm text-zinc-700">All ongoing plans are custom and scope‑based. We align effort with outcomes and revisit strategy regularly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Who this is for */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <h2 className="text-lg font-semibold text-zinc-900">Who This Is For</h2>
            <ul className="mt-2 grid gap-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Brands seeking a Twitter growth strategy grounded in content quality and relevance.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Teams valuing transparency, measured pacing, and analytics‑informed iteration.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Founders aiming to build organic Twitter growth and credible brand visibility.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <h2 className="text-lg font-semibold text-zinc-900">Who This Is Not For</h2>
            <ul className="mt-2 grid gap-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Follower selling, mass automation, or promise‑based services.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Short‑term metric chasing without brand alignment.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Requests for guaranteed or instant outcomes.</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-zinc-200 bg-gradient-to-r from-[#0b1e38]/5 to-white p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">Request a Calm, Strategic Twitter Growth Plan</h2>
              <p className="mt-2 text-sm text-zinc-700">We'll review your account and outline a credibility‑driven path for sustainable X engagement growth.</p>
            </div>
            <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-[#0b1e38] text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-[#0a1a2f]">
              Get Your Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function EditorialImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="rounded-xl overflow-hidden border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
      <img src={src} alt={alt} className="h-40 w-full object-cover" />
    </figure>
  );
}

function Card({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-zinc-800">{icon}</span>
        <div>
          <h3 className="text-sm font-semibold text-zinc-900">{title}</h3>
          <p className="mt-1 text-sm text-zinc-700">{children}</p>
        </div>
      </div>
    </div>
  );
}

function Step({ index, title, description }: { index: number; title: string; description: string }) {
  return (
    <li className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white text-sm font-medium">{index}</span>
        <div>
          <p className="text-sm font-semibold text-zinc-900">{title}</p>
          <p className="text-xs text-zinc-700">{description}</p>
        </div>
      </div>
    </li>
  );
}
