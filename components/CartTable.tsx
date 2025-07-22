import CartItem from "./CartItem"

export default function CartTable(){
    return (
        <div className="w-3/5 h-22">
            <button className="border bg-zinc-200 ml-22 my-3 px-3 cursor-pointer hover:bg-zinc-300 transition">
                add to cart
            </button>
            <table className="w-full ml-22">
                <thead className="tableHead">
                    <tr>
                        <th className="w-2/5">PRODUTO</th>
                        <th className="w-1/5">PREÇO</th>
                        <th className="w-1/5">QUANTIDADE</th>
                        <th className="w-1/5">TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    <CartItem></CartItem>
                </tbody>
            </table>
        </div>
    )
}