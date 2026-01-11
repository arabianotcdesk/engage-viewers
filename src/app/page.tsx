import Script from "next/script";
import { cn } from "@/lib/utils";
import type { SVGProps, ComponentType } from "react";
import {
  Star,
  ShieldCheck,
  MapPin,
  Globe2,
  MessageSquare,
  TrendingUp,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import ReviewMarquee from "@/components/review-marquee";

const ORIGIN = "https://engage-viewers.example";

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "#engage-viewers",
      name: "Engage Viewers",
      url: ORIGIN,
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "NY",
        addressCountry: "US",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Engage Viewers",
      url: ORIGIN,
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "AggregateRating",
      itemReviewed: {
        "@id": "#engage-viewers",
      },
      ratingValue: 5.0,
      reviewCount: 127,
    },
  ];

  return (
    <>
      <Script id="ld-json" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(jsonLd)}
      </Script>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/60 to-transparent" />
        <div className="container py-16 md:py-24 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900">
              A New York Social Media Agency Built for Real Online Growth
            </h1>
            <p className="mt-4 text-base md:text-lg text-zinc-700">
              Engage Viewers is a New York–based social media agency helping businesses grow visibility, trust, and engagement across reviews and social platforms — with strategy, transparency, and long-term brand focus.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-700 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-700/20"
              >
                Get Free Growth Plan
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-indigo-200 bg-white text-indigo-900 px-5 py-3 text-sm font-medium shadow-sm hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600/10"
              >
                Our Services
              </a>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-zinc-700">
              <TrustPill Icon={MapPin} text="New York–based agency" />
              <TrustPill Icon={ShieldCheck} text="Privacy-focused approach" />
              <TrustPill Icon={Globe2} text="Trusted by businesses worldwide" />
            </div>
          </div>
          <div>
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Trust Images Section */}
      <section className="border-t border-indigo-100">
        <div className="container py-10 md:py-14">
          <h2 className="text-lg md:text-xl font-semibold text-zinc-900">Trusted by Businesses That Care About Reputation</h2>
          <p className="mt-2 text-sm text-zinc-600">Businesses across industries trust Engage Viewers for thoughtful, reputation-safe social media growth built for long-term credibility.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <figure className="group rounded-xl overflow-hidden border border-zinc-200 shadow-sm">
              <BrandImage
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80"
                alt="Analytics review in modern office — laptops with charts"
              />
            </figure>
            <figure className="group rounded-xl overflow-hidden border border-zinc-200 shadow-sm">
              <BrandImage
                src="https://images.pexels.com/photos/5414002/pexels-photo-5414002.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80"
                alt="Local flower shop owner — reputable neighborhood business"
                badgeText="5.0 rating"
              />
            </figure>
            <figure className="group rounded-xl overflow-hidden border border-zinc-200 shadow-sm">
              <BrandImage
                src="https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80"
                alt="Client strategy discussion — team reviewing tablet together"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="container py-14 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold text-zinc-900">Core Services</h2>
            <p className="mt-2 text-zinc-600">Strategy-led programs focused on credibility, engagement, and sustainable visibility.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <ServiceCard
              Icon={MessageSquare}
              color="indigo"
              title="Google Reviews Growth"
              description="Improve local presence, customer trust, and visibility signals."
              href="/google-reviews-growth"
            />
            <ServiceCard
              Icon={TrendingUp}
              color="emerald"
              title="Twitter Growth"
              description="Strengthen profile credibility, engagement, and brand awareness."
              href="/twitter-growth"
            />
            <ServiceCard
              Icon={BarChart3}
              color="cyan"
              title="YouTube Growth"
              description="Build channel authority, discoverability, and audience confidence."
              href="/youtube-growth"
            />
          </div>
        </div>
      </section>

      {/* Growth Snapshot */}
      <section className="border-t border-zinc-100">
        <div className="container py-14 md:py-20 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-zinc-900">How Growth Looks Over Time</h2>
            <p className="mt-3 text-zinc-600">Consistent, strategic improvement. Clear pacing, careful signals, and thoughtful iteration — without risky shortcuts.</p>
            <ul className="mt-6 grid gap-3">
              <Bullet text="Visibility improvement" />
              <Bullet text="Engagement momentum" />
              <Bullet text="Brand trust signals" />
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <VisualCard label="Visibility Trend">
              <LineVisual />
            </VisualCard>
            <VisualCard label="Engagement Growth">
              <BarVisual />
            </VisualCard>
            <VisualCard className="sm:col-span-2" label="Brand Trust Signals">
              <RingVisual />
            </VisualCard>
          </div>
        </div>
      </section>

      {/* Client Feedback Highlights (marquee) */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="container py-14 md:py-20">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-7 w-7 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
                <div>
                  <p className="text-base font-semibold text-zinc-900">Client Feedback Highlights</p>
                  <p className="text-xs text-zinc-600">A few sample notes reflecting what clients value: clarity, pacing, and communication.</p>
                </div>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-700 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-indigo-800"
              >
                Get Free Growth Plan
              </a>
            </div>

            <div className="mt-6">
              <ReviewMarquee />
            </div>
            <p className="mt-4 text-xs text-zinc-500">Note: These are sample excerpts for demonstration. Replace with your verified customer feedback as it’s collected. Individual experiences vary.</p>
          </div>
        </div>
      </section>

      {/* Why Engage Viewers */}
      <section className="border-t border-zinc-100">
        <div className="container py-14 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold text-zinc-900">Why Engage Viewers</h2>
            <p className="mt-2 text-zinc-600">A modern New York agency standard — pragmatic, transparent, and built for durable outcomes.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <WhyCard title="New York–Based Strategy Team" subtitle="Local insight, global perspective" />
            <WhyCard title="Reputation-Safe Growth Methods" subtitle="Policy-aware, measured pacing" />
            <WhyCard title="Transparent Communication" subtitle="Clear updates and expectations" />
            <WhyCard title="Long-Term Brand Value" subtitle="Compounding, sustainable progress" />
          </div>
        </div>
      </section>

      {/* Brand Management */}
      <section className="border-t border-zinc-100 bg-zinc-50/50">
        <div className="container py-14 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold text-zinc-900">Brand Management</h2>
            <p className="mt-2 text-zinc-600">We help shape brand perception, strengthen public trust, and manage visibility across platforms — with methods aligned to platform policies.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-zinc-100">
        <div className="container py-14 md:py-20">
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-900">FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <FaqItem q="Are you a New York–based agency?" a="Yes. Our core team operates from New York, serving clients locally and worldwide." />
            <FaqItem q="Who can work with Engage Viewers?" a="We support small businesses, mid-market teams, and enterprise groups seeking structured, policy-aware growth." />
            <FaqItem q="Is the growth approach safe for platforms?" a="We follow platform guidelines, use conservative pacing, and avoid shortcuts that could risk your accounts." />
            <FaqItem q="How long does improvement usually take?" a="Timelines vary by baseline and channel. Expect early directional signals in weeks and stronger momentum over months." />
            <FaqItem q="Do you offer custom plans?" a="Yes. Every engagement is tailored to your goals, risk tolerance, and timeline — with clear milestones and reviews." />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-indigo-100">
        <div className="container py-16 md:py-24">
          <div className="rounded-2xl bg-gradient-to-r from-indigo-900 to-indigo-700 p-8 md:p-10 shadow-sm">
            <h3 className="text-lg md:text-xl font-semibold text-white">Work With a Social Media Agency Built on Trust</h3>
            <div className="mt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white text-indigo-900 px-5 py-3 text-sm font-medium shadow-sm hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                Get Your Free Growth Plan
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TrustPill({
  Icon,
  text,
}: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-zinc-50 px-3 py-2 border border-zinc-100 shadow-sm">
      <Icon className="h-4 w-4 text-zinc-700" />
      <span>{text}</span>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
      <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-emerald-100" />
      <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-indigo-100" />
      <svg viewBox="0 0 400 240" className="h-56 w-full">
        <defs>
          <linearGradient id="heroGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#c7d2fe" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="240" rx="16" fill="#f8fafc" />
        <polyline
          fill="none"
          stroke="url(#heroGrad)"
          strokeWidth="4"
          points="20,190 80,175 140,160 200,140 260,115 320,95 380,75"
        />
        {/* Neutral platform icons */}
        <g>
          <circle cx="80" cy="70" r="18" fill="#eef2ff" stroke="#c7d2fe" />
          <text x="80" y="74" textAnchor="middle" fontSize="12" fill="#4f46e5">G</text>
          <circle cx="180" cy="55" r="18" fill="#dcfce7" stroke="#86efac" />
          <path d="M170 60 L180 50 L190 60" stroke="#10b981" strokeWidth="2" fill="none" />
          <circle cx="280" cy="85" r="18" fill="#e0f2fe" stroke="#7dd3fc" />
          <polygon points="272,78 292,85 272,92" fill="#0891b2" />
        </g>
      </svg>
    </div>
  );
}

