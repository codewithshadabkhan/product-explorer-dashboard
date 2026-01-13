const FAVORITES_KEY = "favorite_products";

export function getFavorites(): number[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) ?? "[]");
}

export function setFavorites(ids: number[]) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
}

export function toggleFavorite(id: number) {
  const favorites = getFavorites();
  const updated = favorites.includes(id)
    ? favorites.filter((f) => f !== id)
    : [...favorites, id];

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  return updated;
}
