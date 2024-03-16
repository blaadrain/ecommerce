'use client';

import { Product } from '@/types';
import IconButton from './icon-button';
import { Expand, ShoppingCart } from 'lucide-react';
import Currency from './currency';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <div className="opacity-100 group-hover:opacity-100 transition absolute w-full px-6 bottom-4">
          <div className="flex gap-x-3 justify-center">
            <IconButton
              onClick={() => {}}
              icon={
                <Expand
                  size={20}
                  className="text-gray-600"
                />
              }
            />
            <IconButton
              onClick={() => {}}
              icon={
                <ShoppingCart
                  size={20}
                  className="text-gray-600"
                />
              }
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{product.name}</p>
        <p className="text-sm text-gray-500">{product.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;
