import { PlayCircle, BarChart3, Users2, Clock, CheckCircle2 } from "lucide-react";

export default function YouTubeGrowthPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#7f1d1d]/8 to-white" />
      <div className="container py-16 md:py-24">
        {/* Hero */}
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-3xl font-semibold text-zinc-900">YouTube Growth That Builds Real Channels</h1>
          <p className="mt-2 text-zinc-600">
            Sustainable channel growth comes from content clarity, retention, and discoverability — not shortcuts. We help creators and brands grow audience trust on YouTube through practical structure, consistent publishing, and clear positioning.
          </p>
          <div className="mt-6">
            <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-[#7f1d1d] text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-[#6b1313]">Request Your YouTube Growth Plan</a>
          </div>
        </div>

        {/* Editorial images */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <EditorialImage src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Creator reviewing YouTube Studio analytics" />
          <EditorialImage src="https://images.unsplash.com/photo-1519881511563-63bdc1fd44d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Video planning setup — camera, mic, laptop on clean desk" />
          <EditorialImage src="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Minimal charts and notebooks on a planning desk" />
        </div>

        {/* Why this approach works */}
        <div className="mt-10 grid gap-4">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <h2 className="text-lg font-semibold text-zinc-900">Why Our YouTube Growth Approach Works</h2>
            <p className="mt-2 text-sm text-zinc-700">
              Engage Viewers focuses on fundamentals: channel positioning, clear formats, retention‑driven structure, and discoverability. The aim is predictable momentum built on content quality and audience behavior — not vanity metrics.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <Detail title="Channel positioning & niche clarity" icon={<Users2 className="h-5 w-5" />}>Define your lane and value proposition so viewers understand why your channel exists and who it serves.</Detail>
              <Detail title="Content format strategy" icon={<PlayCircle className="h-5 w-5" />}>Long‑form, shorts, and sequencing mapped to goals. Clear rules for topics, hooks, and series planning.</Detail>
              <Detail title="Retention‑driven scripting" icon={<Clock className="h-5 w-5" />}>Structure episodes to earn attention: early clarity, segment pacing, and payoff that keeps viewers watching.</Detail>
              <Detail title="Thumbnail & title optimization" icon={<BarChart3 className="h-5 w-5" />}>Simple frameworks for intent‑based titles and thumbnails that lift CTR without clickbait.</Detail>
              <Detail title="Publishing cadence" icon={<Clock className="h-5 w-5" />}>Cadence aligned with capacity and audience expectations. Consistency over frequency, measured by retention and reach quality.</Detail>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mt-10 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
          <h2 className="text-lg font-semibold text-zinc-900">Our YouTube Growth Process</h2>
          <ol className="mt-4 grid gap-3 md:grid-cols-4">
            <Step index={1} title="Channel audit & content review" description="Assess positioning, video history, retention patterns, and search/discoverability baselines." />
            <Step index={2} title="Audience & topic mapping" description="Identify topics, angles, and series opportunities aligned with viewer intent and watch behavior." />
            <Step index={3} title="Structure & optimization plan" description="Outline formats, scripting cues, title/thumbnail rules, and cadence." />
            <Step index={4} title="Performance tracking & iteration" description="Set signals to watch, build lightweight dashboards, and adjust based on retention/CTR." />
          </ol>
        </div>

        {/* Pricing */}
        <div className="mt-10 grid gap-4">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <h2 className="text-lg font-semibold text-zinc-900">Starter YouTube Growth Plan — from $100</h2>
            <p className="mt-2 text-sm text-zinc-700">A strategic foundation to set direction and momentum — not a cheap shortcut.</p>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-zinc-900">What you'll receive</h3>
                <ul className="mt-2 grid gap-2 text-sm text-zinc-700">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Channel & content audit</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Topic & format recommendations</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Retention & structure guidance</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Publishing & optimization roadmap</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-900">Ongoing growth support</h3>
                <p className="mt-2 text-sm text-zinc-700">Available with custom pricing based on scope — focused on measurable signals, not promises.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fit */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <h2 className="text-lg font-semibold text-zinc-900">Who This Is For</h2>
            <ul className="mt-2 grid gap-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Creators, founders, and brands focused on real audience growth.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Teams prioritizing retention, discoverability, and consistent publishing.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Channels ready to invest in content quality over short‑term metrics.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <h2 className="text-lg font-semibold text-zinc-900">Who This Is Not For</h2>
            <ul className="mt-2 grid gap-2 text-sm text-zinc-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Requests for instant views, fake subscribers, or algorithm manipulation.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> Services promising guaranteed outcomes.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-zinc-800" /> One‑off fixes without a content plan.</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-zinc-200 bg-gradient-to-r from-[#7f1d1d]/5 to-white p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">Request Your YouTube Growth Plan</h2>
              <p className="mt-2 text-sm text-zinc-700">We'll review your channel and outline a clear, retention‑focused path to sustainable growth.</p>
            </div>
            <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-[#7f1d1d] text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-[#6b1313]">Get Your Plan</a>
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

function Detail({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
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

function Step({ index, title, description }: { index: number; title: string; description: string }) {
  return (
    <li className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#7f1d1d] text-white text-sm font-medium">{index}</span>
        <div>
          <p className="text-sm font-semibold text-zinc-900">{title}</p>
          <p className="text-xs text-zinc-700">{description}</p>
        </div>
      </div>
    </li>
  );
}
