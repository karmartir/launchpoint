import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SuccessStories from "./pages/SuccessStories";
import Investments from "./pages/Investments";
import Contact from "./pages/Contact";
import CustomNavbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import Intro from './pages/Intro.jsx'; // Ensure to import the CSS file for global styles

function App() {

  return (
    <>
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  )
}

export default App