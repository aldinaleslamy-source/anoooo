import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <article className="card" role="listitem" aria-label={`منتج: ${product.title}`}>
      <Link href={`/products/${product.slug || product.id}`}>
        <a className="card-link">
          <div className="img">
            <img src={product.images?.[0]?.url || 'https://via.placeholder.com/600x800.png?text=Product'} alt={product.title} />
          </div>
          <div className="body">
            <h3 className="title">{product.title}</h3>
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <div className="price">{product.price ? product.price + ' ج.م' : '-'}</div>
              {product.old_price && <div className="old">{product.old_price}</div>}
            </div>
            <div className="meta">
              <div>⭐ {product.rating || '—'}</div>
              <div>{product.stock > 0 ? 'متوفر' : 'غير متوفر'}</div>
            </div>
          </div>
        </a>
      </Link>
    </article>
  )
}
