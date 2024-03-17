import getProducts from '@/actions/get-products';
import getProduct from '@/actions/get-product';
import Container from '@/components/ui/container';
import ProductList from '@/components/product-list';
import Gallery from '@/components/gallery';
import Info from '@/components/info';

type ProductPageProps = {
  params: {
    productId: string;
  };
};

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const sameCategoryProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  const suggestedProducts = sameCategoryProducts.filter(
    ({ id }) => id !== product?.id
  );

  return (
    <Container>
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Gallery images={[{ id: '1' }, { id: '2' }]} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Info product={product} />
          </div>
        </div>
        {suggestedProducts.length > 0 && (
          <>
            <hr className="my-10" />
            <ProductList
              title="Related items"
              products={suggestedProducts}
            />
          </>
        )}
      </div>
    </Container>
  );
};

export default ProductPage;
