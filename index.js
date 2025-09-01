import Head from 'next/head'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../lib/api'

export default function Home({ products }) {
  return (
    <Layout>
      <Head>
        <title>LuxStore — الصفحة الرئيسية</title>
        <meta name="description" content="متجر فاخر لبيع الملابس والإكسسوارات" />
      </Head>

      <main className="container">
        <h1 className="page-title">أحدث المنتجات</h1>
        <section className="grid" aria-label="قائمة المنتجات">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    const products = await fetchProducts()
    return { props: { products } }
  } catch (err) {
    console.error('fetchProducts error', err)
    return { props: { products: [] } }
  }
}
