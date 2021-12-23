import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./Home";
import PaymentPage from "./PaymentPage";
import CartPage from "./CartPage";

function App() {
  return (
    <div className="App">
      <Cart />
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/cart-page" className="nav-link">
        Cart
      </Link>
      <Link to="/payment-page" className="nav-link">
        Payment Page
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment-page" element={<PaymentPage />} />
        <Route path="/cart-page" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
