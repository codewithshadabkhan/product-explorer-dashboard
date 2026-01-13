import { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function fetchProductById(id: string): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Product not found");
  }

  // 🔐 Safely read text first
  const text = await res.text();

  if (!text) {
    throw new Error("Empty response");
  }

  try {
    return JSON.parse(text) as Product;
  } catch {
    throw new Error("Invalid JSON response");
  }
}
