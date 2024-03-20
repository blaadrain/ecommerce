import Link from "next/link";
import Container from "./ui/container";
import NavItems from "./nav-items";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <nav className="border-b">
      <Container>
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
            <p className="text-2xl font-bold">STORE</p>
          </Link>
          <NavItems data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
