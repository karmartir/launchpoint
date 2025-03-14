import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import About from "./pages/About";
import SuccessStories from "./pages/SuccessStories";
import Investments from "./pages/Investments";
import Contact from "./pages/Contact";
import CustomNavbar from "./components/Navbar";


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
 