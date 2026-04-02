// React Components > Restaurant Components > Menu item card

import React from "react";
import { Plus } from "lucide-react";

const MenuItemCard = ({ item }) => {
  if (!item) return null;

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-3">
      <img
        src={item.image}
        alt={item.name}
        className="h-16 w-16 rounded-xl object-cover"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <p className="font-medium text-zinc-100">{item.name}</p>
          <p className="font-semibold text-violet-300">{item.price}</p>
        </div>
        <p className="mt-1 text-sm text-zinc-400">{item.description}</p>
        <p className="mt-1 text-xs text-zinc-500">
          {item.calories} cal · {item.protein}
        </p>
      </div>
      <button
        type="button"
        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-600/20 text-violet-300 hover:bg-violet-600/35"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
};

export default MenuItemCard;
