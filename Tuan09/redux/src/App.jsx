import { useState } from 'react'
import './App.css'
import CounterRedux from './components/CounterRedux';
import CounterToolkit from './components/CounterToolkit';
import Counter from './features/counter/Counter';
import TodoList from './features/todos/TodoList';
import ThemeToggle from './features/theme/ThemeToggle';
import ShoppingCart from './features/cart/ShoppingCart';
import Auth from './features/auth/Auth';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CounterRedux /> */}
      {/* <CounterToolkit /> */}

      {/* <Counter />
      <TodoList />
      <ThemeToggle /> */}

        {/* <ShoppingCart /> */}
        <Auth />

        
    </>
  )
}

export default App
