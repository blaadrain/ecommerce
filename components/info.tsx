'use client';

import { Product } from '@/types';
import Currency from './ui/currency';
import Button from './ui/button';
import { ShoppingCart } from 'lucide-react';
import useCart from '@/hooks/use-cart';

type InfoProps = {
  product: Product;
};

const Info: React.FC<InfoProps> = ({ product }) => {
  const cart = useCart();

  const addToCart = () => {
    cart.addProduct(product);
  };

  const removeFromCart = () => {
    cart.removeProduct(product.id);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl">
          <Currency value={product.price} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold">Size:</h3>
          <span>{product.size.name}</span>
        </div>
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold">Color:</h3>
          <div
            className="h-6 w-6 rounded-md border-gray-500"
            style={{ backgroundColor: product?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        {cart.products.some(({ id }) => id === product.id) ? (
          <Button
            onClick={removeFromCart}
            className="flex items-center gap-x-2"
          >
            Remove from cart
            <ShoppingCart />
          </Button>
        ) : (
          <Button
            onClick={addToCart}
            className="flex items-center gap-x-2"
          >
            Add to cart
            <ShoppingCart />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Info;
