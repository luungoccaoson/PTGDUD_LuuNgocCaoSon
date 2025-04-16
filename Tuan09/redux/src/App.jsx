import { useState } from 'react'
import './App.css'
import CounterRedux from './components/CounterRedux';
import CounterToolkit from './components/CounterToolkit';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterRedux />
      {/* <CounterToolkit /> */}
    </>
  )
}

export default App
