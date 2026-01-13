const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col rounded shadow-md hover:shadow-lg p-4">
      {/* Image */}
      <div className="mb-4 h-48 w-full rounded-md bg-gray-200" />

      {/* Title */}
      <div className="mb-2 h-4 w-3/4 rounded bg-gray-200" />

      {/* Rating */}
      <div className="mb-2 h-3 w-1/2 rounded bg-gray-200" />

      {/* Category */}
      <div className="mb-3 h-3 w-1/3 rounded bg-gray-200" />

      {/* Price */}
      <div className="mb-4 h-4 w-1/4 rounded bg-gray-200" />

      {/* Button */}
      <div className="h-8 w-full rounded bg-gray-200" />
    </div>
  );
};

export default ProductCardSkeleton;
