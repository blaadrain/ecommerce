"use client";

import { useEffect, useState } from "react";
import Button from "./ui/button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const cart = useCart();
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center space-x-2 rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span>Cart</span>
        <span>{cart.products.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
