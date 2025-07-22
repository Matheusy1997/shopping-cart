import Image from "next/image";
export default function CartItem() {
  return (
    <tr className="font-medium table-row">
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
      <td>R$ 345</td>
      <td>
        <div className="quantity">
          <button className="w-1/3 bg-zinc-300 hover:bg-zinc-500 rounded-l-lg border border-amber-50 transition">
            -
          </button>
          <p className="bg-zinc-300 w-1/3 text-center">{1}</p>
          <button className="w-1/3 bg-zinc-300 hover:bg-zinc-500 rounded-r-lg border border-amber-50 transition">
            +
          </button>
        </div>
      </td>
      <td>
        <div className="flex w-full">
            <p>R$ 1256</p>
            <button className="ml-8 bg-zinc-300 w-6 cursor-pointer hover:bg-zinc-500 rounded-4xl pb-0.5">x</button>
        </div>
      </td>
    </tr>
  );
}
