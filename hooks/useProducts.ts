import { useCallback, useEffect, useState } from "react";
import { fetchProducts } from "@/lib/api";
import { Product } from "@/types/product";
import { useNetworkStatus } from "./useNetworkStatus";

export function useProducts() {
  const isOnline = useNetworkStatus();

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = useCallback(async () => {
    if (!isOnline) return;

    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      setError(`Unable to load products : ${err}`);
    } finally {
      setIsLoading(false);
    }
  }, [isOnline]);

  // Initial fetch
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  //  Refetch automatically when back online
  useEffect(() => {
    if (isOnline && products.length === 0) {
      loadProducts();
    }
  }, [isOnline, loadProducts, products.length]);

  return {
    products,
    isLoading,
    error,
    isOnline,
    refetch: loadProducts,
  };
}
