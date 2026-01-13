"use client";

import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { fetchProducts } from "@/lib/api";
import { Product } from "@/types/product";
import { getFavorites } from "@/lib/storage";

import ProductGrid from "@/components/product/ProductGrid";
import SearchBar from "@/components/filters/SearchBar";
import CategoryFilter from "@/components/filters/CategoryFilter";
import FavoriteFilter from "@/components/filters/FavoriteFilter";
import ProductsPageSkeleton from "@/components/product/ProductsPageSkeleton";
import { useNetworkStatus } from "@/hooks/useNetworkStatus";

const PAGE_SIZE = 8;

export default function HomePage() {
  const isOnline = useNetworkStatus();
  const observerRef = useRef<HTMLDivElement | null>(null);

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
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
      setAllProducts(data);
    } catch (err: any) {
      setError(err.message ?? "Failed to load products");
    } finally {
      setLoading(false);
    }
  }, [isOnline]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  // Reset visible items when filters change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [search, category, showFavorites]);

  const filteredProducts = useMemo(() => {
    const favorites = getFavorites();

    return allProducts.filter((product) => {
      const matchSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory = category === "all" || product.category === category;

      const matchFavorite = !showFavorites || favorites.includes(product.id);

      return matchSearch && matchCategory && matchFavorite;
    });
  }, [allProducts, search, category, showFavorites]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  //  Intersection Observer
  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && visibleCount < filteredProducts.length) {
          setVisibleCount((prev) => prev + PAGE_SIZE);
        }
      },
      { threshold: 1 }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [visibleCount, filteredProducts.length]);

  if (loading) return <ProductsPageSkeleton />;

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (
    <main className="max-w-7xl mx-auto p-4 md:mt-10">
      {/* Filters */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-center gap-4">
        <SearchBar value={search} onChange={setSearch} />

        <div className="flex gap-3  md:flex-row md:items-center">
          <CategoryFilter products={allProducts} onChange={setCategory} />
          <FavoriteFilter
            enabled={showFavorites}
            onToggle={() => setShowFavorites((prev) => !prev)}
          />
        </div>
      </div>

      {/* Products */}
      <ProductGrid products={visibleProducts} />

      {/* Loader trigger */}
      {visibleCount < filteredProducts.length && (
        <div
          ref={observerRef}
          className="mt-10 flex justify-center text-gray-400"
        >
          Loading more…
        </div>
      )}
    </main>
  );
}
