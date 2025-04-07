import './App.css'
import Root from './components/Root.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <>
      <Router>
      <div className="grid grid-cols-[0.7fr_2fr] gap-1 p-1 h-screen">
        <Sidebar />

        <div className="grid grid-rows-[0.7fr_2fr_5fr] gap-1 border-2 border-gray-100 shadow-md">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
      </Router>
    </>
  )
}

export default App
