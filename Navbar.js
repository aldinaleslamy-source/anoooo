import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [q, setQ] = useState('')
  return (
    <header className="topbar">
      <div className="container nav-inner">
        <div className="logo">
          <Link href="/"><a><img src="/logo.svg" alt="LuxStore" height="36"/></a></Link>
        </div>
        <div className="search">
          <input placeholder="ادور على منتج، ماركة، أو موديل..." value={q} onChange={e=>setQ(e.target.value)} />
        </div>
        <nav className="icons">
          <Link href="/"><a title="الحساب">👤</a></Link>
          <Link href="/"><a title="المفضلة">♡</a></Link>
          <Link href="/cart"><a title="السلة">🛒</a></Link>
        </nav>
      </div>
    </header>
  )
}
