import {
  BrowserRouter as Router,
  Routes, // before: Switch
  Route,
  useLocation
} from "react-router-dom"

import { AnimatePresence } from "framer-motion"

import Home from "./components/Home"
import Product1 from "./components/products/Product1"
import Product2 from "./components/products/Product2"
import Product3 from "./components/products/Product3"
import Product4 from "./components/products/Product4"

function App() {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product1" element={<Product1 />} />
        <Route exact path="/product2" element={<Product2 />} />
        <Route exact path="/product3" element={<Product3 />} />
        <Route exact path="/product4" element={<Product4 />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
