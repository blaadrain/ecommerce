import { Product } from '@/types';
import qs from 'query-string';

type Query = {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
};

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async ({
  categoryId,
  colorId,
  sizeId,
  isFeatured,
}: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId,
      colorId,
      sizeId,
      isFeatured,
    },
  });

  const res = await fetch(url, { next: { revalidate: 3600 } });

  return res.json();
};

export default getProducts;
