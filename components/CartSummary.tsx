interface PropsCartSummary{
    total: number
}
export default function CartSummary({total}: PropsCartSummary) {
  return (
    <div>
      <div className="w-[230px] bg-zinc-200 border border-zinc-300">
        <h2 className="font-medium p-3 pl-4 border border-zinc-300">
          Resumo de compra
        </h2>
        <div className="text-zinc-500">
          <div className="flex justify-between px-4 py-1 text-sm">
            <span>Subtotal</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between px-4 py-1 text-sm">
            <p>Frete</p>
            <p>Gratuito</p>
          </div>
          <div className="text-[12px] text-center py-2">
            <p className="text-green-500">
              <a className="cursor-pointer" href="#">
                Adicione cupom de desconto +
              </a>
            </p>
          </div>
          <div className="w-full flex justify-between p-4 text-xl border border-zinc-300">
            <p>Total</p>
            <p>R$ {total.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <button className="w-full bg-green-500 mt-2.5 p-2 cursor-pointer hover:bg-green-600 transition">FINALIZAR COMPRA</button>
    </div>
  );
}