function ServiceCard({
  Icon,
  color = "indigo",
  title,
  description,
  href,
}: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  color?: "indigo" | "emerald" | "cyan";
  title: string;
  description: string;
  href: string;
}) {
  const palette = {
    indigo: { bg: "bg-indigo-50", text: "text-indigo-700" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-700" },
    cyan: { bg: "bg-cyan-50", text: "text-cyan-700" },
  }[color];
  return (
    <div className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-px">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className={cn("inline-flex h-9 w-9 items-center justify-center rounded-lg", palette.bg)}>
            <Icon className={cn("h-5 w-5", palette.text)} />
          </span>
          <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
        </div>
      </div>
      <p className="mt-2 text-sm text-zinc-700">{description}</p>
      <a
        href={href}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-800 hover:underline"
        aria-label={`Learn more about ${title}`}
      >
        Learn More <span aria-hidden>→</span>
      </a>
    </div>
  );
}

function VisualCard({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("rounded-xl border border-zinc-200 bg-white p-5 shadow-sm", className)}>
      <div className="aspect-[4/3] w-full">{children}</div>
      <p className="mt-2 text-xs text-zinc-600">{label}</p>
    </div>
  );
}

function LineVisual() {
  return (
    <svg viewBox="0 0 200 150" className="h-full w-full">
      <defs>
        <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#e5e7eb" />
          <stop offset="100%" stopColor="#a1a1aa" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="200" height="150" rx="12" fill="#fafafa" />
      <polyline
        fill="none"
        stroke="url(#grad)"
        strokeWidth="3"
        points="10,120 40,110 70,100 100,85 130,70 160,55 190,40"
      />
      <circle cx="190" cy="40" r="4" fill="#27272a" />
    </svg>
  );
}

