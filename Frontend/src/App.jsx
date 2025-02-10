import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import ProductForm from "./components/ProductForm";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar will be on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productform" element={<ProductForm />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
