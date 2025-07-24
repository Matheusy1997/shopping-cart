import CartItem from "./CartItem";

export interface Product {
  id: number;
  name: string;
  category?: string;
  price: number;
}

interface CartTableProps {
  products: Product[];
  onQuantityChange: (id: number, delta: number) => void;
  onDelete: (id: number, totalValue: number) => void;
}

export default function CartTable({
  products,
  onQuantityChange,
  onDelete,
}: CartTableProps) {
  return (
    <table className="w-full border rounded">
      <thead className="tableHead">
        <tr>
          <th className="w-2/5">PRODUTO</th>
          <th className="w-1/5">PREÇO</th>
          <th className="w-1/5">QUANTIDADE</th>
          <th className="w-1/5">TOTAL</th>
        </tr>
      </thead>
      <tbody>
        {products.length === 0 ? (
          <tr>
            <td colSpan={4} className="text-center py-4">
              Carrinho vazio
            </td>
          </tr>
        ) : (
          products.map((p) => (
            <CartItem
              key={p.id}
              id={p.id}
              name={p.name}
              category={p.category}
              price={p.price}
              onQuantityChange={onQuantityChange}
              onDelete={onDelete}
            />
          ))
        )}
      </tbody>
    </table>
  );
}
