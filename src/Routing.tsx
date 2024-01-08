import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import JoinUs from "./pages/JoinUs";
import CollaboratorsPage from "./pages/Collaborators";
// import { firebaseConfig } from "./firebase/firebaseConfig";
// import { initializeApp } from "firebase/app";

// const app = initializeApp(firebaseConfig);
export default function Routing() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join_us" element={<JoinUs />} />
        <Route path="/collaborators" element={<CollaboratorsPage />} />
      </Routes>
      <Footer />
    </>
  );
}
