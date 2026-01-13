export default function ProductDetailsLoading() {
  return (
    <div className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-6 animate-pulse">
      {/* Image skeleton */}
      <div className="h-100 w-full rounded-lg bg-gray-200" />

      {/* Content skeleton */}
      <div className="space-y-4">
        {/* Title */}
        <div className="h-6 w-3/4 rounded bg-gray-200" />

        {/* Category */}
        <div className="h-4 w-1/3 rounded bg-gray-200" />

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-5/6 rounded bg-gray-200" />
        </div>

        {/* Price */}
        <div className="h-6 w-1/4 rounded bg-gray-200" />
      </div>
    </div>
  );
}
