import Image from "next/image";
import CartTable from "../../components/CartTable";


export default function CartPage() {
  return (
    <main className="h-screen w-screen font-sans flex flex-col items-center">
        <h1 className="my-14 text-5xl font-medium">Seu carrinho</h1>
        <div className="w-full">
          <CartTable/>   
        </div>
    </main>
  );
}
