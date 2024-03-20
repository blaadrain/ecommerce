"use client";

import { Product } from "@/types";
import Currency from "./currency";
import { useRouter } from "next/navigation";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${product?.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
    >
      <div className="relative aspect-square rounded-xl bg-gray-100" />
      <div>
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-sm text-gray-500">{product.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;
