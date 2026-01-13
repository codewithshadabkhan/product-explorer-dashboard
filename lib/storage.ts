const FAVORITES_KEY = "favorites";

export function getFavorites(): number[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) ?? "[]");
}

export function setFavorites(ids: number[]) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
}
