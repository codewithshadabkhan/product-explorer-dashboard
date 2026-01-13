import { Product } from "@/types/product";

interface Props {
  products: Product[];
  onChange: (category: string) => void;
}

export default function CategoryFilter({ products, onChange }: Props) {
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-1/3 rounded-2xl shadow-md  p-2"
    >
      <option value="all">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
