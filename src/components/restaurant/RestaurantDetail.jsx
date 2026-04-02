// React Components  >  Restaurant Components > Restaurant detail (Restaurant info);Detail page wrapper

import React, { useState } from "react";
import {
  ArrowLeft,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  UtensilsCrossed,
  Flame,
} from "lucide-react";
import ChatMessage from "@/components/chat/ChatMessage";
import ChatInput from "@/components/chat/ChatInput";
import MenuItemCard from "@/components/restaurant/MenuItemCard";

const quickPrompts = [
  "What's popular here?",
  "I'd like to order something",
  "Show me reviews",
  "Any low-cal options?",
  "What should I try?",
];

const demoMenu = [
  {
    section: "APPETIZERS",
    items: [
      {
        name: "Edamame",
        description: "Steamed soybeans with sea salt",
        calories: 120,
        protein: "11g",
        price: "$7.00",
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?w=300&q=80",
      },
    ],
  },
  {
    section: "DESSERTS",
    items: [
      {
        name: "Matcha Mochi",
        description: "Green tea ice cream wrapped in mochi",
        calories: 210,
        protein: "4g",
        price: "$9.00",
        image:
          "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=300&q=80",
      },
    ],
  },
];

const RestaurantDetail = ({ restaurant, onBack }) => {
  const [activeTab, setActiveTab] = useState("chat");
  const [input, setInput] = useState("");

  if (!restaurant) return null;

  return (
    <div className="w-full text-left text-zinc-100">
      <section className="relative h-44 overflow-hidden rounded-b-2xl border-b border-white/10">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/55 to-black/90" />

        <div className="absolute left-4 top-4 z-10">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1 rounded-full bg-black/40 px-3 py-1.5 text-xs text-zinc-200 ring-1 ring-white/10 hover:bg-black/60"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </button>
        </div>

        <div className="absolute bottom-4 left-6 right-6 z-10">
          <div className="mb-1 inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-xs text-zinc-200 ring-1 ring-white/10">
            <span>{restaurant.priceRange}</span>
            <Star className="ml-1 h-3.5 w-3.5 fill-violet-400 text-violet-400" />
            <span>
              {restaurant.rating} ({restaurant.reviewCount} reviews)
            </span>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">{restaurant.name}</h1>
          <p className="mt-1 flex flex-wrap items-center gap-3 text-xs text-zinc-300">
            <span>
              {restaurant.cuisine} · {restaurant.tags?.[0] ?? "Restaurant"}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {restaurant.address}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock3 className="h-3.5 w-3.5" />
              {restaurant.hours}
            </span>
            <span className="inline-flex items-center gap-1">
              <Phone className="h-3.5 w-3.5" />
              {restaurant.phone}
            </span>
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 px-6">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("chat")}
            className={`inline-flex items-center gap-2 border-b-2 px-3 py-3 text-sm ${
              activeTab === "chat"
                ? "border-violet-500 text-violet-300"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            Chat
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("menu")}
            className={`inline-flex items-center gap-2 border-b-2 px-3 py-3 text-sm ${
              activeTab === "menu"
                ? "border-violet-500 text-violet-300"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <UtensilsCrossed className="h-4 w-4" />
            Menu
          </button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-6">
        {activeTab === "chat" ? (
          <div className="space-y-4 rounded-2xl border border-white/10 bg-black/25 p-4">
            <ChatMessage
              role="assistant"
              highlight={`Hey there! Welcome to ${restaurant.name}.`}
              message="I can help you explore our menu, check out reviews, or answer any questions. What can I do for you?"
            />

            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs text-zinc-200 hover:bg-violet-500/20"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <ChatInput
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onSend={() => setInput("")}
            />
          </div>
        ) : (
          <div className="space-y-6">
            {demoMenu.map((group) => (
              <div key={group.section} className="space-y-3">
                <h3 className="text-sm font-semibold text-violet-300">{group.section}</h3>
                {group.items.map((item) => (
                  <MenuItemCard
                    key={item.name}
                    item={item}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto mb-8 w-full max-w-5xl px-6">
        <div className="flex flex-wrap gap-2">
          {quickPrompts.slice(0, 4).map((q) => (
            <span
              key={q}
              className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] text-zinc-400"
            >
              <Flame className="h-3 w-3" />
              {q}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetail;
