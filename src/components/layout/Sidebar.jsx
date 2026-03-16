// React Components  >  Layout Components > Left sidebar (New Chat + Recent)

import React from "react";
import { MessageSquareText, Plus, Search, Trash2 } from "lucide-react";

const mockChats = [
  {
    section: "Today",
    items: [
      { title: "Vybe Explore", preview: "Here are some high-rated Korean…" },
      { title: "Vybe Explore", preview: "I'm craving i food…", muted: true },
    ],
  },
  {
    section: "Yesterday",
    items: [{ title: "Vybe Explore", preview: "Looking for …" }],
  },
  {
    section: "This week",
    items: [
      { title: "Canoe", preview: "How to find …" },
      { title: "Nonna’s Table", preview: "Absolutely! Our menu …" },
    ],
  },
];

const SidebarItem = ({ title, preview, active, muted }) => {
  return (
    <button
      type="button"
      className={[
        "group w-full rounded-xl px-3 py-2 text-left transition",
        "hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60",
        active ? "bg-white/5" : "",
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 ring-1 ring-white/5">
          <MessageSquareText className="h-4 w-4 text-violet-300" strokeWidth={1.8} />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="truncate text-sm font-medium text-zinc-100">
              {title}
            </span>
            {muted ? (
              <span className="text-[11px] font-medium text-zinc-500">2 msgs</span>
            ) : null}
          </div>
          <p className="mt-0.5 line-clamp-1 text-xs text-zinc-400">{preview}</p>
        </div>

        <span className="pointer-events-none mt-1 text-[11px] text-zinc-600">
          Just now
        </span>
      </div>
    </button>
  );
};

const Sidebar = () => {
  return (
    <div className="flex h-full flex-col bg-black/40">
      <div className="px-4 pb-3 pt-4">
        <button
          type="button"
          className={[
            "inline-flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-medium",
            "bg-violet-500/15 text-violet-100 ring-1 ring-inset ring-violet-400/35 backdrop-blur",
            "hover:bg-violet-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70",
          ].join(" ")}
        >
          <Plus className="h-4 w-4" strokeWidth={2} />
          New Chat
        </button>
      </div>

      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/3 px-3 py-2">
          <Search className="h-4 w-4 text-zinc-500" strokeWidth={1.8} />
          <input
            className="w-full bg-transparent text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none"
            placeholder="Search chats"
          />
          <button
            type="button"
            className="rounded-lg p-1 text-zinc-500 hover:bg-white/5 hover:text-zinc-200"
            aria-label="Clear"
            title="Clear"
          >
            <Trash2 className="h-4 w-4" strokeWidth={1.6} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-3 pb-4">
        <div className="flex items-center justify-between px-2 pb-2">
          <span className="text-xs font-semibold tracking-wide text-zinc-400">
            RECENT CHATS
          </span>
          <button
            type="button"
            className="rounded-lg px-2 py-1 text-xs text-zinc-500 hover:bg-white/5 hover:text-zinc-200"
          >
            Clear all
          </button>
        </div>

        <div className="space-y-4">
          {mockChats.map((group) => (
            <section key={group.section} className="space-y-2">
              <h3 className="px-2 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                {group.section}
              </h3>
              <div className="space-y-1">
                {group.items.map((chat, idx) => (
                  <SidebarItem
                    key={`${group.section}-${idx}`}
                    title={chat.title}
                    preview={chat.preview}
                    muted={chat.muted}
                    active={group.section === "Today" && idx === 0}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5 p-4">
        <div className="flex items-center justify-between">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-zinc-200">Vybe</p>
            <p className="truncate text-xs text-zinc-500">AI food discovery</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            <span className="text-xs text-zinc-500">Online</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;