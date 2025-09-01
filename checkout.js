import Layout from '../components/Layout'
import { useState } from 'react'

export default function Checkout() {
  const [address, setAddress] = useState({ name: '', line1: '', city: '', postal: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('هذا مثال لواجهة الدفع — سيتم إرسال الطلب إلى backend في التنفيذ الفعلي.')
  }
  return (
    <Layout>
      <main className="container">
        <h1>الدفع</h1>
        <form onSubmit={handleSubmit} className="checkout-form">
          <label>الاسم الكامل</label>
          <input value={address.name} onChange={e=>setAddress({...address, name:e.target.value})} required/>
          <label>العنوان</label>
          <input value={address.line1} onChange={e=>setAddress({...address, line1:e.target.value})} required/>
          <label>المدينة</label>
          <input value={address.city} onChange={e=>setAddress({...address, city:e.target.value})} required/>
          <label>الرمز البريدي</label>
          <input value={address.postal} onChange={e=>setAddress({...address, postal:e.target.value})}/>
          <div style={{marginTop:12}}>
            <button className="btn primary" type="submit">ادفع الآن</button>
          </div>
        </form>
      </main>
    </Layout>
  )
}
