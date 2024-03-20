"use client";

import axios from "axios";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "./ui/button";
import Currency from "./ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";

const Summary = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const products = useCart((state) => state.products);
  const clear = useCart((state) => state.clear);

  const totalPrice = products.reduce((total, item) => total + +item.price, 0);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed");
      clear();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong");
    }
  }, [searchParams, clear]);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      { productIds: products.map(({ id }) => id) },
    );

    router.push("/cart?success=1");
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-100 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-300 pt-4">
          <div className="text-base font-medium">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckout} className="mt-6 w-full">
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
