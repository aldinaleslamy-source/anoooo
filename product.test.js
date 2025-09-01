/**
 * Simple test for ProductCard rendering
 * Run: npm test
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductCard from '../components/ProductCard'

test('renders product title and price', () => {
  const product = { id:1, title:'تيشيرت أنيق', price: 199, slug: 'tshirt', images: [{url:'https://via.placeholder.com/600x800.png'}], stock: 2 }
  render(<ProductCard product={product} />)
  expect(screen.getByText('تيشيرت أنيق')).toBeInTheDocument()
  expect(screen.getByText(/199/)).toBeInTheDocument()
})
