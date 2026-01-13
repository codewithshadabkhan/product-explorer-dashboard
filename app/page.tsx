"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { fetchProducts } from "@/lib/api";
import { Product } from "@/types/product";

import ProductGrid from "@/components/product/ProductGrid";
import SearchBar from "@/components/filters/SearchBar";
import CategoryFilter from "@/components/filters/CategoryFilter";
import ProductsPageSkeleton from "@/components/product/ProductsPageSkeleton";
import { useNetworkStatus } from "@/hooks/useNetworkStatus";

export default function HomePage() {
  const isOnline = useNetworkStatus();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

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

  // Initial fetch
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  // Refetch automatically when back online
  useEffect(() => {
    if (isOnline && products.length === 0) {
      loadProducts();
    }
  }, [isOnline, loadProducts, products.length]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory = category === "all" || product.category === category;

      return matchSearch && matchCategory;
    });
  }, [products, search, category]);

  if (loading) return <ProductsPageSkeleton />;

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (
    <main className="max-w-7xl mx-auto p-4 mt-10 ">
      <div className="mb-6 flex flex-col md:flex-row gap-4 justify-center items-center">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter products={products} onChange={setCategory} />
      </div>

      <ProductGrid products={filteredProducts} />
    </main>
  );
}
