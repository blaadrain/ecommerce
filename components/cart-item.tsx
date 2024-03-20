"use client";

import { Product } from "@/types";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";
import IconButton from "./ui/icon-button";
import Currency from "./ui/currency";
import useCart from "@/hooks/use-cart";

type CartItemProps = {
  product: Product;
};

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeProduct(product.id);
  };

  return (
    <li className="flex py-6">
      <div className="relative h-24 w-24 overflow-hidden rounded-xl sm:h-48 sm:w-48">
        <div className="aspect-square bg-gray-100" />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col sm:ml-6">
        <div className="absolute right-0 top-0 z-10">
          <IconButton onClick={onRemove} icon={<X size={20} />} />
        </div>
        <div className="relative pr-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold">{product?.name}</p>
          </div>
        </div>
        <div className="mt-1 flex divide-x text-sm">
          <p className="text-neutral-700">{product.color.name}</p>
          <p className="ml-2 pl-2 text-neutral-700">{product.size.name}</p>
        </div>
        <div className="mt-auto">
          <Currency value={product.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
