"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

type Review = {
  name: string;
  meta: string;
  text: string;
  img: string;
};

const reviews: Review[] = [
  {
    name: "Susan J.",
    meta: "Sample client — New York, NY",
    text: "Clear communication and measured pacing. Reporting stayed straightforward throughout.",
    img: "/images/susan-j.jpg",
  },
  {
    name: "Ava M.",
    meta: "Dental practice — Manhattan, NY",
    text: "Clear communication, sensible pacing, and consistent reporting. Helped us align with platform policies.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=112&h=112&q=80",
  },
  {
    name: "Liam R.",
    meta: "SaaS — Brooklyn, NY",
    text: "Updates were timely and easy to follow. The approach felt measured and reputation-safe.",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=112&h=112&q=80",
  },
  {
    name: "Noah K.",
    meta: "Clinic — Queens, NY",
    text: "We appreciated the clarity in steps and the steady progress — no shortcuts, just good fundamentals.",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=112&h=112&q=80",
  },
  {
    name: "Sophia T.",
    meta: "Law firm — Midtown, NY",
    text: "Professional, policy-aware guidance with transparent reporting. Pacing felt right for our brand.",
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=112&h=112&q=80",
  },
  {
    name: "Ethan B.",
    meta: "Ecommerce — SoHo, NY",
    text: "Good collaboration and realistic expectations. Signals improved gradually with clear checkpoints.",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=112&h=112&q=80",
  },
  {
    name: "Maya C.",
    meta: "Startup — DUMBO, NY",
    text: "Helpful structure and communication. We liked the cadence and risk-aware decision-making.",
    img: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&auto=format&fit=crop&w=112&h=112&q=80",
  },
  {
    name: "Oliver D.",
    meta: "Studio — Williamsburg, NY",
    text: "Reporting was simple and useful. Strategy balanced growth with long-term reputation.",
    img: "https://images.unsplash.com/photo-1511497584788-3be8c7bfa1b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=112&h=112&q=80",
  },
  {
    name: "Isabella P.",
    meta: "Nonprofit — Harlem, NY",
    text: "Respectful pacing and clear milestones. Communication stayed consistent and grounded.",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=112&h=112&q=80",
  },
  {
    name: "James W.",
    meta: "Hotel — Chelsea, NY",
    text: "Clarity on next steps and expected signals. A conservative, policy-minded approach we could trust.",
    img: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=112&h=112&q=80",
  },
  {
    name: "Chloe S.",
    meta: "Restaurant group — Lower East Side, NY",
    text: "The team prioritized communication and pacing. Results felt natural and aligned with guidelines.",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e0c4c07?ixlib=rb-4.0.3&auto=format&fit=crop&w=112&h=112&q=80",
  },
  {
    name: "Amir H.",
    meta: "SaaS — Flatiron, NY",
    text: "We valued the measured plan and straightforward reporting — no hype, just clear progress.",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=112&h=112&q=80",
  },
  {
    name: "Zoe L.",
    meta: "Clinic — Forest Hills, NY",
    text: "Consistent check-ins and pacing that matched our risk tolerance. Practical and transparent.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=112&h=112&q=80",
  },
];

export default function ReviewMarquee() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced.current) return;

    let rafId: number;
    const speed = 0.3; // premium slow speed
    const step = () => {
      if (!scrollerRef.current || paused || dragging) {
        rafId = requestAnimationFrame(step);
        return;
      }
      const el = scrollerRef.current;
      el.scrollLeft += speed;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
        el.scrollLeft = 0;
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [paused, dragging]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    dragStartX.current = e.clientX;
    dragStartScrollLeft.current = scrollerRef.current?.scrollLeft ?? 0;
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging || !scrollerRef.current) return;
    const dx = e.clientX - dragStartX.current;
    scrollerRef.current.scrollLeft = dragStartScrollLeft.current - dx;
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(false);
    (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={scrollerRef}
      className="relative overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      aria-label="Client feedback samples carousel"
    >
      <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="inline-flex gap-4 px-1 py-2">
        {[...reviews, ...reviews].map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} {...r} />
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ name, meta, text, img }: Review) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="w-[320px] shrink-0 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-block h-14 w-14 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100">
            {failed ? (
              <span
                className="flex h-full w-full items-center justify-center text-xs font-semibold"
                style={{
                  background: "linear-gradient(135deg, #fbbf24 0%, #f472b6 100%)",
                  color: "#fff",
                  width: "100%",
                  height: "100%",
                }}
              >
                {initials}
              </span>
            ) : (
              <img
                src={img}
                alt={`Professional headshot (illustrative): ${name}`}
                className="h-full w-full object-cover"
                width={56}
                height={56}
                onError={() => setFailed(true)}
              />
            )}
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
      <p className="mt-3 text-[10px] uppercase tracking-wide text-zinc-400">Sample feedback</p>
    </div>
  );
}
