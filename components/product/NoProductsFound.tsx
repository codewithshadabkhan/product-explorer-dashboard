import { SearchX } from "lucide-react";

interface NoProductsFoundProps {
  title?: string;
  description?: string;
}

export default function NoProductsFound({
  title = "No products found",
  description = "Try adjusting your search or filter to find what you're looking for.",
}: NoProductsFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
        <SearchX className="h-8 w-8 text-gray-400" />
      </div>

      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

      <p className="mt-2 max-w-sm text-sm text-gray-500">{description}</p>
    </div>
  );
}
