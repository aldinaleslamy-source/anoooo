export default function CartItem({ item }) {
  return (
    <div className="cart-item">
      <img src={item.image || 'https://via.placeholder.com/80x100.png'} alt={item.title} />
      <div>
        <div>{item.title}</div>
        <div>{item.quantity} × {item.price} ج.م</div>
      </div>
    </div>
  )
}
