import { Star, StarHalf } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  count?: number;
  size?: "sm" | "md";
}

export default function RatingStars({
  rating,
  count,
  size = "sm",
}: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const iconSize = size === "sm" ? 14 : 18;

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return (
            <Star
              key={index}
              size={iconSize}
              className="fill-yellow-400 text-yellow-400"
            />
          );
        }

        if (index === fullStars && hasHalfStar) {
          return (
            <StarHalf
              key={index}
              size={iconSize}
              className="fill-yellow-400 text-yellow-400"
            />
          );
        }

        return <Star key={index} size={iconSize} className="text-gray-300" />;
      })}

      {count !== undefined && (
        <span className="ml-1 text-xs text-gray-500">({count})</span>
      )}
    </div>
  );
}
