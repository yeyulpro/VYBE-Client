//Route Pages > Screen 1: Main chat interface

import React from "react";
import { Sparkles } from "lucide-react";
import { useTrail, animated } from "@react-spring/web";

const cravingChips = [
  { label: "Best sushi under $30", align: "justify-self-center" },
  { label: "High protein meals", align: "justify-self-start" },
  { label: "Cozy date night spots", align: "justify-self-end" },
  { label: "Vegan brunch options", align: "justify-self-center" },
  { label: "Late night eats in Toronto", align: "justify-self-start" },
  { label: "Something spicy 🌶️", align: "justify-self-end" },
];

const HomePage = () => {
  const trail = useTrail(cravingChips.length, {
    from: { opacity: 0, y: 26 },
    to: { opacity: 1, y: 0 },
    delay: 400,
    config: { mass: 1, tension: 210, friction: 22 },
  });

  return (
    <div className="relative flex flex-col items-center gap-10 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 -top-24 mx-auto h-72 max-w-xl rounded-[999px] bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.55),transparent_65%)] blur-3xl opacity-80" />

      <div className="relative space-y-6 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/20 ring-1 ring-violet-400/40 backdrop-blur">
          <Sparkles className="h-5 w-5 text-violet-100" strokeWidth={1.7} />
        </div>

        <h1 className="text-balance text-4xl font-semibold tracking-tight text-sky-100 sm:text-5xl lg:text-6xl">
          What are you craving?
        </h1>

        <p className="mx-auto max-w-2xl text-balance text-sm leading-relaxed text-slate-300 sm:text-base">
          Tell me what you&apos;re in the mood for — I&apos;ll find the perfect dishes
          and restaurants for you.
        </p>
      </div>

      <div className="relative mt-6 flex w-full max-w-2xl flex-wrap justify-center gap-x-4 gap-y-3 sm:gap-x-6 sm:gap-y-4">
        {trail.map((style, index) => {
          const chip = cravingChips[index];
          const label = chip.label;
          return (
            <animated.span
              key={label}
              style={{
                opacity: style.opacity,
                transform: style.y.to((y) => `translateY(${y}px)`),
              }}
              className="group inline-flex items-center justify-center rounded-full border border-violet-500/35 bg-violet-500/5 px-5 py-2 text-sm font-medium text-slate-100 shadow-[0_0_0_1px_rgba(139,92,246,0.35)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-violet-400/70 hover:bg-violet-500/20 hover:shadow-[0_18px_45px_rgba(129,140,248,0.55)]"
            >
              <span className="truncate">{label}</span>
            </animated.span>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
