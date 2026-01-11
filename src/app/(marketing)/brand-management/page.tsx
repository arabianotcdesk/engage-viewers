import { Users2, ShieldCheck, ClipboardCheck, Megaphone, CalendarCheck2, BarChart3, CheckCircle2 } from "lucide-react";

export default function InfluencerManagementPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0f172a]/8 to-white" />
      <div className="container py-16 md:py-24">
        {/* Hero */}
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-3xl font-semibold text-zinc-900">Influencer Management Built on Trust and Alignment</h1>
          <p className="mt-2 text-zinc-600">Successful influencer programs come from fit, consistency, and relationship management — not reach alone. Engage Viewers helps brands grow measurable influence through creator alignment, clear direction, and steady collaboration.</p>
        </div>

        {/* Editorial images */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <EditorialImage src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Brand and creator collaboration meeting in New York" />
          <EditorialImage src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Influencer content planning workspace with laptops and notebooks" />
          <EditorialImage src="https://images.unsplash.com/photo-1553484771-5f46f34d0c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Clean social media analytics and campaign overview" />
        </div>

        {/* Our approach */}
        <div className="mt-10 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
          <h2 className="text-lg font-semibold text-zinc-900">Our Approach to Influencer Management</h2>
          <p className="mt-2 text-sm text-zinc-700">We manage programs around alignment and clarity. Creators are selected for fit and audience relevance, content direction respects authenticity, and communication removes friction. The goal is long‑term influence, not one‑off posts.</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Approach title="Creator‑brand alignment" icon={<Users2 className="h-5 w-5" />}>
              Positioning and audience fit come first. We identify creators whose values and content naturally support your brand’s outcomes — not just follower counts.
            </Approach>
            <Approach title="Vetting beyond surface metrics" icon={<ShieldCheck className="h-5 w-5" />}>
              Signals, engagement quality, and content history are reviewed alongside reach. We look for trustworthy influence, not inflated numbers.
            </Approach>
            <Approach title="Content direction with authenticity" icon={<Megaphone className="h-5 w-5" />}>
              We provide direction and guardrails without over‑engineering output. Creators sound like themselves while delivering brand clarity.
            </Approach>
            <Approach title="Campaign structure & communication" icon={<ClipboardCheck className="h-5 w-5" />}>
              Clear timelines, deliverables, and review points reduce ambiguity and protect brand safety.
            </Approach>
            <Approach title="Long‑term relationships" icon={<CalendarCheck2 className="h-5 w-5" />}>
              We prioritize durable collaborations over one‑off posts and build predictable influence over time.
            </Approach>
          </div>
        </div>

        {/* What we manage */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Manage title="Influencer sourcing & outreach">Curate shortlists based on audience fit, signal quality, and brand alignment. Outreach is respectful, clear, and relationship‑oriented.</Manage>
          <Manage title="Partnership coordination">Coordinate timelines, briefs, compensation, and logistics — with transparent communication and expectations.</Manage>
          <Manage title="Content guidelines & approval flow">Guidelines that protect brand clarity while preserving creator voice. Structured checkpoints keep reviews efficient.</Manage>
          <Manage title="Timeline & deliverable tracking">Lightweight trackers to keep assets, deadlines, and changes organized and visible.</Manage>
          <Manage title="Performance review & optimization">Measure campaign signals beyond vanity metrics. Adjust creators, topics, and pacing based on outcomes.</Manage>
          <Manage title="Brand safety & compliance">Review content for claims, usage, and platform policies. Clear agreements and documentation reduce risk.</Manage>
        </div>

        {/* Process */}
        <div className="mt-10 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
          <h2 className="text-lg font-semibold text-zinc-900">Influencer Management Process</h2>
          <ol className="mt-4 grid gap-3 md:grid-cols-4">
            <Step index={1} title="Brand goals & audience review" description="Clarify outcomes, audience, and positioning requirements." />
            <Step index={2} title="Shortlisting & suitability check" description="Evaluate creators across relevance, signals, and brand safety." />
            <Step index={3} title="Campaign structure & expectations" description="Define deliverables, timelines, and content direction." />
            <Step index={4} title="Execution oversight & reporting" description="Support creators, track deliverables, and review performance for iteration." />
          </ol>
        </div>

        {/* Plans */}
        <div className="mt-10 grid gap-4">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <h2 className="text-lg font-semibold text-zinc-900">Starter Influencer Strategy & Setup — from $100</h2>
            <p className="mt-2 text-sm text-zinc-700">A strategic entry plan — designed to establish fit, structure, and direction. It’s not a low‑cost service; it’s a foundation.</p>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-zinc-900">What’s included</h3>
                <ul className="mt-2 grid gap-2 text-sm text-zinc-700">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Brand‑influencer alignment assessment</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Influencer selection criteria</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Campaign framework & content direction</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Outreach & management roadmap</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-900">Ongoing management</h3>
                <p className="mt-2 text-sm text-zinc-700">Available with custom pricing based on scale. Execution covers creator support, deliverable tracking, and performance optimization.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fit */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <h2 className="text-lg font-semibold text-zinc-900">Who This Is For</h2>
            <ul className="mt-2 grid gap-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Brands seeking credibility, consistency, and long‑term influence.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Teams valuing organized, transparent campaigns and brand safety.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Programs looking to build durable creator relationships.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <h2 className="text-lg font-semibold text-zinc-900">Who This Is Not For</h2>
            <ul className="mt-2 grid gap-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Fake engagement, forced promotions, or marketplace‑style transactions.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Programs seeking instant results or guaranteed outcomes.</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-zinc-200 bg-gradient-to-r from-[#0f172a]/5 to-white p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">Request Your Influencer Management Plan</h2>
              <p className="mt-2 text-sm text-zinc-700">We’ll review goals, map creator fit, and outline a clear, brand‑safe path to measurable influence.</p>
            </div>
            <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-black text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-[#0a0a0a]">Get Your Plan</a>
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

function Approach({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
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

function Manage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <h3 className="text-sm font-semibold text-zinc-900">{title}</h3>
      <p className="mt-1 text-sm text-zinc-700">{children}</p>
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
