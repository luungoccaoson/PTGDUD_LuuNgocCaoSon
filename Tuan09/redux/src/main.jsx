import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './redux/store'
import store1 from './redux/store1';
import store2 from './redux/store2';

createRoot(document.getElementById('root')).render(
  <Provider store={store2}>
    <App />
  </Provider>
)
