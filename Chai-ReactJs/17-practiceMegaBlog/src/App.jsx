import { useState } from 'react'
import './App.css'
import { Footer, Header } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Footer/>
    </>
  )
}

export default App
