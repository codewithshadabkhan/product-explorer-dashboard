"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { fetchProducts } from "@/lib/api";
import { Product } from "@/types/product";
import { getFavorites } from "@/lib/storage";

import ProductGrid from "@/components/product/ProductGrid";
import SearchBar from "@/components/filters/SearchBar";
import CategoryFilter from "@/components/filters/CategoryFilter";
import FavoriteFilter from "@/components/filters/FavoriteFilter";
import ProductsPageSkeleton from "@/components/product/ProductsPageSkeleton";
import { useNetworkStatus } from "@/hooks/useNetworkStatus";

export default function HomePage() {
  const isOnline = useNetworkStatus();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [showFavorites, setShowFavorites] = useState(false);

  const loadProducts = useCallback(async () => {
    if (!isOnline) return;

    setLoading(true);
    setError(null);

    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err: any) {
      setError(err.message ?? "Failed to load products");
    } finally {
      setLoading(false);
    }
  }, [isOnline]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  useEffect(() => {
    if (isOnline && products.length === 0) {
      loadProducts();
    }
  }, [isOnline, loadProducts, products.length]);

  const filteredProducts = useMemo(() => {
    const favorites = getFavorites();

    return products.filter((product) => {
      const matchSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory = category === "all" || product.category === category;

      const matchFavorite = !showFavorites || favorites.includes(product.id);

      return matchSearch && matchCategory && matchFavorite;
    });
  }, [products, search, category, showFavorites]);

  if (loading) return <ProductsPageSkeleton />;

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (
    <main className="max-w-7xl mx-auto p-4 md:mt-10">
      <div className="mb-6 flex flex-col md:flex-row gap-4 justify-center md:items-center">
        <SearchBar value={search} onChange={setSearch} />
        <div className="flex gap-3 md:flex-row md:items-center">
          <CategoryFilter products={products} onChange={setCategory} />
          <FavoriteFilter
            enabled={showFavorites}
            onToggle={() => setShowFavorites((prev) => !prev)}
          />
        </div>
      </div>

      <ProductGrid products={filteredProducts} />
    </main>
  );
}
