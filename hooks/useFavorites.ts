"use client";

import { useState } from "react";
import { getFavorites, setFavorites } from "@/lib/storage";

export function useFavorites() {
  const [favorites, setFavoritesState] = useState<number[]>(() => {
    if (typeof window === "undefined") return [];
    return getFavorites();
  });

  const toggleFavorite = (id: number) => {
    setFavoritesState((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id];

      setFavorites(updated);
      return updated;
    });
  };

  return { favorites, toggleFavorite };
}
