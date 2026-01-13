import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import NoProductsFound from "./NoProductsFound";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  if (!products.length) {
    return <NoProductsFound />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
