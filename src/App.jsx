import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsappButton from "./components/WhatsappButton";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import AlbumPage from "./pages/AlbumPage";

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/album/:albumId" element={<AlbumPage />} />
      </Routes>

      <Footer />
      <WhatsappButton />
      <ScrollToTopButton />
    </Router>
  );
}
