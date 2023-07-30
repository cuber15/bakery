
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/navbar';
import { Cart } from "./pages/cart/cart";
import { Bakery } from "./pages/bakery/bakery";
import { Thankyou } from "./pages/cart/thankyou";

import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Bakery />} /> 
            <Route path="/cart" element={<Cart />} />
            <Route path="/thankyou" element={<Thankyou/>} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
