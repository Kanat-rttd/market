import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import FilterData from "./pages/FilterData"
import { useState } from "react"
import OrderConfirmation from "./pages/OrderConfirmation"
import ProductDetail from "./pages/ProductDetail"
import { ProductProvider } from "./context/ProductContext"
import { CartProvider } from "./context/CartContext"

function App() {
  const [order, setOrder] = useState(null);

  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={ <Home /> }></Route>
              <Route path="/shop" element={ <Shop /> }></Route>
              <Route path="/cart" element={ <Cart /> }></Route>
              <Route path="/checkout" element= { <Checkout setOrder={setOrder} /> }></Route>
              <Route path="/order-confirmation" element={ <OrderConfirmation order={order} /> }></Route>
              <Route path="/filter-data" element={ <FilterData /> }></Route>
              <Route path="/product/:id" element={ <ProductDetail /> }></Route>
            </Routes>
          <Footer />  
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  )
}

export default App
