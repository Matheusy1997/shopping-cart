"use client"
// import Image from "next/image";
import CartTable from "../../components/CartTable";
import CartSummary from "../../components/CartSummary";
import { useState } from "react";


export default function CartPage() {
  const [currentArrayValue, setCurrentArrayValue] = useState<number[]> ([])
  

  return (
    <main className="h-screen w-screen font-sans flex flex-col items-center overflow-x-hidden">
        <h1 className="my-14 text-5xl font-medium">Seu carrinho</h1>
        <div className="flex justify-around w-full">
          <CartTable totalProduct={setCurrentArrayValue} arrayNumber={currentArrayValue}/>   
          <CartSummary total={currentArrayValue.reduce((total, valor) => total + valor, 0)}/>
        </div>
    </main>
  );
}
