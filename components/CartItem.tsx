import Image from "next/image";
import { useState } from "react";

interface PropsCartItem {
  id: number;
  name: string;
  category?: string;
  price: number;
  onQuantityChange: (id: number, delta: number) => void;
  onDelete: (id: number, totalValue: number) => void;
}

export default function CartItem({
  id,
  name,
  category,
  price,
  onQuantityChange,
  onDelete,
}: PropsCartItem) {
  const [quantity, setQuantity] = useState<number>(1);

  function incremente() {
    setQuantity(prev => {
      onQuantityChange(id, price)
      return prev + 1
    })
  }

  function decremente() {
    setQuantity(prev => {
      if(prev <= 1) return prev
      onQuantityChange(id, -price)
      return prev - 1
    })
  }

  function handleDelete() {
    onDelete(id, price * quantity)
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
          <h3>{name}</h3>
          {category && <p className="text-sm text-gray-500">{category}</p>}
        </div>
      </td>
      <td>R$ {price.toFixed(2)}</td>
      <td>
        <div className="quantity">
          <button
            onClick={decremente}
            className="w-1/3 bg-zinc-300 hover:bg-zinc-500 rounded-l-lg border border-amber-50 transition"
          >
            -
          </button>
          <span className="w-1/3 text-center">{quantity}</span>
          <button
            onClick={incremente}
            className="w-1/3 bg-zinc-300 hover:bg-zinc-500 rounded-r-lg border border-amber-50 transition"
          >
            +
          </button>
        </div>
      </td>
      {/* Total + Remover */}
      <td>
        <div className="flex items-center space-x-4">
          <span>R$ {(price * quantity).toFixed(2)}</span>
          <button
            onClick={handleDelete}
            className="w-6 h-6 bg-red-300 hover:bg-red-400 rounded-full text-white text-sm flex items-center justify-center"
          >
            ×
          </button>
        </div>
      </td>
    </tr>
  );
}
