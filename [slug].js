import Head from 'next/head'
import Layout from '../../components/Layout'
import { fetchProductBySlug, addToCart } from '../../lib/api'
import { useState } from 'react'

export default function ProductPage({ product }) {
  const [qty, setQty] = useState(1)
  if (!product) {
    return <Layout><div className="container">المنتج غير موجود</div></Layout>
  }

  return (
    <Layout>
      <Head>
        <title>{product.title} — LuxStore</title>
      </Head>

      <main className="container product-page">
        <div className="product-grid">
          <div className="gallery">
            <img src={product.images?.[0]?.url || '/logo.svg'} alt={product.title} />
          </div>
          <div className="details">
            <h1>{product.title}</h1>
            <p className="price">{product.price ? product.price + ' ج.م' : '---'}</p>
            <p className="short">{product.description?.slice(0,200)}</p>

            <div className="controls">
              <label>الكمية</label>
              <div>
                <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <input value={qty} onChange={(e)=> setQty(Number(e.target.value || 1))} />
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
              <div style={{marginTop:12}}>
                <button className="btn primary" onClick={() => addToCart({ product_id: product.id, quantity: qty })}>
                  أضف إلى السلة
                </button>
                <button className="btn outline" style={{marginLeft:8}}>اشترِ الآن</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const slug = context.params.slug || null
  try {
    const product = await fetchProductBySlug(slug)
    return { props: { product } }
  } catch (err) {
    console.error(err)
    return { props: { product: null } }
  }
}
