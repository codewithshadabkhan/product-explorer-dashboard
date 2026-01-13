import ProductFiltersSkeleton from "./ProductFiltersSkeleton";
import ProductSkeletonGrid from "./ProductSkeletonGrid";

const ProductsPageSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <ProductFiltersSkeleton />
      <ProductSkeletonGrid count={8} />
    </div>
  );
};

export default ProductsPageSkeleton;
