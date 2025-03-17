import { useState } from 'react'
import './App.css'
import Header from './component/header'
import Body from './component/body'
import Footer from './component/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
