import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("704a64bb-6c05-4d61-ae95-5a17539877cc");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard billboard={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" products={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
