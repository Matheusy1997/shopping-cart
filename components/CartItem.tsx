import Image from "next/image";
import { useState } from "react";

interface PropsCartItem {
  id: number;
  price: number;
  arrayNumber:number[]
  totalProduct: (value:number[]) => void;
  onDelete: (id:number) => void
}

export default function CartItem({id, price, arrayNumber, totalProduct, onDelete}: PropsCartItem) {
  const [currentQuantity, setCurrentQuantity] = useState<number>(1);

  function handleQuantity(value:number){
    setCurrentQuantity(value)
    const total = price * currentQuantity
    totalProduct([...arrayNumber, total])
  }

  return (
    <tr key={id} className="font-medium table-row">
      <td className="flex items-center">
        <Image
          className="img-product"
          src="/produto.jpg"
          alt="produto"
          width={160}
          height={100}
        ></Image>
        <div className="ml-4">
          <h3>produto</h3>
          <h3 className="text-zinc-300">Categoria</h3>
        </div>
      </td>
      <td>R$ {price}</td>
      <td>
        <div className="quantity">
          <button onClick={() => handleQuantity(currentQuantity == 1 ? 1 : currentQuantity - 1)} className="w-1/3 bg-zinc-300 hover:bg-zinc-500 rounded-l-lg border border-amber-50 transition">
            -
          </button>
          <p className="bg-zinc-300 w-1/3 text-center">{currentQuantity}</p>
          <button onClick={() => handleQuantity(currentQuantity + 1)} className="w-1/3 bg-zinc-300 hover:bg-zinc-500 rounded-r-lg border border-amber-50 transition">
            +
          </button>
        </div>
      </td>
      <td>
        <div className="flex w-full">
          <p>R$ {price * currentQuantity}</p>
          <button onClick={() => onDelete(id)} className="ml-8 bg-zinc-300 w-6 cursor-pointer hover:bg-zinc-500 rounded-4xl pb-0.5">
            x
          </button>
        </div>
      </td>
    </tr>
  );
}
