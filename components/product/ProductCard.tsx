"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useFavorites } from "@/hooks/useFavorites";
import RatingStars from "../ui/RatingStars";
import { BookmarkCheck, BookmarkPlus } from "lucide-react";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(product.id);

  return (
    <div className="flex flex-col rounded shadow-md hover:shadow-lg  p-4 dark:border">
      <button
        onClick={() => toggleFavorite(product.id)}
        className="mt-2 text-sm text-blue-600 cursor-pointer flex justify-end"
      >
        {isFavorite ? <BookmarkCheck size={16} /> : <BookmarkPlus size={16} />}
      </button>
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="mx-auto h-40 object-contain"
        />
        <h3 className="mt-2 font-semibold line-clamp-2 capitalize">
          {product.title}
        </h3>
        <RatingStars
          rating={product.rating.rate}
          count={product.rating.count}
        />
      </Link>

      <p className="text-sm text-gray-500 capitalize">{product.category}</p>
      <p className="mt-auto font-bold">${product.price}</p>
    </div>
  );
}
