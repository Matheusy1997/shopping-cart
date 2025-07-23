"use client";
// import Image from "next/image";
import CartTable, { Product } from "../../components/CartTable";
import CartSummary from "../../components/CartSummary";
import { useState } from "react";

export default function CartPage() {
  const [product, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  function addItem() {
    const id = Date.now();
    const price = Math.floor(Math.random() * 2000) + 1;
    setProducts((prev) => [
      ...prev,
      { id, name: `Produto ${prev.length + 1}`, price },
    ]);
    setTotal(prev => prev + price);
  }

  function handleQuantityChange(id: number, delta: number) {
    setTotal((prev) => prev + delta);
  }

  function handleDelete(id: number, totalValue: number) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setTotal((prev) => prev - totalValue);
  }

  return (
    <main className="h-screen w-screen font-sans flex flex-col items-center overflow-x-hidden">
      <h1 className="my-14 text-5xl font-medium">Seu carrinho</h1>
      <button
        onClick={addItem}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Adicionar Produto
      </button>
      <div className="flex justify-around w-full">
        <CartTable
          products={product}
          onQuantityChange={handleQuantityChange}
          onDelete={handleDelete}
        />
        <CartSummary total={total} />
      </div>
    </main>
  );
}
