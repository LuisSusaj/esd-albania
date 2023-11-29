import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import JoinUs from "./pages/JoinUs";

export default function Routing() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join_us" element={<JoinUs />} />
      </Routes>
      <Footer />
    </>
  );
}
