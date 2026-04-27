import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnimeDetails from "./pages/AnimeDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import NotMadeYet from "./pages/NotMadeYet";

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:id" element={<AnimeDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<NotMadeYet />} />
          <Route path="/profile" element={<NotMadeYet />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
