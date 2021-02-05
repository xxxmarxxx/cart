import React from 'react'
import { useGlobalContext } from './context'
// lesson 156/157/158/159/160/161/162 cart

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
  const {loading}= useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
