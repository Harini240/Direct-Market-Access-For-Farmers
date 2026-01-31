
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FarmerLogin from "./pages/FarmerLogin";
import ConsumerLogin from "./pages/ConsumerLogin";
import FarmerDashboard from "./pages/FarmerDashboard";
import Market from "./pages/Market";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/farmer-login" element={<FarmerLogin />} />
        <Route path="/consumer-login" element={<ConsumerLogin />} />
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
