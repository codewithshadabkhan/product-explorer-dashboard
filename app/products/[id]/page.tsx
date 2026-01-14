import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchProductById, fetchProducts } from "@/lib/api";

export const dynamic = "force-dynamic";
interface Props {
  params: Promise<{ id: string }>;
}
export async function generateStaticParams() {
  const products = await fetchProducts();

  return products.map((product) => ({
    id: String(product.id),
  }));
}
export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;

  let product;

  try {
    product = await fetchProductById(id);
  } catch (error) {
    console.error("PRODUCTION ERROR:", error);
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-6">
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className="object-contain"
      />

      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-500">{product.category}</p>
        <p className="my-4">{product.description}</p>
        <p className="text-xl font-semibold">${product.price}</p>
      </div>
    </div>
  );
}
