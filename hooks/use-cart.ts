import { Product } from '@/types';
import toast from 'react-hot-toast';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type CartStore = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
  clear: () => void;
};

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      products: [],
      addProduct: (product: Product) => {
        const currentProducts = get().products;
        const existingProduct = currentProducts.find(
          (item) => item.id === product.id
        );

        if (existingProduct) {
          return toast('Product already in cart.');
        }

        set({ products: [...get().products, product] });
        toast.success('Product added to cart');
      },
      removeProduct: (id: string) => {
        set({
          products: [...get().products.filter((item) => item.id !== id)],
        });
        toast.success('Product removed from the cart');
      },
      clear: () => set({ products: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
