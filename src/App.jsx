import Home from './Routes/Home'
import Services from './Routes/Services'
import Contact from './Routes/Contact'
import Layout from './component/Layout'
import Products from './Routes/Products'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} />
          <Route path='Products' element={<Products />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