function BarVisual() {
  const bars = [30, 45, 60, 80, 65, 95];
  return (
    <svg viewBox="0 0 200 150" className="h-full w-full">
      <rect x="0" y="0" width="200" height="150" rx="12" fill="#fafafa" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={20 + i * 28}
          y={140 - h}
          width="18"
          height={h}
          rx="4"
          className="fill-zinc-300"
        />
      ))}
    </svg>
  );
}

function RingVisual() {
  const circumference = 2 * Math.PI * 45;
  const progress = 0.82; // illustrative only
  return (
    <svg viewBox="0 0 200 150" className="h-full w-full">
      <rect x="0" y="0" width="200" height="150" rx="12" fill="#fafafa" />
      <g transform="translate(100,75)">
        <circle r="45" fill="none" stroke="#e5e7eb" strokeWidth="10" />
        <circle
          r="45"
          fill="none"
          stroke="#27272a"
          strokeWidth="10"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={(1 - progress) * circumference}
          transform="rotate(-90)"
          strokeLinecap="round"
        />
        <text textAnchor="middle" dy="6" fontSize="14" fill="#27272a">
          82%
        </text>
      </g>
    </svg>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-sm text-zinc-700">
      <CheckCircle2 className="h-4 w-4 text-zinc-800" />
      <span>{text}</span>
    </li>
  );
}

function TestimonialCard({
  imgSrc,
  name,
  meta,
  text,
}: {
  imgSrc: string;
  name: string;
  meta: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-block h-10 w-10 overflow-hidden rounded-full border border-zinc-200">
            <img src={imgSrc} alt={`${name} avatar`} className="h-full w-full object-cover" />
          </span>
          <div>
            <p className="text-sm font-semibold text-zinc-900">{name}</p>
            <p className="text-xs text-zinc-500">{meta}</p>
          </div>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 stroke-amber-400" />
          ))}
        </div>
      </div>
      <p className="mt-3 text-sm text-zinc-700">{text}</p>
    </div>
  );
}

function WhyCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-zinc-100" />
        <div>
          <p className="text-sm font-medium text-zinc-900">{title}</p>
          <p className="text-xs text-zinc-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-zinc-900">{q}</p>
      <p className="mt-2 text-sm text-zinc-600">{a}</p>
    </div>
  );
}

function BrandImage({ src, alt, badgeText }: { src: string; alt: string; badgeText?: string }) {
  return (
    <div className="relative h-40 w-full overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-indigo-900/5 z-0" aria-hidden="true" />
      {badgeText ? (
        <div className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-2 rounded-lg bg-white/90 px-2.5 py-1.5 shadow-sm ring-1 ring-black/5">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber-400 stroke-amber-400" />
            ))}
          </div>
          <span className="text-xs font-medium text-zinc-700">{badgeText}</span>
        </div>
      ) : null}
    </div>
  );
}
