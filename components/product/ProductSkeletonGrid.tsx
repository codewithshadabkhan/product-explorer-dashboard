import ProductCardSkeleton from "./ProductSkeleton";

interface Props {
  count?: number;
}

const ProductSkeletonGrid = ({ count = 8 }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mt-10 ">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default ProductSkeletonGrid;
