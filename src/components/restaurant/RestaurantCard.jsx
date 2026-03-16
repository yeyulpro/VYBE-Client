// React Components  >  Restaurant Components > Restaurant card (Restaurant info);Card with image + name + rating

// Restaurant card styled like the Canoe example

import React from "react";
import { MapPin, Clock, Star } from "lucide-react";

const RestaurantCard = () => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/5 bg-black/60 shadow-[0_18px_60px_rgba(0,0,0,0.75)] backdrop-blur-md transition hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_26px_80px_rgba(88,28,135,0.65)]">
      {/* Image + top badges */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src="/res-img/canoe.jpg"
          alt="Canoe restaurant patio by the water"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-[1.05]"
        />

        {/* Gradient overlay bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

        {/* Price badge */}
        <div className="absolute left-3 top-3 rounded-full bg-black/75 px-3 py-1 text-xs font-semibold text-zinc-100 shadow-lg ring-1 ring-white/10">
          $$$$
        </div>

        {/* Rating badge */}
        <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-violet-600/90 px-2.5 py-1 text-xs font-semibold text-white shadow-lg">
          <Star className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
          <span>4.9</span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2 px-4 pb-4 pt-3 text-left">
        <h3 className="text-base font-semibold text-zinc-50">Canoe</h3>

        <p className="text-xs font-medium text-zinc-400">
          Canadian · Fine Dining
        </p>

        <div className="mt-3 flex items-center gap-4 text-[11px] text-zinc-500">
          <div className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.7} />
            <span>Financial District</span>
          </div>

          <div className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" strokeWidth={1.7} />
            <span>25 min</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RestaurantCard;