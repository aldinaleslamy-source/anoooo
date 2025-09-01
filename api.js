import axios from 'axios'
const API_URL = process.env.API_URL || 'http://localhost:8000'

export async function fetchProducts() {
  try {
    const res = await axios.get(`${API_URL}/api/products?limit=20`)
    if (res.data.results) return res.data.results
    return res.data || []
  } catch (err) {
    console.warn('fetchProducts failed, falling back to sample data', err.message)
    return [
      { id: 1, title: 'فستان تجريبي', slug: 'test-dress', price: 1250, old_price: 1550, images: [{url:'https://via.placeholder.com/600x800.png?text=Product+1'}], stock: 5, rating:4.6 }
    ]
  }
}

export async function fetchProductBySlug(slug) {
  if (!slug) return null
  try {
    const res = await axios.get(`${API_URL}/api/products/${slug}`)
    return res.data
  } catch (err) {
    console.warn('fetchProductBySlug failed, trying query fallback')
    try {
      const res2 = await axios.get(`${API_URL}/api/products?slug=${slug}`)
      if (res2.data.results && res2.data.results.length) return res2.data.results[0]
    } catch (err2) {
      console.error('fallback failed', err2.message)
    }
    return null
  }
}

export async function addToCart({ product_id, variant_id=null, quantity=1 }) {
  // try backend, else fallback to localStorage
  if (typeof window === 'undefined') return null
  try {
    const res = await axios.post(`${API_URL}/api/cart`, { product_id, variant_id, quantity })
    return res.data
  } catch (err) {
    // fallback local
    const cart = JSON.parse(localStorage.getItem('cart') || '{"items":[],"subtotal":0}')
    const item = { id: Date.now(), product_id, title: 'منتج', quantity, price: 0, image: '' }
    cart.items.push(item)
    localStorage.setItem('cart', JSON.stringify(cart))
    return cart
  }
}

export async function getCart() {
  if (typeof window === 'undefined') return { items: [], subtotal: 0 }
  try {
    const res = await axios.get(`${API_URL}/api/cart`)
    return res.data
  } catch (err) {
    const cart = JSON.parse(localStorage.getItem('cart') || '{"items":[],"subtotal":0}')
    return cart
  }
}
