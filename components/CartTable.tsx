import React, { useState } from "react"
import CartItem from "./CartItem"

interface PropsCartTable{
    totalProduct: (value:number[]) => void;
    arrayNumber:number[]
}

interface ListCartItem{
    id: number
    price:number
}

function randomValue():number{
  return Math.ceil(Math.random() * 2000)
}

export default function CartTable({totalProduct, arrayNumber}: PropsCartTable){

    const [currentCartItem, setCurrentCartItem] = useState<ListCartItem[]>([])

    function handleCartItem(){
        const price = randomValue()
        const id = randomValue()
        const newCartItem = {id, price}
        totalProduct([...arrayNumber, price])
        setCurrentCartItem([...currentCartItem, newCartItem])
    }

    function deleteItem(idItem:number) {
        setCurrentCartItem(prevItem => prevItem.filter(item => item.id !== idItem))
    }

    return (
        <div className="w-3/5 h-22">
            <button onClick={handleCartItem} className="border bg-zinc-200 ml-22 my-3 px-3 cursor-pointer hover:bg-zinc-300 transition">
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
                    {currentCartItem.map(item => (
                        <CartItem key={item.id} id={item.id} price={item.price} arrayNumber={arrayNumber} totalProduct={totalProduct} onDelete={deleteItem}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}