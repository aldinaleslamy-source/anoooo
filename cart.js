import Layout from '../components/Layout'
import { getCart } from '../lib/api'
import { useEffect, useState } from 'react'
import CartItem from '../components/CartItem'

export default function CartPage() {
  const [cart, setCart] = useState({ items: [], subtotal: 0 })

  useEffect(() => {
    async function load() {
      const c = await getCart()
      setCart(c || { items: [], subtotal: 0 })
    }
    load()
  }, [])

  return (
    <Layout>
      <main className="container">
        <h1>السلة</h1>
        {cart.items.length === 0 ? (
          <p>السلة فارغة</p>
        ) : (
          <div>
            {cart.items.map(item => <CartItem key={item.id} item={item} />)}
            <div className="cart-summary">
              <div>المجموع: <strong>{cart.subtotal} ج.م</strong></div>
              <a href="/checkout" className="btn primary">إتمام الطلب</a>
            </div>
          </div>
        )}
      </main>
    </Layout>
  )
}
