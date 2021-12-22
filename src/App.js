import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CardSlider from "./components/CardSlider";
import Cart from "./components/Cart";
import Form from "./components/Form";
import Home from "./Home";
import PaymentPage from "./PaymentPage";

function App() {
  return (
    <div className="App">
    
      <Cart />
      <Link to="/payment-page" className="nav-link">Payment Page</Link>
      <Link to="/" className="nav-link">Home</Link>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment-page" element={<PaymentPage />} />
      </Routes>
    </div>
  );
}

export default App;
