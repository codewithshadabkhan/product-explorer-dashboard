"use client";

import { Heart } from "lucide-react";

export default function FavoriteFilter({
  enabled,
  onToggle,
}: {
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-2  shadow-md rounded-2xl dark:border px-3 py-2 text-sm transition ${
        enabled ? "border text-red-500" : "border-gray-300 text-gray-600"
      }`}
    >
      <Heart className={`h-4 w-4 ${enabled ? "fill-red-500" : ""}`} />
      Favorites
    </button>
  );
}
