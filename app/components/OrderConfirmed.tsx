"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useCartStore } from "@/store";
import { useEffect } from "react";

export default function OrderConfirmed() {
  const cartStore = useCartStore();

  useEffect(() => {
    cartStore.setPaymentIntent("");
    cartStore.clearCart();
  }, []);

  const checkoutOrder = () => {
    setTimeout(() => {
      cartStore.setCheckout("cart");
    }, 1000);
    cartStore.toggleCart();
  };

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex items-center justify-center my-12"
    >
      <div className="p-12 text-center">
        <h1 className="font-medium text-2xl">Order Placed</h1>
        <h2 className="my-4 text-sm">Check your email for the receipt</h2>
        <p className="py-2 text-3xl mb-8">🎉</p>
        <div className="flex items-center justify-center gap-12">
          <Link href={"/dashboard"}>
            <button onClick={checkoutOrder} className="font-medium">
              Check your Order
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
